import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Clock } from 'lucide-react';

interface SaherHeaderProps {
  onLogout?: () => void;
}

const SaherHeader: React.FC<SaherHeaderProps> = ({ onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Set Date (English format)
    const dateOptions: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    setCurrentDate(new Date().toLocaleDateString('en-US', dateOptions));

    // Update Time (English format)
    const updateTime = () => {
      const timeOptions: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      };
      setCurrentTime(new Date().toLocaleTimeString('en-US', timeOptions));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Black/Dark Bar - Scrolls away */}
      <div className="bg-[#091526] text-white py-4 md:py-5 px-4 relative z-40 border-b border-slate-800">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center relative gap-3 md:gap-0">
          
          {/* Date Widget (Physical Left) - dir="ltr" ensures proper English formatting */}
          {currentDate && (
            <div dir="ltr" className="hidden md:flex items-center gap-2 text-slate-300 text-xs md:text-sm bg-[#1e293b] px-4 py-1.5 rounded-full border border-slate-700 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 hover:border-[#fbbf24]/50 transition-colors cursor-default shadow-sm">
              <Calendar size={14} className="text-[#fbbf24]" />
              <span className="font-normal tracking-wide pt-0.5">{currentDate}</span>
            </div>
          )}

          {/* Main Title (Centered) */}
          <span className="text-xl md:text-2xl font-medium tracking-wide text-center order-1">
            خدمات ساهـــــــر الذكيـــــــة
          </span>

          {/* Time Widget (Physical Right) - dir="ltr" ensures proper English formatting */}
          {currentTime && (
            <div dir="ltr" className="hidden md:flex items-center gap-2 text-slate-300 text-xs md:text-sm bg-[#1e293b] px-4 py-1.5 rounded-full border border-slate-700 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 hover:border-[#fbbf24]/50 transition-colors cursor-default shadow-sm">
              <Clock size={14} className="text-[#fbbf24]" />
              <span className="font-normal tracking-wide pt-0.5 font-mono min-w-[85px] text-center">{currentTime}</span>
            </div>
          )}

          {/* Mobile Only: Date & Time Stacked/Row */}
          <div className="flex md:hidden items-center gap-3 order-2">
            {currentDate && (
              <div dir="ltr" className="flex items-center gap-1.5 text-slate-300 text-[10px] bg-[#1e293b] px-3 py-1 rounded-full border border-slate-700">
                <Calendar size={12} className="text-[#fbbf24]" />
                <span className="font-normal tracking-wide pt-0.5">{currentDate}</span>
              </div>
            )}
            {currentTime && (
              <div dir="ltr" className="flex items-center gap-1.5 text-slate-300 text-[10px] bg-[#1e293b] px-3 py-1 rounded-full border border-slate-700">
                <Clock size={12} className="text-[#fbbf24]" />
                <span className="font-normal tracking-wide pt-0.5 font-mono">{currentTime}</span>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Main Navigation Bar (Secondary Header) - Sticky */}
      <header className="bg-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between relative">
          
          {/* Right Side: Home Link */}
          <a href="#" className="text-lg font-bold text-[#0056b3] hover:text-[#fbbf24] transition-colors">
            الرئيسية
          </a>

          {/* Centered Department Name */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-[#091526] whitespace-nowrap">
            إدارة الخدمات العامة / قسم إدارة المرافق
          </div>

          {/* Left Side: Navigation Links & Mobile Menu */}
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-4">
              <a href="#" className="text-lg font-bold text-[#0056b3] hover:text-[#fbbf24] transition-colors">اتصل بنا</a>
            </nav>

            {/* Mobile Menu Icon */}
            <button 
              className="md:hidden text-[#091526] hover:text-[#0056b3] transition-colors p-1"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        <div 
          className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-lg border-t border-slate-100 transition-all duration-300 ease-in-out origin-top ${
            isMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col p-4 space-y-4">
            <div className="text-center text-sm font-bold text-[#091526] pb-2 border-b border-slate-100">
              إدارة الخدمات العامة / قسم إدارة المرافق
            </div>
            <a href="#" className="text-[#0056b3] hover:text-[#fbbf24] font-bold block text-center py-2" onClick={() => setIsMenuOpen(false)}>
              الرئيسية
            </a>
            <a href="#" className="text-[#0056b3] hover:text-[#fbbf24] font-bold block text-center py-2" onClick={() => setIsMenuOpen(false)}>
              اتصل بنا
            </a>
          </div>
        </div>

        {/* Gold Accent Line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#fbbf24]"></div>
      </header>
    </>
  );
};

export default SaherHeader;