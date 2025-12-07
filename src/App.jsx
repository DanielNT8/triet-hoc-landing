import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import các component
import HeroSection from './components/HeroSection';
import GroupIntro from './components/GroupIntro';
import CaseStudy from './components/CaseStudy'; // Component mới

function App() {
  
  // Hàm cuộn xuống nội dung (giữ nguyên logic)
  const scrollToContent = () => {
    const element = document.getElementById('case-study');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-red-500 selection:text-white">
      
      <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* 1. Phần Video Nền (Giữ nguyên) */}
            <HeroSection scrollToContent={scrollToContent} />

            {/* 2. Phần Video Giới thiệu nhóm (Giữ nguyên) */}
            <GroupIntro /> 
            
            {/* 3. Phần Nội dung chính mới (Thay thế phần cũ) */}
            <CaseStudy />

            {/* Footer */}
            <footer className="bg-black border-t border-slate-800 py-12 text-center text-slate-600 text-sm">
              <p className="mb-2 font-serif text-lg text-slate-500">GIÁO TRÌNH TRIẾT HỌC MÁC - LÊNIN</p>
              <p>Dự án nhóm 7 © 2025</p>
            </footer>

          </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;