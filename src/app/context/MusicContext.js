import React, { createContext, useState } from "react";

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false); // State untuk play/pause
  const [progress, setProgress] = useState(0); // State untuk progress bar

  return (
    <MusicContext.Provider
      value={{ isPlaying, setIsPlaying, progress, setProgress }}
    >
      {children}
    </MusicContext.Provider>
  );
};
