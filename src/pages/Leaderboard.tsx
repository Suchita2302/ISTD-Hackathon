import React, { useState } from 'react';
import { Trophy, Building2, Users } from 'lucide-react';

const LeaderboardTable = ({ data }: { data: any[] }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white rounded-lg overflow-hidden">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Institute</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {data.map((item, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                {index < 3 ? (
                  <Trophy className={`h-5 w-5 ${
                    index === 0 ? 'text-yellow-400' :
                    index === 1 ? 'text-gray-400' :
                    'text-orange-400'
                  }`} />
                ) : (
                  <span className="text-gray-900">{index + 1}</span>
                )}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-900">{item.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-500">{item.institute}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {item.score}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState<'institute' | 'overall'>('overall');

  const mockData = {
    overall: [
      { name: 'John Doe', institute: 'MIT', score: 985 },
      { name: 'Jane Smith', institute: 'Stanford', score: 970 },
      { name: 'Alex Johnson', institute: 'Harvard', score: 965 },
      { name: 'Sarah Williams', institute: 'Berkeley', score: 950 },
      { name: 'Michael Brown', institute: 'CMU', score: 945 }
    ],
    institute: [
      { name: 'Emily Davis', institute: 'MIT', score: 960 },
      { name: 'David Wilson', institute: 'MIT', score: 955 },
      { name: 'Lisa Anderson', institute: 'MIT', score: 940 },
      { name: 'James Taylor', institute: 'MIT', score: 935 },
      { name: 'Emma Martinez', institute: 'MIT', score: 930 }
    ]
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Leaderboard</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab('overall')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
              activeTab === 'overall'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-600 hover:bg-indigo-50'
            }`}
          >
            <Users className="h-5 w-5" />
            <span>Overall</span>
          </button>
          <button
            onClick={() => setActiveTab('institute')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
              activeTab === 'institute'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-600 hover:bg-indigo-50'
            }`}
          >
            <Building2 className="h-5 w-5" />
            <span>Institute</span>
          </button>
        </div>
      </div>

      <LeaderboardTable data={mockData[activeTab]} />
    </div>
  );
};

export default Leaderboard;