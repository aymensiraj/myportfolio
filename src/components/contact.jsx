import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck } from "react-icons/fa";

const Contact = () => {
  const MotionDiv = motion.div
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  };
  return (
    <section id="contact" className="py-20 px-6">
      <MotionDiv 
        layout
        className="max-w-4xl mx-auto bg-indigo-600 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-indigo-500/30"
      >
        <AnimatePresence mode="wait">
          {!showForm ? (
            /* --- 1. L-KTABA L-LOWLA --- */
            <MotionDiv
              key="cta"
              initial={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to build?</h2>
              <button 
                onClick={() => setShowForm(true)}
                className="bg-white text-indigo-600 px-12 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all"
              >
                SEND A MESSAGE
              </button>
            </MotionDiv>
          ) : !isSubmitted ? (
            /* --- 2. L-FORM --- */
            <MotionDiv
              key="form"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="relative z-10 text-left w-full max-w-lg mx-auto"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center uppercase tracking-widest">Get in Touch</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <input required type="text" placeholder="First Name" className="p-4 bg-white/10 rounded-2xl border border-white/20 text-white outline-none placeholder:text-indigo-200" />
                  <input required type="text" placeholder="Last Name" className="p-4 bg-white/10 rounded-2xl border border-white/20 text-white outline-none placeholder:text-indigo-200" />
                </div>
                <input required type="email" placeholder="Email Address" className="w-full p-4 bg-white/10 rounded-2xl border border-white/20 text-white outline-none placeholder:text-indigo-200" />
                <textarea required placeholder="Your Message..." rows="4" className="w-full p-4 bg-white/10 rounded-2xl border border-white/20 text-white outline-none placeholder:text-indigo-200"></textarea>
                
                <div className="flex gap-4 pt-4">
                   <button type="submit" className="cursor-pointer flex-1 bg-black text-white py-4 rounded-2xl font-bold hover:bg-gray-900 transition-all">
                    SUBMIT
                  </button>
                  <button type="button" onClick={() => setShowForm(false)} className="cursor-pointer px-6 bg-white/10 text-white rounded-2xl hover:bg-white/20 transition-all">Back</button>
                </div>
              </form>
            </MotionDiv>
          ) : (
            /* --- 3. SUCCESS MESSAGE --- */
            <MotionDiv
              key="success"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative z-10 flex flex-col items-center py-10"
            >
              <MotionDiv
                initial={{ rotate: -20, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                <FaCheck size={80} className="text-white mb-6" />
              </MotionDiv>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 italic">THANK YOU!</h2>
              <p className="text-indigo-100 text-lg opacity-80 mb-8">Your message has been sent successfully. <br /> I'll get back to you soon!</p>
              <button 
                onClick={() => {setIsSubmitted(false); setShowForm(false);}}
                className="text-white border border-white/30 px-8 py-3 rounded-xl hover:bg-white/10 transition-all"
              >
                Send another msg 
              </button>
            </MotionDiv>
          )}
        </AnimatePresence>

        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-400/20 blur-[80px] rounded-full"></div>
      </MotionDiv>
    </section>
  );
};

export default Contact;