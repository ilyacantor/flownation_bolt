import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FlowbieMini() {
  const navigate = useNavigate();
  const [currentVideo, setCurrentVideo] = useState<'idle' | 'hover' | 'click'>('idle');
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleMessage, setBubbleMessage] = useState("Can I show you around?");
  const [isHovering, setIsHovering] = useState(false);
  const [showButtons, setShowButtons] = useState(true);

  const idleRef = useRef<HTMLVideoElement>(null);
  const hoverRef = useRef<HTMLVideoElement>(null);
  const clickRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (idleRef.current) {
      idleRef.current.play();
    }
  }, []);

  const handleMouseEnter = () => {
    if (currentVideo === 'idle') {
      setIsHovering(true);
      setCurrentVideo('hover');
      if (hoverRef.current) {
        hoverRef.current.currentTime = 0;
        hoverRef.current.play();
      }
    }
  };

  const handleMouseLeave = () => {
    if (currentVideo === 'hover') {
      setIsHovering(false);
      setCurrentVideo('idle');
      if (idleRef.current) {
        idleRef.current.play();
      }
    }
  };

  const handleClick = () => {
    const introDone = localStorage.getItem('flowbie_intro_done');

    if (!introDone) {
      setCurrentVideo('click');
      if (clickRef.current) {
        clickRef.current.currentTime = 0;
        clickRef.current.play();
      }
      setShowBubble(true);
      setBubbleMessage("Can I show you around?");
      setShowButtons(true);
    }
  };

  const handleClickEnd = () => {
    setCurrentVideo('idle');
    if (idleRef.current) {
      idleRef.current.play();
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
    setCurrentVideo('idle');
    if (idleRef.current) {
      idleRef.current.play();
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
        <video
          ref={idleRef}
          src="/assets/flowbie/flowbie_idle.mp4"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ease-in-out pointer-events-auto ${
            currentVideo === 'idle' ? 'opacity-100' : 'opacity-0'
          }`}
          loop
          muted
          playsInline
        />

        <video
          ref={hoverRef}
          src="/assets/flowbie/flowbie_hover.mp4"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ease-in-out pointer-events-auto ${
            currentVideo === 'hover' ? 'opacity-100' : 'opacity-0'
          }`}
          loop
          muted
          playsInline
        />

        <video
          ref={clickRef}
          src="/assets/flowbie/flowbie_click.mp4"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ease-in-out pointer-events-auto ${
            currentVideo === 'click' ? 'opacity-100' : 'opacity-0'
          }`}
          muted
          playsInline
          onEnded={handleClickEnd}
        />

        {showBubble && (
          <div className="absolute bottom-full right-0 mb-3 transition-opacity duration-250 ease-in-out">
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
    </div>
  );
}
