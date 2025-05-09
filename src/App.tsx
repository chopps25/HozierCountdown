import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import ThemeToggle from './components/ThemeToggle';
import VenueInfo from './components/VenueInfo';
import SocialLinks from './components/SocialLinks';
import LyricsDisplay from './components/LyricsDisplay';
import CalendarButton from './components/CalendarButton';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-500 bg-beige dark:bg-midnight flex flex-col items-center justify-between font-serif relative overflow-hidden">
        {/* Background Texture Overlay */}
        <div className="absolute inset-0 bg-paper-texture dark:bg-dark-gothic bg-cover bg-center opacity-30 dark:opacity-60 pointer-events-none"></div>
        
        {/* Theme Toggle Button (Top Right) */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10">
          <ThemeToggle />
        </div>
        
        {/* Main Content */}
        <main className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col items-center z-0">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gold dark:text-purple tracking-wider mb-4">
              HOZIER
            </h1>
            <h2 className="text-lg md:text-2xl text-sage dark:text-charcoal font-light tracking-widest">
              Unreal Unearth 2025 tour
            </h2>
          </header>
          
          <CountdownTimer targetDate="May 27, 2025" />
          
          <VenueInfo />
          
          <div className="mt-12 w-full">
            <LyricsDisplay />
          </div>
          
          <div className="mt-8">
            <CalendarButton />
          </div>
        </main>
        
        {/* Footer with Social Links */}
        <footer className="w-full py-8 px-4 text-center">
          <SocialLinks />
          <div className="mt-6 text-sage dark:text-charcoal text-sm space-y-2">
            <p>© {new Date().getFullYear()} • Unofficial Hozier Fan Page</p>
            <p>
              made with love by{' '}
              <a 
                href="https://www.tinchopps.com.ar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold dark:text-purple hover:underline transition-colors duration-300"
              >
                tinchopps
              </a>
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;