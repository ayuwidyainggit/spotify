"use client";

import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";
import useSWR from "swr";

const AudioContext = createContext();

// SWR fetcher
const fetcher = (url) => fetch(url).then((res) => res.json());

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  // Fetch tracks using SWR
  const { data: tracks, error } = useSWR("/api/playmusic", fetcher);

  const currentTrack = tracks ? tracks[currentTrackIndex] : null; // Get current track

  const handlePlayPause = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause(); // Hanya pause jika sedang memutar
        setIsPlaying(false);
      } else {
        try {
          await audioRef.current.play(); // Hanya play jika tidak sedang memutar
          setIsPlaying(true);
        } catch (error) {
          console.error("Error attempting to play audio:", error);
        }
      }
    }
  };

  const handleSkip = (direction) => {
    if (tracks && tracks.length > 0) {
      let newIndex = currentTrackIndex;
      if (direction === "forward") {
        newIndex = (currentTrackIndex + 1) % tracks.length; // Next track, loop to the start
      } else if (direction === "backward") {
        newIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length; // Previous track, loop to the end
      }
      setCurrentTrackIndex(newIndex);
      setProgress(0); // Reset progress for new track
      setIsPlaying(true); // Auto-play new track
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      if (duration) {
        setProgress((currentTime / duration) * 100); // Update progress as percentage
      }
    }
  };

  useEffect(() => {
    if (audioRef.current && currentTrack) {
      audioRef.current.pause(); // Pastikan audio berhenti sebelum memuat trek baru
      audioRef.current.src = currentTrack.audio; // Tetapkan sumber audio
      audioRef.current.load(); // Muat audio baru

      const playAfterLoad = async () => {
        try {
          await new Promise((resolve) => setTimeout(resolve, 50)); // Delay 50ms
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.error("Error playing audio:", error);
        }
      };

      if (isPlaying) {
        playAfterLoad();
      }
    }
  }, [currentTrack, isPlaying]);

  return (
    <AudioContext.Provider
      value={{
        audioRef,
        isPlaying,
        progress,
        tracks,
        currentTrack,
        handlePlayPause,
        handleSkip,
      }}
    >
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => handleSkip("forward")} // Skip to next track on end
      ></audio>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
