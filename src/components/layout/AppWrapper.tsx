"use client";

import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { SearchModal, SearchItem } from "../search/SearchModal";

interface AppWrapperProps {
  children: React.ReactNode;
  searchItems: SearchItem[];
}

export const AppWrapper: React.FC<AppWrapperProps> = ({
  children,
  searchItems,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        items={searchItems}
      />
    </div>
  );
};
