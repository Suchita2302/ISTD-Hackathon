import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, TestTube2, Trophy, Brain, Code, Lightbulb, Heart, Users, Calendar, ArrowRight } from 'lucide-react';

const RoundCard = ({ number, title, icon: Icon, description, features }: any) => (
  <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
    <div className="flex items-center space-x-3 mb-4">
      <div className="bg-indigo-100 p-3 rounded-lg">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <div>
        <span className="text-sm font-medium text-indigo-600">Round {number}</span>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2 mb-4">
      {features.map((feature: string, index: number) => (
        <li key={index} className="flex items-center text-sm text-gray-600">
          <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description, to }: any) => (
  <Link
    to={to}
    className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg hover:scale-105"
  >
    <div className="flex items-center space-x-4">
      <div className="bg-indigo-100 p-3 rounded-lg">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  </Link>
);

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: "My Learning",
      description: "Access curated content, video lectures, and blogs",
      to: "/learning"
    },
    {
      icon: TestTube2,
      title: "Test Panel",
      description: "Take mock interviews and improve your skills",
      to: "/test-panel"
    },
    {
      icon: Trophy,
      title: "Leaderboard",
      description: "Compare your performance with others",
      to: "/leaderboard"
    }
  ];

  const rounds = [
    {
      number: 1,
      title: "Aptitude & Writing",
      icon: Brain,
      description: "Test your quantitative and writing abilities",
      features: [
        "40 MCQ questions from various categories",
        "AI-powered paragraph writing assessment",
        "Detailed feedback and scoring",
        "Time-bound sections"
      ]
    },
    {
      number: 2,
      title: "Technical Assessment",
      icon: Code,
      description: "Showcase your coding and problem-solving skills",
      features: [
        "Interactive code editor",
        "Multiple programming languages",
        "Real-time code execution",
        "AI-based code review"
      ]
    },
    {
      number: 3,
      title: "IQ Assessment",
      icon: Lightbulb,
      description: "Evaluate your intelligence quotient",
      features: [
        "20 challenging IQ questions",
        "Pattern recognition",
        "Logical reasoning",
        "Spatial awareness"
      ]
    },
    {
      number: 4,
      title: "EQ Assessment",
      icon: Heart,
      description: "Measure your emotional intelligence",
      features: [
        "20 situational questions",
        "Behavioral analysis",
        "Empathy evaluation",
        "Social skills assessment"
      ]
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to PrepAI
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your AI-powered interview training platform. Master your interview skills with personalized practice sessions and comprehensive assessments.
        </p>
      </div>

      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-8 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Ready to Excel?</h2>
            <p className="text-lg mb-6">Start your preparation journey with our comprehensive interview training program.</p>
            <Link to="/test-panel" className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="font-semibold text-xl mb-2">6 Rounds</h3>
              <p>Comprehensive interview preparation</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="font-semibold text-xl mb-2">AI Powered</h3>
              <p>Smart feedback and analysis</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="font-semibold text-xl mb-2">Real-time</h3>
              <p>Instant evaluation and scoring</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="font-semibold text-xl mb-2">Adaptive</h3>
              <p>Personalized learning path</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Assessment Rounds</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {rounds.map((round, index) => (
            <RoundCard key={index} {...round} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Access</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Updates</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            <h3 className="font-semibold">New Features</h3>
            <p className="text-gray-600">Enhanced AI feedback system for more accurate assessments</p>
          </div>
          <div className="space-y-2">
            <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
            <h3 className="font-semibold">Question Bank</h3>
            <p className="text-gray-600">Added 1000+ new questions across all categories</p>
          </div>
          <div className="space-y-2">
            <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
            <h3 className="font-semibold">Technical Updates</h3>
            <p className="text-gray-600">Improved code editor with support for more languages</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;