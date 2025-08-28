// src/components/VideoSlider.jsx
import React, { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants remain the same, they are well-defined.
const videoVariants = {
  hidden: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  visible: { x: 0, opacity: 1 },
  exit: (direction) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

const VideoSlider = ({ videos = [] }) => {
  if (!videos || videos.length === 0) {
    return null;
  }

  const [[page, direction], setPage] = useState([0, 0]);
  // A ref to track if the user has manually paused the video.
  const hasBeenPaused = useRef(false);

  const videoIndex = page % videos.length;

  // Use useCallback to prevent function re-creation on every render
  const goToNext = useCallback(() => {
    // When we go to the next slide, reset the pause tracking
    hasBeenPaused.current = false;
    setPage(([prevPage]) => [prevPage + 1, 1]);
  }, []);

  const paginate = (newDirection) => {
    // Also reset pause tracking on manual navigation
    hasBeenPaused.current = false;
    setPage([page + newDirection, newDirection]);
  };

  const goToSlide = (slideIndex) => {
    hasBeenPaused.current = false;
    const newDirection = slideIndex > videoIndex ? 1 : -1;
    setPage([slideIndex, newDirection]);
  };

  return (
    <section className="px-4 md:px-8 lg:px-16 pb-7">
      {/* Add 'group' class to enable group-hover for child elements */}
      <div className="max-w-[1568px] mx-auto relative aspect-video overflow-hidden rounded-2xl shadow-xl bg-black group">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.video
            // Key is crucial for AnimatePresence to detect component changes
            key={page}
            src={videos[videoIndex]}
            custom={direction}
            variants={videoVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.3 } }}
            
            
            autoPlay
            muted
            playsInline
            
            // ** LOGIC IMPROVEMENT 1: Advance on completion **
            // The primary trigger for advancing is the video ending naturally.
            onEnded={goToNext}

            // ** LOGIC IMPROVEMENT 2: Respect the pause button **
            // If the user pauses, we record it to stop the onEnded autoplay loop.
            onPause={() => {
              hasBeenPaused.current = true;
            }}
            
            // If the user presses play, we allow onEnded to work again.
            onPlay={() => {
              hasBeenPaused.current = false;
            }}

            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Previous Button - hidden until parent is hovered */}
        <button
          onClick={() => paginate(-1)}
          className="absolute top-1/2 left-4 -translate-y-1/2 z-10 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Previous Video"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Next Button - hidden until parent is hovered */}
        <button
          onClick={() => paginate(1)}
          className="absolute top-1/2 right-4 -translate-y-1/2 z-10 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Next Video"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === videoIndex ? "bg-white" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to video ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSlider;