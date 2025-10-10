import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import flowbieImg from "./flowbie.png";

export default function FloatingFlowbie() {
  const navigate = useNavigate();
  const [showQuestion, setShowQuestion] = useState(false);
  const [showSpeech, setShowSpeech] = useState(false);
  const [tourStep, setTourStep] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  const tourSteps = [
    {
      question: "Can I tell you what we're all about?!",
      speech: "We're a community built by athletes, for athletes — people who find meaning in effort and joy in motion, and meaning in connections. FlowNation brings endurance sports together in one place, connecting you to events, training partners, and the rhythm of shared pursuit.",
      nextQuestion: "Can I show you around?",
      route: null
    },
    {
      question: null,
      speech: "The paddock's our hangout — where you always know what's going on. Races, rides, gear deals, local shop chatter — it's all here. It's how we stay connected, keep each other rolling, and never miss the next big thing.",
      nextQuestion: "Let's keep going!",
      route: "/paddock"
    },
    {
      question: null,
      speech: "FlowHub is your cockpit — the place where all your rides, races, and plans come together. It's where your data turns into insight, your goals into action, and your connections into momentum. Think of it as mission control for your endurance life — everything in one place, built to keep you in flow.",
      nextQuestion: "Let's keep going!",
      route: "/flowhub"
    },
    {
      question: null,
      speech: "Discover is where your next adventure starts. It's how you find new races, epic routes, and the people who make them worth doing. Whether it's a local ride or a bucket-list event, Discover keeps you exploring, not scrolling.",
      nextQuestion: "Let's keep going!",
      route: "/events"
    },
    {
      question: null,
      speech: "BuddyFinder is where tech meets vibe. One click and the algorithm finds your pace, your vibe, your crew. It's ride-matching for all of us — no awkward meetups, just instant chemistry on two wheels.",
      nextQuestion: "Finish Tour",
      route: "/community"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQuestion(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleYesClick = () => {
    setShowQuestion(false);
    setShowSpeech(true);
  };

  const handleNoClick = () => {
    setShowQuestion(false);
    setDismissed(true);
  };

  const handleNextStep = () => {
    if (tourStep === tourSteps.length - 1) {
      setShowSpeech(false);
      setDismissed(true);
      return;
    }

    setShowSpeech(false);
    const nextStep = tourSteps[tourStep + 1];
    if (nextStep.route) {
      navigate(nextStep.route);
      setTimeout(() => {
        setTourStep(tourStep + 1);
        setShowSpeech(true);
      }, 500);
    } else {
      setTimeout(() => {
        setTourStep(tourStep + 1);
        setShowSpeech(true);
      }, 300);
    }
  };

  const handleCloseSpeech = () => {
    setShowSpeech(false);
    setDismissed(true);
  };

  if (dismissed) return null;

  const currentStep = tourSteps[tourStep];

  return (
    <>
      {!showQuestion && !showSpeech && (
        <div className="fixed bottom-8 right-8 z-50 animate-float">
          <img
            src={flowbieImg}
            alt="Flowbie"
            className="w-20 h-20 drop-shadow-2xl cursor-pointer hover:scale-110 transition-transform"
            onClick={() => setShowQuestion(true)}
          />
        </div>
      )}

      {showQuestion && (
        <div className="fixed bottom-32 right-8 z-50 animate-slideIn">
          <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs border-2 border-cyan-400 relative">
            <div className="absolute -bottom-3 right-8 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-white"></div>
            <div className="absolute -bottom-4 right-8 w-0 h-0 border-l-[17px] border-l-transparent border-r-[17px] border-r-transparent border-t-[17px] border-t-cyan-400"></div>

            <p className="text-gray-900 font-medium mb-4 text-center">
              {currentStep.question}
            </p>

            <div className="flex gap-3 justify-center">
              <button
                onClick={handleYesClick}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Yes!
              </button>
              <button
                onClick={handleNoClick}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Not now
              </button>
            </div>
          </div>
        </div>
      )}

      {showSpeech && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full border-4 border-cyan-400 relative animate-scaleIn">
            <button
              onClick={handleCloseSpeech}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
            >
              ✕
            </button>

            <div className="flex items-start gap-4 mb-6">
              <img src={flowbieImg} alt="Flowbie" className="w-16 h-16 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-cyan-600 mb-2">Flowbie says:</h3>
              </div>
            </div>

            <p className="text-gray-800 text-lg leading-relaxed">
              {currentStep.speech}
            </p>

            <div className="mt-6 text-center">
              <button
                onClick={handleNextStep}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                {currentStep.nextQuestion || "Next"}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
