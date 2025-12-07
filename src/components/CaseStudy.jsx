import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight, BookOpen } from 'lucide-react';
import { CASE_STUDY_DATA } from '../data/content';

const SectionItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col md:flex-row gap-8 items-stretch mb-24 ${!isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Cột Tiêu đề & Lý thuyết */}
      <div className="md:w-5/12 flex flex-col justify-center items-start text-left p-8 bg-slate-800/80 rounded-2xl border border-slate-700 backdrop-blur-sm relative overflow-hidden">
        {/* Decor background */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full -mr-16 -mt-16"></div>
        
        <div className="p-3 bg-slate-900 rounded-lg mb-6 shadow-lg border border-slate-600 inline-block">
          {item.icon}
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold font-serif text-white mb-4 leading-snug">
          {item.title}
        </h3>
        
        <div className="w-full h-px bg-gradient-to-r from-red-500 to-transparent mb-4"></div>
        
        <div className="flex gap-3">
          <BookOpen className="w-5 h-5 text-yellow-500 shrink-0 mt-1" />
          <p className="text-yellow-500/90 font-medium italic text-sm leading-relaxed">
            {item.theory}
          </p>
        </div>
      </div>

      {/* Cột Nội dung chi tiết */}
      <div className="md:w-7/12 bg-slate-900/50 rounded-2xl p-8 border-l-4 border-yellow-500 shadow-xl">
        <p className="text-lg text-slate-200 mb-6 font-medium border-b border-slate-700 pb-4">
          {item.content}
        </p>

        {/* 1. Danh sách tích cực (Section 1) */}
        {item.points && (
        <div className="mb-6">
          {/* THÊM ĐOẠN NÀY: Hiển thị câu dẫn nhập nếu có */}
          {item.pointIntro && (
            <p className="text-slate-200 font-bold mb-3 italic underline decoration-yellow-500 underline-offset-4">
              {item.pointIntro}
            </p>
          )}

          <ul className="space-y-3">
            {item.points.map((p, i) => (
              <li key={i} className="flex items-start gap-3 p-2 rounded hover:bg-white/5 transition-colors">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-slate-300">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
        {/* 2. Comparison Group (Section 2 - Mới) */}
        {item.comparisonGroup && (
          <div className="space-y-8 mb-8">
            {/* Phần A: Xanh */}
            <div>
              <h4 className="text-white font-bold text-lg mb-3">
                {item.comparisonGroup.partA.title}
              </h4>
              <div className="bg-green-950/30 p-5 rounded-xl border border-green-500/30">
                <ul className="space-y-3">
                  {item.comparisonGroup.partA.items.map((t, i) => (
                    <li key={i} className="flex gap-3 text-slate-200">
                      <CheckCircle className="mt-1 text-green-500 shrink-0 w-5 h-5"/> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Phần B: Đỏ */}
            <div>
              <h4 className="text-white font-bold text-lg mb-1">
                {item.comparisonGroup.partB.title}
              </h4>
              <p className="text-slate-400 text-sm italic mb-3">
                {item.comparisonGroup.partB.subTitle}
              </p>
              <div className="bg-red-950/30 p-5 rounded-xl border border-red-500/30">
                <ul className="space-y-3">
                  {item.comparisonGroup.partB.items.map((t, i) => (
                    <li key={i} className="flex gap-3 text-slate-200">
                      <XCircle className="mt-1 text-red-500 shrink-0 w-5 h-5"/> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
             {item.comparisonGroup.partB_2 && (
              <div>
                <h4 className="text-red-400 font-bold text-lg mb-1 uppercase">
                  {item.comparisonGroup.partB_2.title}
                </h4>
                {item.comparisonGroup.partB_2.subTitle && (
                  <p className="text-slate-400 text-sm italic mb-3">
                    {item.comparisonGroup.partB_2.subTitle}
                  </p>
                )}
                <div className="bg-red-950/30 p-5 rounded-xl border border-red-500/30">
                  <ul className="space-y-3">
                    {item.comparisonGroup.partB_2.items.map((t, i) => (
                      <li key={i} className="flex gap-3 text-slate-200">
                        <XCircle className="mt-1 text-red-500 shrink-0 w-5 h-5"/> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            
          </div>
        )}


        {/* 3. Danh sách tiêu cực/thực trạng (Section 4) */}
        {item.reality && (
          <div className="space-y-3 mb-6 bg-red-950/20 p-5 rounded-lg border border-red-900/50">
            <h4 className="text-red-400 font-bold text-sm mb-2 uppercase">Biểu hiện thực tế:</h4>
            <ul className="space-y-2">
              {item.reality.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0"></span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Highlight Quote */}
        {item.highlight && (
           <div className="bg-gradient-to-r from-red-900/40 to-transparent p-4 rounded-l-lg border-l-4 border-red-500 mb-6 italic text-slate-200">
             "{item.highlight}"
           </div>
        )}

        {/* Kết luận từng phần */}
        <div className="mt-auto pt-4 flex items-start gap-2 text-yellow-400 font-bold text-sm tracking-wide">
          <ArrowRight className="w-5 h-5 shrink-0 animate-pulse" /> 
          <span className="uppercase">{item.conclusion}</span>
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudy = () => {
  return (
    <section id="case-study" className="py-24 px-4 md:px-8 bg-slate-900 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Header */}
        <div className="text-center mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative text-4xl md:text-6xl font-black font-serif text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 mb-6 py-2"
          >
            {CASE_STUDY_DATA.title}
          </motion.h2>
          <p className="relative text-xl text-slate-400 font-serif italic max-w-3xl mx-auto border-b border-slate-700 pb-4 inline-block">
            {CASE_STUDY_DATA.subtitle}
          </p>
        </div>

        {/* Content Loops */}
        <div>
          {CASE_STUDY_DATA.sections.map((item, index) => (
            <SectionItem key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Final Conclusion Box */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 relative p-1 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-3xl"
        >
          <div className="bg-slate-900 rounded-[22px] p-8 md:p-12 text-center h-full">
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-500 font-serif mb-8 uppercase tracking-widest">
              {CASE_STUDY_DATA.finalConclusion.title}
            </h3>
            
            <div className="text-2xl md:text-3xl text-white font-bold mb-8 leading-relaxed font-serif">
              {CASE_STUDY_DATA.finalConclusion.mainText}
            </div>
            
            <div className="inline-block p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <p className="text-slate-300 text-lg md:text-xl italic leading-relaxed">
                "{CASE_STUDY_DATA.finalConclusion.subText}"
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CaseStudy;