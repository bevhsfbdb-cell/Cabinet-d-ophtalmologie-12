import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Technology } from './components/Technology';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen selection:bg-brand-green selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Technology />
          <Contact />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </LanguageProvider>
  );
}
