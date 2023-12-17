"use client";

import React, { useState, createContext, useContext } from 'react'
import {links} from "@/lib/data";

// This is like a pass through component

type SectionName = typeof links[number]["name"];

// separate the type from the props passed into our ActiveSectionContextProvider
type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
}

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null); // Use React context api to create a context variable


// Keep track of the activeSection component in this context file
export default function ActiveSectionContextProvider({children}:
    ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
  
    return <ActiveSectionContext.Provider 
    value={{activeSection, setActiveSection}}
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