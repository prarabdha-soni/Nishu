import React, { useState } from 'react';

// Extend the Window interface to include google
declare global {
  interface Window {
    google: any;
  }
}

interface SignInPageProps {
  onSignInSuccess: () => void;
}

const SignInPage: React.FC<SignInPageProps> = ({ onSignInSuccess }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate email login process
    setTimeout(() => {
      console.log('Email login:', email);
      setIsLoading(false);
      onSignInSuccess();
    }, 1500);
  };

  const handleGoogleSignIn = () => {
    // Skip Google authentication for now
    onSignInSuccess();
  };

  const handleGoogleResponse = (response: any) => {
    try {
      // Decode the JWT token to get user info
      const payload = JSON.parse(atob(response.credential.split('.')[1]));
      console.log('Google Sign-In successful:', payload);
      
      // Store user info in localStorage for demo purposes
      localStorage.setItem('user', JSON.stringify({
        name: payload.name,
        email: payload.email,
        picture: payload.picture,
      }));
      
      onSignInSuccess();
    } catch (error) {
      console.error('Error processing Google Sign-In:', error);
      // Fallback to demo success
      onSignInSuccess();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-2 sm:px-4">
      <div className="w-full max-w-sm sm:max-w-md">
        {/* Main Sign-in Card */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 relative">
          {/* Logo */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-xl sm:text-2xl">M</span>
            </div>
          </div>
          {/* Title */}
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-6 sm:mb-8">
            Continue to Nishu
          </h1>
          {/* Email Form */}
          <form onSubmit={handleEmailSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-medium py-2 sm:py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                'Send Login Link'
              )}
            </button>
          </form>
          {/* Divider */}
          <div className="my-4 sm:my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-2 sm:px-4 text-xs sm:text-sm text-gray-500">Or continue with</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          {/* Google Sign-in Button */}
          <button
            id="google-signin-button"
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-gray-700 font-medium">Google</span>
          </button>
        </div>

        {/* Account Suggestion Card */}
        <div className="mt-4 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600 text-sm font-medium">P</span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">Prarabdha soni</div>
              <div className="text-sm text-gray-500">prarabdha21@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;