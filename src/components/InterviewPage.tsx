import React from 'react';

interface InterviewPageProps {
  job: any;
  onBack: () => void;
}

const InterviewPage: React.FC<InterviewPageProps> = ({ job, onBack }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full pt-8">
        {/* Left: Webcam and device settings */}
        <div className="flex-1 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-8 w-full text-left">{job?.title || 'xAI Operations Interview'}</h1>
          <div className="w-full max-w-2xl aspect-video bg-black rounded-2xl flex flex-col items-center justify-center mb-6 relative">
            <div className="flex flex-col items-center justify-center h-full w-full">
              <svg className="w-16 h-16 text-white mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v11a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 014 17.5v-11z" /></svg>
              <div className="text-white text-lg font-semibold mb-1">Camera permission required</div>
              <div className="text-white text-sm">You must enable camera access before joining the AI interview.</div>
            </div>
            <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-red-500 text-white rounded-full p-3 shadow-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v11a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 014 17.5v-11z" /></svg>
            </button>
          </div>
          {/* Device selectors */}
          <div className="flex flex-wrap gap-4 w-full max-w-2xl mb-4 items-center">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 1v22m6-6H6" /></svg>
              <span className="text-sm">Microphone Array (Realtek)</span>
              <span className="text-xs text-blue-600 underline cursor-pointer ml-2">Test your mic</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6a2 2 0 012-2h2a2 2 0 012 2v13" /></svg>
              <span className="text-sm">Speakers (Realtek(R) A)</span>
              <span className="text-xs text-blue-600 underline cursor-pointer ml-2">Play test sound</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 8a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>
              <span className="text-sm">Permission required</span>
            </div>
          </div>
        </div>
        {/* Right: Instructions and Start Interview */}
        <div className="w-full lg:w-[400px] flex flex-col items-center lg:items-start px-0 lg:px-8 mt-8 lg:mt-0">
          <h2 className="text-2xl font-bold mb-6 text-center lg:text-left">Get ready for your AI interview</h2>
          <ul className="mb-6 space-y-3 w-full">
            <li className="flex items-center gap-2 text-gray-700 text-base"><span className="text-purple-600">📅</span> Start now or come back later</li>
            <li className="flex items-center gap-2 text-gray-700 text-base"><span className="text-purple-600">⏰</span> Expect to spend 30 minutes</li>
            <li className="flex items-center gap-2 text-gray-700 text-base"><span className="text-purple-600">⚙️</span> Check your device settings</li>
            <li className="flex items-center gap-2 text-gray-700 text-base"><span className="text-purple-600">🔇</span> Find a quiet place with stable internet</li>
            <li className="flex items-center gap-2 text-gray-700 text-base"><span className="text-purple-600">🖥️</span> Test screen sharing permissions <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full ml-2">Test</span></li>
          </ul>
          <button className="w-full bg-purple-400 text-white text-lg font-semibold py-3 rounded-full mb-4 cursor-not-allowed" disabled>Start Interview</button>
          <div className="flex gap-3 w-full justify-center lg:justify-start mb-4">
            <button className="bg-white border border-gray-300 rounded-full px-5 py-2 text-base font-medium">FAQs</button>
            <button className="bg-white border border-gray-300 rounded-full px-5 py-2 text-base font-medium">I'm having issues</button>
          </div>
          <div className="text-xs text-gray-500 w-full text-center lg:text-left">Mercor uses generative AI to conduct the AI interview. Your responses are used only to assess your candidacy and are never used to train AI models.</div>
        </div>
      </div>
      {/* Progress bar and navigation */}
      <div className="w-full px-4 py-3 bg-white border-t border-gray-200 flex items-center justify-between mt-4">
        <div className="flex-1 flex items-center">
          <div className="w-1/3 h-1.5 bg-purple-500 rounded-full" />
          <div className="w-1/3 h-1.5 bg-gray-200 rounded-full mx-2" />
          <div className="w-1/3 h-1.5 bg-gray-200 rounded-full" />
        </div>
        <div className="flex-1 flex justify-between text-sm font-medium text-gray-700 mt-2">
          <span>Upload resume</span>
          <span>Take interview</span>
          <span>Complete application</span>
        </div>
      </div>
    </div>
  );
};

export default InterviewPage; 