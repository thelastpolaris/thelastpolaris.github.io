import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-left-top opacity-10 pointer-events-none" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518701045094-6992791421e3?q=80&w=2000&auto=format&fit=crop')" }}>
      </div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Portfolio />
          <Contact />
        </main>
        <footer className="text-center py-8 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Артем Федоскин. Все права защищены.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;