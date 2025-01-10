import React from 'react';
import { User, Mail, Building2, Phone, BookOpen, Award } from 'lucide-react';

const ProfileSection = ({ title, children }: any) => (
  <div className="bg-white rounded-xl shadow-md p-6">
    <h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>
    {children}
  </div>
);

const Profile = () => {
  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    institute: 'Massachusetts Institute of Technology',
    phone: '+1 (555) 123-4567',
    education: 'Computer Science, Class of 2024',
    achievements: [
      'Completed all interview rounds',
      'Top 10 in institute ranking',
      'Perfect score in technical assessment'
    ]
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="bg-indigo-100 p-4 rounded-full">
          <User className="h-8 w-8 text-indigo-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{userProfile.name}</h1>
          <p className="text-gray-600">Student</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <ProfileSection title="Personal Information">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-gray-400" />
              <span className="text-gray-600">{userProfile.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Building2 className="h-5 w-5 text-gray-400" />
              <span className="text-gray-600">{userProfile.institute}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-gray-400" />
              <span className="text-gray-600">{userProfile.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <BookOpen className="h-5 w-5 text-gray-400" />
              <span className="text-gray-600">{userProfile.education}</span>
            </div>
          </div>
        </ProfileSection>

        <ProfileSection title="Achievements">
          <div className="space-y-4">
            {userProfile.achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-indigo-600" />
                <span className="text-gray-600">{achievement}</span>
              </div>
            ))}
          </div>
        </ProfileSection>

        <ProfileSection title="Progress">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                <span className="text-sm font-medium text-gray-700">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Technical Skills</span>
                <span className="text-sm font-medium text-gray-700">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </ProfileSection>
      </div>
    </div>
  );
};

export default Profile;