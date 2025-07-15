import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import JobList from './components/JobList';
import ReferralsPage from './components/ReferralsPage';
import JobDetailsPage from './components/JobDetailsPage';
import HomePage from './components/HomePage';
import SignInPage from './components/SignInPage';
import PreferencesPage from './components/PreferencesPage';

function App() {
  const [currentPage, setCurrentPage] = useState('explore');
  const [selectedJob, setSelectedJob] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Check for existing authentication on app load
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const handleJobClick = (job: any) => {
    if (isAuthenticated) {
      setSelectedJob(job);
      setCurrentPage('job-details');
    } else {
      setSelectedJob(job);
      setCurrentPage('signin');
    }
  };

  const handleBackToJobs = () => {
    setSelectedJob(null);
    setCurrentPage('explore');
  };

  const handleSignInSuccess = () => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsAuthenticated(true);
    setCurrentPage('job-details');
  };

  const handleSignOut = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
    setCurrentPage('explore');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'signin':
        return <SignInPage onSignInSuccess={handleSignInSuccess} />;
      case 'job-details':
        return <JobDetailsPage onBack={handleBackToJobs} />;
      case 'referrals':
        return <ReferralsPage />;
      case 'home':
        return <HomePage user={user} />;
      case 'preferences':
        return <PreferencesPage />;
      case 'explore':
      default:
        return <JobList onJobClick={handleJobClick} />;
    }
  };

  // Show sign-in page without header and sidebar
  if (currentPage === 'signin') {
    return <SignInPage onSignInSuccess={handleSignInSuccess} />;
  }

  return (
    <div className="h-screen bg-gray-50 overflow-hidden">
      <Header user={user} onSignOut={handleSignOut} />
      <div className="flex h-[calc(100vh-64px)]">{/* 64px = header height */}
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} user={user} onSignOut={handleSignOut} />
        <div className="flex-1 h-full overflow-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;