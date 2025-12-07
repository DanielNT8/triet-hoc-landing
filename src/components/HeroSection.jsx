import React from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronDown } from 'lucide-react';

const HeroSection = ({ scrollToContent }) => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden border-b-4 border-red-800 bg-black">
      
      {/* --- VIDEO BACKGROUND --- */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          {/* Đảm bảo file video nằm trong thư mục public */}
          <source src="/3129902-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
      </div>

      {/* --- NỘI DUNG CHỮ --- */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex justify-center mb-2">
             <Star className="w-16 h-16 text-yellow-500 animate-pulse" fill="currentColor" />
          </div>
          
          {/* SỬA LỖI TẠI ĐÂY: */}
          {/* 1. Thay 'pb-4' bằng 'py-4' (đệm cả trên và dưới để không bị cắt dấu mũ) */}
          {/* 2. Đổi 'leading-tight' thành 'leading-snug' để giãn dòng ra một chút */}
          <h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 to-yellow-600 mb-6 drop-shadow-2xl font-serif tracking-tighter uppercase py-6 md:leading-[1.5] leading-snug ">
            Triết Học <br/> Mác - Lênin
          </h1>
          
          <p className="text-xl md:text-1.5xl text-slate-200 font-light tracking-wide mb-10 max-w-2xl mx-auto bg-black/30 backdrop-blur-sm py-2 px-6 rounded-lg border border-white/10">
            Học thuyết về sự phát triển của lịch sử, xã hội và con người
          </p>
          
          <motion.button 
            onClick={scrollToContent}
            whileHover={{ scale: 1.05, backgroundColor: "#b91c1c" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-red-700 text-white rounded-none border border-red-500 font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all"
          >
            Bắt đầu nghiên cứu
          </motion.button>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 z-20 cursor-pointer"
        onClick={scrollToContent}
      >
        <ChevronDown className="w-12 h-12 text-yellow-500/80" />
      </motion.div>
    </section>
  );
};

export default HeroSection;