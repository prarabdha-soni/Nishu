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
import InterviewPage from './components/InterviewPage';

function App() {
  const [currentPage, setCurrentPage] = useState('explore');
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobClick = (job: any) => {
    setSelectedJob(job);
    setCurrentPage('job-details');
  };

  const handleBackToJobs = () => {
    setSelectedJob(null);
    setCurrentPage('explore');
  };

  const handleApply = () => {
    setCurrentPage('interview');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'job-details':
        return <JobDetailsPage job={selectedJob} onBack={handleBackToJobs} onApply={handleApply} />;
      case 'interview':
        return <InterviewPage job={selectedJob} onBack={handleBackToJobs} />;
      case 'referrals':
        return <ReferralsPage />;
      case 'home':
        return <HomePage user={null} />;
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
      <Header />
      <div className="flex flex-col sm:flex-row h-[calc(100vh-64px)]">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <div className="flex-1 h-full overflow-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;