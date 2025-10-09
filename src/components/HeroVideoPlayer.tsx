import { useEffect, useRef, useState } from 'react';

interface HeroVideoPlayerProps {
  clips: string[];
  transitionDuration?: number;
}

export default function HeroVideoPlayer({
  clips,
  transitionDuration = 500
}: HeroVideoPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentVideoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const currentVideo = currentVideoRef.current;
    if (!currentVideo) return;

    const handleTimeUpdate = () => {
      if (!currentVideo.duration || isNaN(currentVideo.duration)) return;

      const timeRemaining = currentVideo.duration - currentVideo.currentTime;

      if (timeRemaining <= transitionDuration / 1000 && !isTransitioning) {
        setIsTransitioning(true);

        const nextVideo = nextVideoRef.current;
        if (nextVideo) {
          nextVideo.currentTime = 0;
          nextVideo.play().catch(err => console.error('Next video play failed:', err));
        }
      }
    };

    const handleEnded = () => {
      setCurrentIndex(nextIndex);
      setNextIndex((nextIndex + 1) % clips.length);
      setIsTransitioning(false);
    };

    currentVideo.addEventListener('timeupdate', handleTimeUpdate);
    currentVideo.addEventListener('ended', handleEnded);

    return () => {
      currentVideo.removeEventListener('timeupdate', handleTimeUpdate);
      currentVideo.removeEventListener('ended', handleEnded);
    };
  }, [currentIndex, nextIndex, clips.length, isTransitioning, transitionDuration]);

  useEffect(() => {
    const currentVideo = currentVideoRef.current;
    if (currentVideo) {
      currentVideo.currentTime = 0;
      currentVideo.play().catch(err => console.error('Video play failed:', err));
    }
  }, [currentIndex]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        ref={currentVideoRef}
        src={clips[currentIndex]}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: isTransitioning ? 0 : 1,
          transition: `opacity ${transitionDuration}ms ease-in-out`,
        }}
        muted
        playsInline
        preload="auto"
      />

      <video
        ref={nextVideoRef}
        src={clips[nextIndex]}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: isTransitioning ? 1 : 0,
          transition: `opacity ${transitionDuration}ms ease-in-out`,
        }}
        muted
        playsInline
        preload="auto"
      />

      <div className="absolute inset-0 bg-black/25 z-10" />
    </div>
  );
}
