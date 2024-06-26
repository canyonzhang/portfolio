"use client";

import type  { SectionName } from '@/lib/types';
import React, { useState, createContext, useContext } from 'react' 

// This is like a pass through component

// separate the type from the props passed into our ActiveSectionContextProvider
type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
}

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}


export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null); // Use React context api to create a context variable


// Keep track of the activeSection component in this context file
export default function ActiveSectionContextProvider({children}:
    ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link

    return <ActiveSectionContext.Provider 
    value={{activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick}}
    >{children}</ActiveSectionContext.Provider>;
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);
  
    if (context === null) {
      throw new Error(
        "useActiveSectionContext must be used within an ActiveSectionContextProvider"
      );
    }
    return context;
}