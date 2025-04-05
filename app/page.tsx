'use client';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[rgb(32,25,19)] text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[rgb(32,25,19)]/80 backdrop-blur-lg border-b border-white/10">
        <img src="/logo.webp" alt="Raphael AI" className="w-10 h-10 rounded-full" />
      </nav>
    </div>
  );
} 