import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FlowbieBot from './FlowbieBot';

const flowbieGif = "/assets/u7393982445_A_small_cute_futuristic_robot_mascot_standing_on__f96e5bda-f9bb-4256-98bc-3cfa5ec07533_2.gif";

export default function FlowbieMini() {
  const navigate = useNavigate();
  const [animationState, setAnimationState] = useState<'idle' | 'hover' | 'click'>('idle');
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleMessage, setBubbleMessage] = useState("Can I show you around?");
  const [showButtons, setShowButtons] = useState(true);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    let clickTimeout: NodeJS.Timeout;

    if (animationState === 'click') {
      clickTimeout = setTimeout(() => {
        setAnimationState('idle');
      }, 600);
    }

    return () => {
      if (clickTimeout) clearTimeout(clickTimeout);
    };
  }, [animationState]);

  const handleMouseEnter = () => {
    if (animationState === 'idle' && !showBubble) {
      setAnimationState('hover');
    }
  };

  const handleMouseLeave = () => {
    if (animationState === 'hover' && !showBubble) {
      setAnimationState('idle');
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const introDone = localStorage.getItem('flowbie_intro_done');

    setAnimationState('click');

    if (!introDone) {
      setShowBubble(true);
      setBubbleMessage("Can I show you around?");
      setShowButtons(true);
    } else {
      setShowChat(true);
    }
  };

  const handleYes = () => {
    setShowButtons(false);
    setBubbleMessage("Awesome — let's roll!");
    localStorage.setItem('flowbie_intro_done', 'true');

    setTimeout(() => {
      setShowBubble(false);
      navigate('/paddock');
    }, 1000);
  };

  const handleNo = () => {
    localStorage.setItem('flowbie_intro_done', 'true');
    setShowBubble(false);
    setAnimationState('idle');
  };

  const getTransformClass = () => {
    switch (animationState) {
      case 'hover':
        return 'scale-110';
      case 'click':
        return 'scale-95';
      default:
        return 'scale-100';
    }
  };

  return (
    <div
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      role="button"
      aria-label="Flowbie Assistant"
    >
      <div className="relative w-32 h-32 cursor-pointer">
        <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-cyan-500/20 to-orange-500/20 backdrop-blur-sm border-2 border-white/20 shadow-lg">
          <img
            src={flowbieGif}
            alt="Flowbie"
            className={`w-full h-full object-cover transition-all duration-300 ease-in-out ${getTransformClass()}`}
          />
        </div>

        {showBubble && (
          <div className="absolute bottom-full right-0 mb-3 transition-opacity duration-250 ease-in-out opacity-100 animate-fadeIn">
            <div
              className="bg-white/8 backdrop-blur-[10px] border border-white/15 rounded-xl px-4 py-3 shadow-lg"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <p className="text-[#00E6FF] font-semibold text-sm whitespace-nowrap mb-2">
                {bubbleMessage}
              </p>

              {showButtons && (
                <div className="flex gap-2 justify-end">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNo();
                    }}
                    className="px-3 h-6 rounded-full bg-gray-600 text-white text-xs font-medium hover:bg-gray-500 transition-all"
                  >
                    No
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleYes();
                    }}
                    className="px-3 h-6 rounded-full bg-cyan-500 text-white text-xs font-medium hover:shadow-[0_0_8px_rgba(0,230,255,0.5)] transition-all"
                  >
                    Yes
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {showChat && <FlowbieBot onClose={() => setShowChat(false)} />}
    </div>
  );
}
