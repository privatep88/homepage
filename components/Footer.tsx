import React from 'react';
import { MapPin, Phone, Mail, ChevronLeft } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#091526] text-white py-6 border-t-4 border-[#fbbf24]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-right">
          
          {/* Column 1: About */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-3 text-white border-b-2 border-[#eab308] pb-1 w-fit">عن SAHER</h3>
            <p className="text-white text-sm leading-6 font-light max-w-sm">
              شركة رائدة في تقديم الحلول والأنظمة الذكية، ملتزمون بالابتكار والجودة لتحقيق أعلى مستويات الكفاءة والخدمات الذكية.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-3 text-white border-b-2 border-[#eab308] pb-1 w-fit">روابط سريعة</h3>
            <ul className="space-y-2 text-white text-sm w-full flex flex-col items-center md:items-start">
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-[#fbbf24] hover:translate-x-[-5px] transition-all duration-300 group">
                  <ChevronLeft size={16} className="text-[#fbbf24] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>الرئيسية</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-[#fbbf24] hover:translate-x-[-5px] transition-all duration-300 group">
                   <ChevronLeft size={16} className="text-[#fbbf24] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>خدماتنا</span>
                </a>
              </li>
               <li>
                <a href="#" className="flex items-center gap-2 hover:text-[#fbbf24] hover:translate-x-[-5px] transition-all duration-300 group">
                   <ChevronLeft size={16} className="text-[#fbbf24] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>تواصل معنا</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-3 text-white border-b-2 border-[#eab308] pb-1 w-fit">تواصل معنا</h3>
            <ul className="space-y-3 text-white text-sm">
              <li className="flex items-start gap-3 justify-center md:justify-start group">
                <div className="w-8 h-8 rounded-full bg-[#1e293b] flex items-center justify-center text-[#fbbf24] group-hover:bg-[#fbbf24] group-hover:text-[#091526] transition-colors duration-300 shrink-0">
                    <MapPin size={16} />
                </div>
                <div className="mt-1 text-right">
                   Level 3, Baynona Building, Khalifa City A
                </div>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start group">
                <div className="w-8 h-8 rounded-full bg-[#1e293b] flex items-center justify-center text-[#fbbf24] group-hover:bg-[#fbbf24] group-hover:text-[#091526] transition-colors duration-300 shrink-0">
                    <Phone size={16} />
                </div>
                <span dir="ltr" className="tracking-wider">+971 4 123 4567</span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start group">
                <div className="w-8 h-8 rounded-full bg-[#1e293b] flex items-center justify-center text-[#fbbf24] group-hover:bg-[#fbbf24] group-hover:text-[#091526] transition-colors duration-300 shrink-0">
                    <Mail size={16} />
                </div>
                <span>Logistic@saher.ae</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Separator */}
        <div className="border-t border-slate-800 my-4"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-center text-xs text-white gap-3">
            
             {/* Credits */}
             <div className="flex items-center gap-2 bg-[#1e293b]/50 py-1.5 px-4 rounded-full border border-slate-800 hover:border-[#fbbf24]/50 transition-colors">
                <span className="text-white">اعداد وتصميم</span>
                <span className="text-white">/</span>
                <span className="text-white font-bold text-sm">خالد الهاشمي</span>
            </div>

            {/* Copyright */}
            <div className="text-center font-medium tracking-wide">
              جميع الحقوق محفوظة لشركة &copy; {new Date().getFullYear()} SAHER FOR SMART SERVICES
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;