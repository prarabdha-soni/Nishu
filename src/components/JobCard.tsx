import React from 'react';
import { useState } from 'react';

interface JobCardProps {
  title: string;
  company: string;
  logo: string;
  salary: string;
  salaryRange: string;
  offerEquity: boolean;
  jobType: string;
  onClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  logo,
  salary,
  salaryRange,
  offerEquity,
  jobType,
  onClick,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyReferral = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(window.location.href + '?ref=your-referral-code');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white border border-gray-200 rounded-xl p-2 hover:shadow transition-shadow cursor-pointer w-full flex items-center justify-between mb-3"
    >
      {/* Left: Large faded logo */}
      <div className="w-10 h-10 flex items-center justify-center mr-4 bg-gray-100 rounded-full overflow-hidden">
        {typeof logo === 'string' && (logo.endsWith('.png') || logo.endsWith('.jpg') || logo.endsWith('.jpeg') || logo.endsWith('.svg')) ? (
          <img src={logo} alt={company + ' logo'} className="w-full h-full object-contain" />
        ) : (
          <span className="text-gray-200 text-3xl font-extrabold select-none">{logo}</span>
        )}
      </div>
      {/* Middle: Job Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-normal text-black mb-1 truncate">{title}</h3>
        <div className="flex items-center space-x-2 text-gray-500 text-sm font-medium">
          <span>{company}</span>
          {offerEquity && (
            <>
              <span>·</span>
              <span>Offers equity</span>
            </>
          )}
        </div>
      </div>
      {/* Right: Salary and Range */}
      <div className="flex flex-col items-end min-w-fit ml-6">
        <div className="flex items-center space-x-2 mt-0">
          <button
            className="flex items-center text-purple-600 font-semibold text-sm bg-white border border-purple-200 px-3 py-0.5 rounded-full shadow-sm hover:bg-purple-50 transition relative"
            onClick={handleCopyReferral}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            tabIndex={0}
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8V7a5 5 0 00-10 0v1M5 8h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2z"/></svg>
            {salary}
            {showTooltip && (
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-gray-700 text-white text-sm rounded shadow-lg whitespace-normal break-words max-w-xs w-max z-10">
                {copied ? 'Copied!' : `Earn ${salary} for a successful referral. Click to copy referral link`}
              </span>
            )}
          </button>
          <div className="text-base text-black font-semibold whitespace-nowrap">
            {salaryRange}
          </div>
        </div>
        {jobType && (
          <div className={`text-sm font-normal mt-1 px-3 py-0.5 rounded-full ${jobType === 'Full-time' ? 'bg-green-100 text-green-800 font-semibold inline-block' : 'text-black'}`}>{jobType}</div>
        )}
      </div>
    </div>
  );
};

export default JobCard;