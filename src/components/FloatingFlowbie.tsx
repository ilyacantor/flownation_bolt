import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import flowbieImg from "./flowbie.png";

export default function FloatingFlowbie() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showInitialGreeting, setShowInitialGreeting] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showSpeech, setShowSpeech] = useState(false);
  const [tourStep, setTourStep] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [tourActive, setTourActive] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleText, setBubbleText] = useState("");
  const [isIdle, setIsIdle] = useState(true);

  const tourSteps = [
    {
      question: "Can I tell you what we're all about?!",
      speech: "We're a community built by athletes, for athletes — people who find meaning in effort and joy in motion, and meaning in connections. FlowNation brings endurance sports together in one place, connecting you to events, training partners, and the rhythm of shared pursuit.",
      nextQuestion: "Can I show you around?",
      route: null,
      showClickAround: false
    },
    {
      question: null,
      speech: "The paddock's our hangout — where you always know what's going on. Races, rides, gear deals, local shop chatter — it's all here. It's how we stay connected, keep each other rolling, and never miss the next big thing.",
      nextQuestion: "Keep going",
      route: "/paddock",
      showClickAround: true
    },
    {
      question: null,
      speech: "FlowHub is your cockpit — the place where all your rides, races, and plans come together. It's where your data turns into insight, your goals into action, and your connections into momentum. Think of it as mission control for your endurance life — everything in one place, built to keep you in flow.",
      nextQuestion: "Keep going",
      route: "/flowhub",
      showClickAround: true
    },
    {
      question: null,
      speech: "Discover is where your next adventure starts. It's how you find new races, epic routes, and the people who make them worth doing. Whether it's a local ride or a bucket-list event, Discover keeps you exploring, not scrolling.",
      nextQuestion: "Keep going",
      route: "/discover",
      showClickAround: true
    },
    {
      question: null,
      speech: "BuddyFinder is where tech meets vibe. One click and the algorithm finds your pace, your vibe, your crew. It's ride-matching for all of us — no awkward meetups, just instant chemistry on two wheels.",
      nextQuestion: "Finish Tour",
      route: "/buddymatch",
      showClickAround: false
    }
  ];

  useEffect(() => {
    const savedStep = localStorage.getItem('flowbieTourStep');
    const savedTourActive = localStorage.getItem('flowbieTourActive');
    const introDone = localStorage.getItem('flowbie_intro_done');

    if (savedTourActive === 'true' && savedStep) {
      setTourStep(parseInt(savedStep));
      setTourActive(true);
      setIsMinimized(true);
      setIsIdle(false);
    } else if (introDone !== 'true' && !dismissed && location.pathname === '/') {
      const timer = setTimeout(() => {
        setShowInitialGreeting(true);
        setIsIdle(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (tourActive && isMinimized && location.pathname !== '/') {
      const currentStep = tourSteps[tourStep];
      if (currentStep?.route === location.pathname) {
        setIsMinimized(true);
      }
    }
  }, [location.pathname, tourActive, isMinimized, tourStep]);

  const handleInitialYes = () => {
    setShowInitialGreeting(false);
    setBubbleText("Awesome — let's roll!");
    setShowBubble(true);
    setIsIdle(false);
    localStorage.setItem('flowbie_intro_done', 'true');

    setTimeout(() => {
      setShowBubble(false);
      setTourActive(true);
      setIsMinimized(true);
      localStorage.setItem('flowbieTourActive', 'true');
      localStorage.setItem('flowbieTourStep', '1');
      navigate('/paddock');
      setTourStep(1);
    }, 1500);
  };

  const handleInitialNo = () => {
    setShowInitialGreeting(false);
    setBubbleText("Cool, I'll hang here if you need me.");
    setShowBubble(true);
    setIsIdle(true);
    localStorage.setItem('flowbie_intro_done', 'true');

    setTimeout(() => {
      setShowBubble(false);
      setIsMinimized(true);
    }, 2000);
  };

  const handleYesClick = () => {
    setShowQuestion(false);
    setShowSpeech(true);
    setTourActive(true);
    setIsIdle(false);
    localStorage.setItem('flowbieTourActive', 'true');
  };

  const handleNoClick = () => {
    setShowQuestion(false);
    setDismissed(true);
    setIsIdle(true);
    localStorage.removeItem('flowbieTourActive');
    localStorage.removeItem('flowbieTourStep');
  };

  const handleNextStep = () => {
    if (tourStep === tourSteps.length - 1) {
      setShowSpeech(false);
      setDismissed(true);
      setTourActive(false);
      localStorage.removeItem('flowbieTourActive');
      localStorage.removeItem('flowbieTourStep');
      return;
    }

    setShowSpeech(false);
    const nextStepIndex = tourStep + 1;
    const nextStep = tourSteps[nextStepIndex];

    localStorage.setItem('flowbieTourStep', nextStepIndex.toString());

    if (nextStep.route) {
      setIsMinimized(true);
      navigate(nextStep.route);
      setTourStep(nextStepIndex);
    } else {
      setTimeout(() => {
        setTourStep(nextStepIndex);
        setShowSpeech(true);
      }, 300);
    }
  };

  const handleClickAround = () => {
    setShowSpeech(false);
    setIsMinimized(true);
    setBubbleText("I'm here for you!");
    setShowBubble(true);
    setTimeout(() => {
      setShowBubble(false);
    }, 2000);
  };

  const handleMinimizedClick = () => {
    if (tourActive && tourStep < tourSteps.length) {
      setBubbleText("Let's keep going!!");
      setShowBubble(true);
      setTimeout(() => {
        setShowBubble(false);
        handleNextStep();
      }, 1500);
    } else {
      setShowQuestion(true);
    }
  };

  const handleCloseSpeech = () => {
    setShowSpeech(false);
    setDismissed(true);
    setTourActive(false);
    localStorage.removeItem('flowbieTourActive');
    localStorage.removeItem('flowbieTourStep');
  };

  if (dismissed) return null;

  const currentStep = tourSteps[tourStep];

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50">
        <div className={`relative ${isIdle ? 'animate-breathe' : 'animate-pulse-glow'}`}>
          <div className={`absolute inset-0 rounded-full blur-xl ${isIdle ? 'bg-cyan-400/30' : 'bg-orange-500/40'} animate-pulse`}></div>
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-orange-500/20 rounded-full blur-md"></div>

          <img
            src={flowbieImg}
            alt="Flowbie"
            className={`relative w-24 h-24 rounded-full object-cover drop-shadow-2xl cursor-pointer transition-all duration-300 ${
              !isMinimized ? 'hover:scale-110' : 'hover:scale-105'
            }`}
            onClick={isMinimized ? handleMinimizedClick : () => setShowQuestion(true)}
          />
        </div>
      </div>

      {showBubble && (
        <div className="fixed bottom-36 right-8 z-50 animate-slideIn">
          <div className="backdrop-blur-md bg-gradient-to-br from-gray-900/90 to-black/90 rounded-2xl shadow-2xl px-6 py-3 border border-cyan-400/50 relative">
            <div className="absolute -bottom-2 right-12 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-gray-900/90"></div>
            <p className="text-white font-semibold text-base whitespace-nowrap">
              {bubbleText}
            </p>
          </div>
        </div>
      )}

      {showInitialGreeting && (
        <div className="fixed bottom-36 right-8 z-50 animate-slideIn">
          <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/95 to-black/95 rounded-2xl shadow-2xl p-6 max-w-sm border border-cyan-400/50 relative">
            <div className="absolute -bottom-3 right-12 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-gray-900/95"></div>

            <p className="text-white text-lg font-medium mb-4 leading-relaxed">
              Hey, I'm Flowbie. Can I show you around?
            </p>

            <div className="flex gap-3">
              <button
                onClick={handleInitialYes}
                className="flex-1 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/50"
              >
                Yes
              </button>
              <button
                onClick={handleInitialNo}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-200"
              >
                No
              </button>
            </div>
          </div>
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

      {showSpeech && !showBubble && (
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

            {currentStep.showClickAround ? (
              <>
                <p className="text-gray-700 text-base mt-4 italic">
                  Keep going or you wanna click around?
                </p>
                <div className="mt-6 flex gap-4 justify-center">
                  <button
                    onClick={handleNextStep}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-colors"
                  >
                    {currentStep.nextQuestion || "Keep going"}
                  </button>
                  <button
                    onClick={handleClickAround}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold text-lg transition-colors"
                  >
                    Click around
                  </button>
                </div>
              </>
            ) : (
              <div className="mt-6 text-center">
                <button
                  onClick={handleNextStep}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
                >
                  {currentStep.nextQuestion || "Next"}
                </button>
              </div>
            )}
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
