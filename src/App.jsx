import React, { useState } from 'react';

import {motion , AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/navbar';
import Hero from './components/heroSection';
import About from './components/about';
import Skills from "./components/skills"
import Projects from './components/project';
import Contact from './components/contact';
import Footer from './components/footer';
import CustomCursor from './components/mouseMove';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const MotionDiv = motion.div
  return (
    
    <div className="bg-[#050505] min-h-screen text-white selection:bg-indigo-500 cursor-custom-dot">
      <CustomCursor/>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onFinished={() => setIsLoading(false)} />
        ) : (
          <MotionDiv 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <main className="max-w-7xl mx-auto px-6">
            <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />

            <Footer />
            </main>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;