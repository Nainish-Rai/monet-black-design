import React, { createContext, useContext, useState } from "react";

type ScrollContextType = {
  isTextRevealed: boolean;
  setTextRevealed: (value: boolean) => void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [isTextRevealed, setTextRevealed] = useState(false);

  return (
    <ScrollContext.Provider value={{ isTextRevealed, setTextRevealed }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  const context = useContext(ScrollContext);
  if (!context) throw new Error("useScroll must be used within ScrollProvider");
  return context;
}
