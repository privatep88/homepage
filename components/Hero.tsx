import React from 'react';
import { Users, Calendar, FileText, BarChart3 } from 'lucide-react';

const Hero: React.FC = () => {
  // Original news data preserved 100%
  const newsItems = [
    "ساعد للأنظمة المرورية: ريادة عالمية في توظيف الذكاء الاصطناعي وحلول السلامة الذكية.",
    "إطلاق خدمات التخطيط المؤتمت للحوادث البسيطة لتعزيز سرعة الاستجابة.",
    "شراكات استراتيجية جديدة لتطوير منظومة إدارة المرافق والخدمات العامة.",
    "ساعد تحصد جائزة التميز في إسعاد المتعاملين وتطوير الخدمات الحكومية لعام 2024.",
    "تحديثات جديدة على التطبيق الذكي تضمن تجربة مستخدم أكثر سهولة وأماناً."
  ];

  return (
    <section className="w-full bg-[#07162B] overflow-hidden">
      {/* Custom Styles for RTL News Ticker Marquee */}
      <style>{`
        @keyframes marquee-rtl {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee-rtl {
          animation: marquee-rtl 35s linear infinite;
        }
        .ticker-wrapper:hover .animate-marquee-rtl {
          animation-play-state: paused;
        }
      `}</style>

      {/* Main Hero Visual Area — 100% Full Viewport Width (Full Bleed) */}
      <div className="relative w-full overflow-hidden">
        {/* Proportional Banner Container */}
        <div className="relative w-full aspect-[1309/240] min-h-[220px] sm:min-h-[240px] md:min-h-[250px] lg:min-h-[270px]">
          <img
            src="/assets/hero-bg-clean.png"
            alt="مقر خدمات ساهر الذكية ولوحة التحكم الرقمية"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center block select-none"
          />

          {/* Subtle mobile gradient overlay to guarantee text contrast on narrow screens */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#07162B]/80 via-[#07162B]/60 to-[#07162B]/85 md:hidden pointer-events-none" />

          {/* Real Selectable HTML Headline & Subtitle Overlay (Positioned in the center gradient zone) */}
          <div
            className="absolute inset-0 md:inset-auto md:top-[12%] md:right-[23.5%] md:w-[33%] flex flex-col items-center justify-center text-center px-4 md:px-0 z-10 pointer-events-none"
          >
            <div className="pointer-events-auto flex flex-col items-center text-center">
              <h1 className="text-xl sm:text-2xl md:text-[clamp(1.2rem,2vw,2.4rem)] font-black text-white mb-1.5 md:mb-2.5 leading-tight tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)] whitespace-nowrap">
                نحو مستقبل أكثر أماناً{' '}
                <span className="text-[#E3B343] drop-shadow-[0_2px_8px_rgba(227,179,67,0.4)]">
                  وذكاءً
                </span>
              </h1>

              <p className="text-[11.5px] sm:text-xs md:text-[clamp(0.72rem,1.05vw,1rem)] text-slate-100 font-medium max-w-[430px] leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.65)]">
                نقدم حلولاً ذكية ومتكاملة لتسهيل مهام العمل ورفع كفاءة الأداء وتحسين بيئة العمل وفق أعلى المعايير
              </p>

              {/* Mobile-only Glassmorphic Tech Icons Row (shown when background icons are cropped on narrow screens) */}
              <div className="flex md:hidden items-center justify-center gap-2.5 mt-3">
                {[Users, Calendar, FileText, BarChart3].map((IconComponent, idx) => (
                  <div
                    key={idx}
                    className="w-8 h-8 rounded-lg bg-[#1385D7]/30 border border-[#43B8F5]/60 backdrop-blur-xs flex items-center justify-center text-white shadow-[0_0_10px_rgba(67,184,245,0.35)]"
                  >
                    <IconComponent size={15} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom News Ticker Bar — Full Bleed 100% Width */}
      <div className="w-full z-30 bg-gradient-to-r from-[#061428] via-[#091E3C] to-[#061428] h-10 md:h-11 flex items-center px-4 md:px-10 overflow-hidden border-t border-[#1D3B6C]/80 border-b border-[#1D3B6C]/40">
        {/* Right Gold Badge Link (Preserves original link to https://www.saaed.ae) */}
        <a
          href="https://www.saaed.ae"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-b from-[#F3C65F] to-[#D89E2A] hover:from-[#F7D176] hover:to-[#E3B343] text-[#07162B] text-xs md:text-[13px] font-extrabold px-4 py-1 rounded-md ml-5 shadow-md transition-all duration-300 cursor-pointer shrink-0 z-20 flex items-center justify-center hover:scale-105"
          title="أخبار ساعد - زيارة الموقع الرسمي"
        >
          آخر الأخبار
        </a>

        {/* Moving News Items (Right to Left) */}
        <div className="flex-1 overflow-hidden relative h-full flex items-center ticker-wrapper cursor-default group">
          <div className="whitespace-nowrap animate-marquee-rtl flex items-center absolute left-0 w-full">
            {newsItems.map((item, index) => (
              <React.Fragment key={index}>
                <span className="text-slate-100 text-xs md:text-[13.5px] font-semibold mx-3 inline-block tracking-wide group-hover:text-[#E3B343] transition-colors duration-300">
                  {item}
                </span>
                <span className="text-[#E3B343] mx-2.5 text-base leading-none">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;