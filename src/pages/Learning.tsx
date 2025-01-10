import React, { useState } from 'react';
import { FileText, Video, BookOpen } from 'lucide-react';

type Tab = 'documents' | 'videos' | 'blogs';

const TabButton = ({ active, icon: Icon, label, onClick }: any) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors
      ${active 
        ? 'bg-indigo-600 text-white' 
        : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}
  >
    <Icon className="h-5 w-5" />
    <span>{label}</span>
  </button>
);

const Learning = () => {
  const [activeTab, setActiveTab] = useState<Tab>('documents');

  const tabs = [
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'videos', label: 'Video Lectures', icon: Video },
    { id: 'blogs', label: 'Blogs', icon: BookOpen }
  ];

  const content = {
    documents: [
      { title: 'Interview Preparation Guide', description: 'Comprehensive guide for technical interviews' },
      { title: 'Data Structures & Algorithms', description: 'Essential concepts and implementations' },
      { title: 'System Design Primer', description: 'Learn how to design scalable systems' }
    ],
    videos: [
      { title: 'Mock Interview Sessions', description: 'Watch expert-led mock interviews' },
      { title: 'Problem Solving Techniques', description: 'Step-by-step problem solving approaches' },
      { title: 'Behavioral Interview Tips', description: 'Master behavioral questions' }
    ],
    blogs: [
      { title: 'Top Interview Questions 2024', description: 'Most frequently asked questions' },
      { title: 'Success Stories', description: 'Learn from successful candidates' },
      { title: 'Industry Insights', description: 'Latest trends in tech interviews' }
    ]
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">My Learning</h1>
      </div>

      <div className="flex space-x-4 border-b">
        {tabs.map(({ id, label, icon }) => (
          <TabButton
            key={id}
            active={activeTab === id}
            icon={icon}
            label={label}
            onClick={() => setActiveTab(id as Tab)}
          />
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content[activeTab].map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
            <button className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learning;