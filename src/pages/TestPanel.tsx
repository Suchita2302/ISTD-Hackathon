import React, { useState, useEffect } from 'react';
import { Brain, Code, Lightbulb, Heart, Users, Calendar, AlertTriangle } from 'lucide-react';
import AptitudeRound from '../components/rounds/AptitudeRound';
import WritingRound from '../components/rounds/WritingRound';
import TechnicalRound from '../components/rounds/TechnicalRound';
import IQRound from '../components/rounds/IQRound';
import EQRound from '../components/rounds/EQRound';

const TestPanel = () => {
  const [activeRound, setActiveRound] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && (activeRound !== null || activeSection !== null)) {
        setShowWarning(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [activeRound, activeSection]);

  const rounds = [
    {
      id: 1,
      title: 'Aptitude & Writing',
      icon: Brain,
      description: 'MCQs and paragraph writing assessment',
      sections: [
        { id: 'aptitude', name: 'Aptitude MCQ', component: AptitudeRound },
        { id: 'writing', name: 'Paragraph Writing', component: WritingRound }
      ]
    },
    {
      id: 2,
      title: 'Technical Assessment',
      icon: Code,
      description: 'Error solving and code writing challenges',
      component: TechnicalRound
    },
    {
      id: 3,
      title: 'IQ Assessment',
      icon: Lightbulb,
      description: 'Intelligence quotient evaluation',
      component: IQRound
    },
    {
      id: 4,
      title: 'EQ Assessment',
      icon: Heart,
      description: 'Emotional intelligence evaluation',
      component: EQRound
    },
    {
      id: 5,
      title: 'Group Discussion',
      icon: Users,
      description: 'Interactive group discussion simulation',
      comingSoon: true
    },
    {
      id: 6,
      title: 'Final Interview',
      icon: Calendar,
      description: 'Scheduled one-on-one interview',
      comingSoon: true
    }
  ];

  const handleStartRound = (roundId: number, sectionId?: string) => {
    if (roundId === 1 && !sectionId) return; // Require section selection for Round 1
    setActiveRound(roundId);
    setActiveSection(sectionId || null);
    if (roundId === 2) { // Technical round
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    }
  };

  const handleExitRound = async () => {
    if (isFullScreen) {
      await document.exitFullscreen();
      setIsFullScreen(false);
    }
    setActiveRound(null);
    setActiveSection(null);
  };

  if (showWarning) {
    return (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-xl max-w-md">
          <div className="flex items-center space-x-3 text-yellow-500 mb-4">
            <AlertTriangle className="h-8 w-8" />
            <h2 className="text-xl font-bold">Warning</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Switching tabs or leaving the assessment window may result in automatic submission or disqualification.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => setShowWarning(false)}
              className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            >
              Continue Assessment
            </button>
            <button
              onClick={() => {
                setShowWarning(false);
                handleExitRound();
              }}
              className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Exit Assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (activeRound !== null) {
    const round = rounds[activeRound - 1];
    
    if (round.comingSoon) {
      return (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-gray-600 mb-8">This round is currently under development.</p>
          <button onClick={handleExitRound} className="btn-primary">
            Back to Rounds
          </button>
        </div>
      );
    }

    if (activeRound === 1) {
      const Section = round.sections?.find(s => s.id === activeSection)?.component;
      if (!Section) return null;

      return (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              {round.title} - {round.sections?.find(s => s.id === activeSection)?.name}
            </h1>
            <button onClick={handleExitRound} className="btn-primary">
              Exit Assessment
            </button>
          </div>
          <Section />
        </div>
      );
    }

    const Component = round.component;
    if (!Component) return null;

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">{round.title}</h1>
          <button onClick={handleExitRound} className="btn-primary">
            Exit Assessment
          </button>
        </div>
        <Component />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Test Panel</h1>
        <p className="text-gray-600 mt-2">Complete all rounds to master your interview skills</p>
      </div>

      <div className="grid gap-6">
        {rounds.map(({ id, title, icon: Icon, description, sections, comingSoon }) => (
          <div key={id} className="bg-white rounded-xl shadow-md p-6">
            <div className="md:flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Round {id}: {title}</h3>
                  <p className="text-gray-600 mt-1">{description}</p>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0">
                {sections ? (
                  <div className="flex flex-col space-y-2">
                    {sections.map(section => (
                      <button
                        key={section.id}
                        onClick={() => handleStartRound(id, section.id)}
                        className="btn-primary"
                      >
                        Start {section.name}
                      </button>
                    ))}
                  </div>
                ) : (
                  <button
                    onClick={() => handleStartRound(id)}
                    disabled={comingSoon}
                    className={`btn-primary ${comingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {comingSoon ? 'Coming Soon' : 'Start Round'}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestPanel;