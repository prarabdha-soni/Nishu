import React from 'react';
import JobCard from './JobCard';
import merkleLogo from '../assets/merkle.png';
import openaiLogo from '../assets/openai.png';
import xaiLogo from '../assets/xai.png';

interface JobListProps {
  onJobClick: (job: any) => void;
}

const JobList: React.FC<JobListProps> = ({ onJobClick }) => {
  const jobs = [
    {
      title: 'Paid Search Associate Director',
      company: 'Merkle',
      logo: merkleLogo,
      salary: 'Earn-$15,000',
      salaryRange: '$335K - $405K / year',
      offerEquity: true,
      jobType: 'Full-time',
    },
    {
      title: 'Software Engineer, Backend',
      company: 'OpenAI',
      logo: openaiLogo,
      salary: 'Earn-$15,000',
      salaryRange: '$225K - $405K / year',
      offerEquity: true,
      jobType: 'Full-time',
    },
    {
      title: 'Software Engineer, Infrastructure',
      company: 'OpenAI',
      logo: openaiLogo,
      salary: 'Earn-$15,000',
      salaryRange: '$210K - $405K / year',
      offerEquity: true,
      jobType: 'Full-time',
    },
    {
      title: 'Member of Program Staff',
      company: 'xAI',
      logo: xaiLogo,
      salary: 'Earn-$10,000',
      salaryRange: '$140K - $196K / year',
      offerEquity: true,
      jobType: 'Full-time',
    },
    {
      title: 'Technical Recruiter',
      company: 'Mercor',
      logo: merkleLogo,
      salary: 'Earn-$10,000',
      salaryRange: '$120K - $180K / year',
      offerEquity: true,
      jobType: 'Full-time',
    },
  ];

  return (
    <div className="flex-1 p-6">
      <div className="space-y-4">
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} onClick={() => onJobClick(job)} />
        ))}
      </div>
    </div>
  );
};

export default JobList;