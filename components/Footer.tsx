import React from 'react';
import { MapPin, Phone, Mail, Home, LayoutGrid } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="w-full relative bg-[linear-gradient(180deg,#0F3769_0%,#0D3163_10%,#0D2E5F_19%,#0C2C5A_32%,#0D2A57_48%,#0E2953_65%,#0E2D5A_81%,#113060_94%,#133361_100%)] text-white border-t-[2.5px] border-[#E3B343] overflow-hidden select-none"
    >
      {/* Desktop Unified Background Layer: Right SAHER Logo + Full Sweeping Golden Wave */}
      <img
        src={`${import.meta.env.BASE_URL}assets/footer-right-art.png`}
        alt="SAHER Smart Services"
        referrerPolicy="no-referrer"
        className="hidden lg:block absolute right-0 top-0 bottom-0 h-full w-auto object-contain object-right-bottom pointer-events-none select-none z-0"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />

      {/* Desktop Unified Background Layer: Left Abu Dhabi Skyline & Golden Reflection */}
      <img
        src={`${import.meta.env.BASE_URL}assets/footer-skyline.png`}
        alt="أفق أبوظبي العمراني"
        referrerPolicy="no-referrer"
        className="hidden lg:block absolute left-0 top-0 bottom-0 h-full w-auto object-contain object-left-bottom pointer-events-none select-none z-0"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />

      {/* Main Content Wrapper */}
      <div className="w-full relative z-10 pt-5 pb-3.5 lg:pt-2.5 lg:pb-2 flex flex-col justify-between lg:min-h-[156px]">
        
        {/* Mobile/Tablet Only: Top Centered SAHER Logo */}
        <div className="flex lg:hidden items-center justify-center mb-4 px-4">
          <img
            src={`${import.meta.env.BASE_URL}assets/footer-logo.png`}
            alt="SAHER Smart Services"
            referrerPolicy="no-referrer"
            className="h-16 w-auto object-contain rounded-lg"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* Upper Zone: Three Balanced Columns (RTL: 1. عن SAHER [Right] | 2. روابط سريعة [Center] | 3. تواصل معنا [Left]) */}
        <div className="w-full px-4 sm:px-8 lg:pr-[max(208px,16.1%)] lg:pl-[max(295px,24.8%)]">
          <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-4 lg:gap-6 text-center md:text-right select-text">
            
            {/* Column 1 (Right in RTL): عن SAHER */}
            <div className="flex flex-col items-center md:items-start lg:max-w-[270px] xl:max-w-[295px]">
              <div className="mb-2 lg:mb-2.5">
                <h3 className="text-[15.5px] lg:text-[16.5px] font-extrabold text-white tracking-wide leading-tight">
                  عن SAHER
                </h3>
                <div className="w-[86px] h-[2.5px] bg-gradient-to-l from-[#F6CC68] via-[#E3B343] to-[#E3B343]/15 mt-1 rounded-full mx-auto md:mr-0" />
              </div>
              <p className="text-slate-100/95 text-xs lg:text-[12.5px] leading-[1.65] font-medium text-center md:text-right">
                شركة رائدة في تقديم حلول إدارة المرافق وتطوير الابتكار والجودة لتحقيق أعلى مستويات الكفاءة والخدمات الذكية.
              </p>
            </div>

            {/* Column 2 (Center in RTL): روابط سريعة */}
            <div className="flex flex-col items-center md:items-start lg:ml-4">
              <div className="mb-1.5 lg:mb-1.5">
                <h3 className="text-[15.5px] lg:text-[16.5px] font-extrabold text-white tracking-wide leading-tight">
                  روابط سريعة
                </h3>
                <div className="w-[96px] h-[2.5px] bg-gradient-to-l from-[#F6CC68] via-[#E3B343] to-[#E3B343]/15 mt-1 rounded-full mx-auto md:mr-0" />
              </div>
              <ul className="space-y-1 text-slate-100 text-xs lg:text-[12.5px] font-semibold flex flex-col items-center md:items-start">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2.5 text-slate-100 hover:text-[#E3B343] transition-colors duration-200 group"
                  >
                    <Home size={14} className="text-[#E3B343] shrink-0 group-hover:scale-110 transition-transform" />
                    <span>الرئيسية</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="flex items-center gap-2.5 text-slate-100 hover:text-[#E3B343] transition-colors duration-200 group"
                  >
                    <LayoutGrid size={14} className="text-[#E3B343] shrink-0 group-hover:scale-110 transition-transform" />
                    <span>خدماتنا</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="flex items-center gap-2.5 text-slate-100 hover:text-[#E3B343] transition-colors duration-200 group"
                  >
                    <Mail size={14} className="text-[#E3B343] shrink-0 group-hover:scale-110 transition-transform" />
                    <span>تواصل معنا</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 (Left in RTL): تواصل معنا */}
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-1.5 lg:mb-1.5">
                <h3 className="text-[15.5px] lg:text-[16.5px] font-extrabold text-white tracking-wide leading-tight">
                  تواصل معنا
                </h3>
                <div className="w-[92px] h-[2.5px] bg-gradient-to-l from-[#F6CC68] via-[#E3B343] to-[#E3B343]/15 mt-1 rounded-full mx-auto md:mr-0" />
              </div>
              <ul className="space-y-1 text-slate-100 text-xs lg:text-[12.5px] font-medium flex flex-col items-center md:items-start">
                <li className="flex items-center gap-2.5 justify-center md:justify-start">
                  <MapPin size={14} className="text-[#E3B343] shrink-0" />
                  <span dir="ltr" className="text-slate-100 text-center md:text-right">
                    Level 3, Baynona Building, Khalifa City A
                  </span>
                </li>
                <li className="flex items-center gap-2.5 justify-center md:justify-start">
                  <Phone size={14} className="text-[#E3B343] shrink-0" />
                  <span dir="ltr" className="tracking-wider tabular-nums text-slate-100 text-center md:text-right">
                    +971 4 123 4567
                  </span>
                </li>
                <li className="flex items-center gap-2.5 justify-center md:justify-start">
                  <Mail size={14} className="text-[#E3B343] shrink-0" />
                  <span dir="ltr" className="text-slate-100 text-center md:text-right">
                    Logistic@saher.ae
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Mobile/Tablet Only: Abu Dhabi Skyline Preview */}
        <div className="flex lg:hidden items-center justify-center mt-4 px-4">
          <img
            src={`${import.meta.env.BASE_URL}assets/footer-skyline.png`}
            alt="أفق أبوظبي العمراني"
            referrerPolicy="no-referrer"
            className="h-24 sm:h-28 w-auto object-contain pointer-events-none select-none"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* Lower Zone: Horizontal Separator Line + Centered Credit Pill + Centered Copyright */}
        <div className="w-full mt-5 lg:mt-2.5 select-text relative">
          {/* Separator Line spanning cleanly between the Left Skyline and Right Golden Wave */}
          <div className="relative w-full h-6 flex items-center justify-center">
            <div className="w-[90%] lg:w-auto lg:absolute lg:left-[21.5%] lg:right-[15.8%] h-[1px] bg-gradient-to-r from-transparent via-[#5B8FD1]/80 to-transparent" />
            
            {/* Centered Credit Capsule Pill */}
            <div className="relative z-10 flex items-center gap-1.5 bg-gradient-to-b from-[#133B73] via-[#0B254E] to-[#0E2F5E] py-[2px] px-5 rounded-full border border-[#6BA3E8]/85 shadow-[0_0_12px_rgba(74,144,226,0.35),inset_0_1px_1px_rgba(255,255,255,0.25)] text-[11px] lg:text-[11.5px] whitespace-nowrap">
              <span className="text-slate-100 font-semibold">إعداد وتصميم</span>
              <span className="text-[#E3B343] font-bold">/</span>
              <span className="text-white font-bold">خالد الهاشمي</span>
            </div>
          </div>

          {/* Centered Copyright Line */}
          <div className="w-full text-center text-[11px] lg:text-[11.5px] font-semibold tracking-wide text-slate-200/95 pt-1 lg:pt-0.5">
            جميع الحقوق محفوظة لشركة SAHER FOR SMART SERVICES 2026 &copy;
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;