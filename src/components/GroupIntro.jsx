import React from 'react';
import { motion } from 'framer-motion';
import { Play, Users, Film } from 'lucide-react';

const GroupIntro = () => {
  return (
    <section className="relative w-full py-20 bg-slate-900 overflow-hidden">
      {/* Background Decor (Hiệu ứng nền mờ) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-[128px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Header của phần Video */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/30 border border-red-500/30 text-red-400 text-sm font-bold uppercase tracking-widest mb-4">
            <Users className="w-4 h-4" /> Giới thiệu nhóm & Bài học
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif">
            Hành Trình Khám Phá <span className="text-yellow-500">Lịch Sử</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Video tổng quan về đề tài "Giai cấp - Dân tộc" và đội ngũ thực hiện dự án.
          </p>
        </motion.div>

        {/* Khung Video */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          {/* Viền trang trí (Border Gradient) */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
          
          {/* Container Video chính */}
          <div className="relative rounded-xl overflow-hidden bg-black shadow-2xl border border-slate-800 aspect-video">
            <video 
              controls 
              className="w-full h-full object-cover"
              poster="/images/video-poster.jpg" // (Tùy chọn) Ảnh bìa khi chưa bấm play
            >
              {/* Lưu ý: Bạn cần đặt file video giới thiệu vào thư mục public */}
              <source src="/VIDEO_thuyettrinh.mp4" type="video/mp4" />
              Trình duyệt không hỗ trợ thẻ video.
            </video>

            {/* Overlay trang trí khi chưa play (nếu muốn làm video player custom phức tạp hơn) */}
            {/* Hiện tại dùng controls mặc định của trình duyệt để ổn định nhất */}
          </div>

          {/* Icon trang trí góc */}
          <div className="absolute -top-6 -right-6 text-yellow-500/20 rotate-12 pointer-events-none">
            <Film size={120} />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default GroupIntro;