import React from 'react';
import { MapPin, Phone, Mail, Home, LayoutGrid } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="w-full relative bg-gradient-to-r from-[#092248] via-[#0D366B] to-[#092248] text-white pt-6 pb-4 border-t-[3px] border-[#E3B343] overflow-hidden"
    >
      {/* Upper Main Section: 5 balanced zones (Skyline on left, 3 columns in center, SAHER Logo & Golden Wave on right) */}
      <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 relative z-10">
          
          {/* 1. Right Side (in RTL, first in DOM): SAHER Logo & Golden Wave Ribbon */}
          <div className="shrink-0 flex items-center justify-center lg:justify-end order-1 lg:order-1 w-full lg:w-auto">
            <img
              src={assetUrl('assets/footer-right-art.png')}
              alt="SAHER Smart Services"
              referrerPolicy="no-referrer"
              className="h-[115px] sm:h-[130px] lg:h-[145px] w-auto object-contain select-none pointer-events-none drop-shadow-sm"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          {/* 2. Center: Three Content Columns (عن SAHER / روابط سريعة / تواصل معنا) */}
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-center md:text-right order-2 lg:order-2">
            
            {/* Column 1 (Right in RTL): About SAHER */}
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-2">
                <h3 className="text-base lg:text-[17px] font-extrabold text-white tracking-wide">
                  عن SAHER
                </h3>
                <div className="w-14 h-[2.5px] bg-[#E3B343] mt-1.5 rounded-full mx-auto md:mr-0" />
              </div>
              <p className="text-slate-200 text-xs lg:text-[13px] leading-relaxed font-medium max-w-xs text-center md:text-right">
                شركة رائدة في تقديم حلول إدارة المرافق وتطوير الابتكار والجودة لتحقيق أعلى مستويات الكفاءة والخدمات الذكية.
              </p>
            </div>

            {/* Column 2 (Middle in RTL): Quick Links */}
            <div className="flex flex-col items-center md:items-start md:mr-4 lg:mr-8">
              <div className="mb-2">
                <h3 className="text-base lg:text-[17px] font-extrabold text-white tracking-wide">
                  روابط سريعة
                </h3>
                <div className="w-14 h-[2.5px] bg-[#E3B343] mt-1.5 rounded-full mx-auto md:mr-0" />
              </div>
              <ul className="space-y-2 text-slate-100 text-xs lg:text-[13px] font-semibold w-full flex flex-col items-center md:items-start">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-slate-100 hover:text-[#E3B343] transition-colors duration-200 group"
                  >
                    <Home size={15} className="text-[#E3B343] shrink-0 group-hover:scale-110 transition-transform" />
                    <span>الرئيسية</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="flex items-center gap-2 text-slate-100 hover:text-[#E3B343] transition-colors duration-200 group"
                  >
                    <LayoutGrid size={15} className="text-[#E3B343] shrink-0 group-hover:scale-110 transition-transform" />
                    <span>خدماتنا</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="flex items-center gap-2 text-slate-100 hover:text-[#E3B343] transition-colors duration-200 group"
                  >
                    <Mail size={15} className="text-[#E3B343] shrink-0 group-hover:scale-110 transition-transform" />
                    <span>تواصل معنا</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 (Left in RTL): Contact Us */}
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-2">
                <h3 className="text-base lg:text-[17px] font-extrabold text-white tracking-wide">
                  تواصل معنا
                </h3>
                <div className="w-14 h-[2.5px] bg-[#E3B343] mt-1.5 rounded-full mx-auto md:mr-0" />
              </div>
              <ul className="space-y-2.5 text-slate-100 text-xs lg:text-[13px] font-medium w-full flex flex-col items-center md:items-start">
                <li className="flex items-center gap-2.5 justify-center md:justify-start">
                  <MapPin size={15} className="text-[#E3B343] shrink-0" />
                  <span dir="ltr" className="text-slate-100 text-center md:text-left">
                    Level 3, Baynona Building, Khalifa City A
                  </span>
                </li>
                <li className="flex items-center gap-2.5 justify-center md:justify-start">
                  <Phone size={15} className="text-[#E3B343] shrink-0" />
                  <span dir="ltr" className="tracking-wider tabular-nums text-slate-100">
                    +971 4 123 4567
                  </span>
                </li>
                <li className="flex items-center gap-2.5 justify-center md:justify-start">
                  <Mail size={15} className="text-[#E3B343] shrink-0" />
                  <span dir="ltr" className="text-slate-100">
                    Logistic@saher.ae
                  </span>
                </li>
              </ul>
            </div>

          </div>

          {/* 3. Left Side (in RTL, last in DOM): Abu Dhabi Skyline */}
          <div className="shrink-0 flex items-end justify-center lg:justify-start order-3 lg:order-3 w-full lg:w-auto">
            <img
              src={assetUrl('assets/footer-skyline.png')}
              alt="أفق أبوظبي العمراني"
              referrerPolicy="no-referrer"
              className="h-[110px] sm:h-[125px] lg:h-[140px] w-auto object-contain object-bottom select-none pointer-events-none drop-shadow-sm"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

        </div>

        {/* Separator Line */}
        <div className="mt-5 mb-3 border-t border-[#1E4378]/70 relative">
          {/* Centered Credit Pill sitting gracefully on the divider line */}
          <div className="absolute left-1/2 -top-3.5 -translate-x-1/2">
            <div className="flex items-center gap-2 bg-[#0B254E] py-1 px-5 rounded-full border border-[#3B68A6]/70 shadow-sm text-xs whitespace-nowrap">
              <span className="text-slate-200 font-medium">إعداد وتصميم</span>
              <span className="text-[#E3B343]">/</span>
              <span className="text-white font-bold">خالد الهاشمي</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-[11.5px] font-semibold tracking-wide text-slate-300 pt-3">
          جميع الحقوق محفوظة لشركة SAHER FOR SMART SERVICES 2026 &copy;
        </div>
      </div>
    </footer>
  );
};

export default Footer;