import React from 'react';
import { Megaphone } from 'lucide-react';

const Hero: React.FC = () => {
  // Static news data simulating content from saaed.ae
  // Note: Real-time fetching would require a backend proxy to bypass CORS.
  const newsItems = [
    "ساعد للأنظمة المرورية: ريادة عالمية في توظيف الذكاء الاصطناعي وحلول السلامة الذكية.",
    "إطلاق خدمات التخطيط المؤتمت للحوادث البسيطة لتعزيز سرعة الاستجابة.",
    "شراكات استراتيجية جديدة لتطوير منظومة إدارة المرافق والخدمات العامة.",
    "ساعد تحصد جائزة التميز في إسعاد المتعاملين وتطوير الخدمات الحكومية لعام 2024.",
    "تحديثات جديدة على التطبيق الذكي تضمن تجربة مستخدم أكثر سهولة وأماناً."
  ];

  return (
    <section className="relative w-full h-[250px] md:h-[350px] overflow-hidden flex items-center justify-center bg-[#000a1f]">
      
      {/* 0. Custom Styles for Marquee (Right to Left) */}
      <style>{`
        @keyframes marquee-rtl {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee-rtl {
          animation: marquee-rtl 35s linear infinite;
        }
        /* PAUSE ANIMATION ON HOVER */
        .ticker-wrapper:hover .animate-marquee-rtl {
          animation-play-state: paused;
        }
      `}</style>

      {/* 1. Dynamic Background Layer - MATCHING LOGIN PAGE */}
      <div className="absolute inset-0 z-0 overflow-hidden">
         {/* Base Tech Image - Animated Pulse Background */}
         <div 
           className="absolute inset-0 w-full h-full bg-cover bg-center animate-[pulse_4s_ease-in-out_infinite]"
           style={{ 
             backgroundImage: "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop')", // AI Brain/Tech Visualization
             opacity: 0.85 
           }}
         ></div>

         {/* Second Abstract Layer for Depth (Floating) */}
         <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-10 mix-blend-multiply"
            style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')", // Cyberpunk Tech
            }}
         ></div>

         {/* Dark overlay to ensure text readability */}
         <div className="absolute inset-0 bg-[#0f172a]/60"></div>
      </div>

      {/* 2. Ambient Glowing Orbs (To enhance Glass Effect) */}
      <div className="absolute top-[-20%] left-[10%] w-[500px] h-[500px] bg-[#00264d]/60 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-[#001a33]/60 rounded-full blur-[100px] animate-pulse delay-1000 pointer-events-none"></div>

      {/* 3. The Main Glass Card Container */}
      <div className="relative z-10 container mx-auto px-4 mb-12"> 
        {/* Changed mb-8 to mb-12 to ensure spacing from the bottom ticker */}
        
        {/* UPDATED: Fully transparent background, lighter blur, lighter border for seamless integration */}
        <div className="max-w-4xl mx-auto p-6 md:p-10 rounded-3xl border border-white/5 bg-transparent backdrop-blur-sm shadow-none ring-0 relative overflow-hidden group transition-all duration-500 hover:backdrop-blur-md">
          
          {/* Shine Effect on Hover - Subtle */}
          <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:left-[200%] transition-all duration-1000 ease-in-out"></div>

          <div className="flex flex-col items-center text-center relative z-10">
            {/* Main Heading */}
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight tracking-tight drop-shadow-2xl">
              نحو مستقبل <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-300">أكثر أماناً</span> وذكاءً
            </h1>

            {/* Description */}
            <p className="text-sm md:text-lg text-slate-200 font-light max-w-2xl leading-relaxed drop-shadow-md border-r-2 border-[#fbbf24]/50 pr-4 mr-2 bg-gradient-to-l from-white/5 to-transparent py-1.5 rounded-l-lg">
              نقدم حلولاً ذكية ومؤتمتة لتسهيل مهام العمل ورفع كفاءة الأداء وتحسين بيئة العمل وفق أعلى المعايير.
            </p>
          </div>

          {/* Decorative Corner Accents - Even fainter */}
          <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-white/10 rounded-tr-3xl opacity-30"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-white/10 rounded-bl-3xl opacity-30"></div>
        </div>
      </div>

      {/* 4. News Ticker (Redesigned to match image) */}
      <div className="absolute bottom-0 left-0 w-full z-30 bg-[#0f172a] h-14 flex items-center px-4 md:px-12 overflow-hidden border-t border-slate-800/50">
        
        {/* Label (Styled as a Red Badge/Button -> Yellow) */}
        <a 
          href="https://www.saaed.ae" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#fbbf24] hover:bg-[#f59e0b] text-[#091526] text-xs md:text-sm font-bold px-5 py-2 rounded-lg ml-6 shadow-lg transition-all duration-300 cursor-pointer shrink-0 z-20 flex items-center justify-center hover:scale-105"
          title="زيارة الموقع الرسمي"
        >
           أخبار ساعد
        </a>

        {/* Moving Content (Right to Left) */}
        <div className="flex-1 overflow-hidden relative h-full flex items-center ticker-wrapper cursor-default group">
            <div className="whitespace-nowrap animate-marquee-rtl flex items-center absolute left-0 w-full">
               {newsItems.map((item, index) => (
                 <React.Fragment key={index}>
                   <span className="text-slate-200 text-sm font-medium mx-3 inline-block tracking-wide group-hover:text-[#fbbf24] transition-colors duration-300">
                     {item}
                   </span>
                   {/* Yellow Dot Separator */}
                   <span className="text-[#fbbf24] mx-3 text-lg leading-none">•</span>
                 </React.Fragment>
               ))}
            </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;