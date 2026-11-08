import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Clock, Home, Headset, CheckCircle2 } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';

interface SaherHeaderProps {
  onLogout?: () => void;
}

const SaherHeader: React.FC<SaherHeaderProps> = ({ onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [currentArabicDate, setCurrentArabicDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [emblemError, setEmblemError] = useState(false);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const dateOptions: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      setCurrentDate(now.toLocaleDateString('en-US', dateOptions));

      try {
        setCurrentArabicDate(now.toLocaleDateString('ar-AE', dateOptions));
      } catch {
        setCurrentArabicDate(now.toLocaleDateString('ar', dateOptions));
      }

      const timeOptions: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      setCurrentTime(now.toLocaleTimeString('en-US', timeOptions));
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoutClick = () => {
    if (onLogout) {
      onLogout();
    } else {
      setToastMessage('تم تسجيل الخروج بنجاح');
      setTimeout(() => setToastMessage(null), 3500);
    }
  };

  return (
    <>
      {/* Notification Toast if triggered */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] bg-[#07162B] text-white border border-[#E3B343] px-5 py-2.5 rounded-xl shadow-xl flex items-center gap-2.5 text-sm font-bold animate-fade-in">
          <CheckCircle2 size={18} className="text-[#E3B343] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Corporate Dark Navy Bar */}
      <div className="bg-gradient-to-r from-[#07162B] via-[#0C254A] to-[#07162B] text-white min-h-[56px] py-2 px-4 md:px-8 relative z-40 border-b border-[#1B355E] overflow-hidden flex items-center">
        {/* Right-side Abu Dhabi Skyline Silhouette (matches reference image top-right) */}
        <img
          src={assetUrl('assets/header-skyline.png')}
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="hidden lg:block absolute right-0 bottom-0 h-full w-[165px] object-cover object-bottom pointer-events-none select-none opacity-95"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />

        <div className="max-w-[1280px] w-full mx-auto flex flex-col md:flex-row items-center justify-between relative gap-2.5 md:gap-0">
          {/* Physical Right (First in RTL): Live Clock Widget */}
          <div className="hidden md:flex items-center lg:mr-[148px] z-10">
            {currentTime && (
              <div
                dir="ltr"
                className="flex items-center gap-2 text-white text-xs md:text-[13px] bg-[#0B2142]/90 px-4 py-1.5 rounded-full border border-[#E3B343]/40 hover:border-[#E3B343] transition-colors cursor-default shadow-inner"
              >
                <Clock size={15} className="text-[#E3B343] shrink-0" />
                <span className="font-semibold tracking-wider tabular-nums min-w-[72px] text-center">
                  {currentTime}
                </span>
              </div>
            )}
          </div>

          {/* Center: Brand Title + English Subtitle + SAHER Emblem */}
          <div className="flex items-center justify-center gap-3 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-10">
            {/* SAHER Golden/White Swoosh Emblem (on the right of text in RTL) */}
            {!emblemError ? (
              <img
                src={assetUrl('assets/header-emblem.png')}
                alt="شعار ساهر"
                referrerPolicy="no-referrer"
                className="h-9 md:h-11 w-auto object-contain shrink-0 drop-shadow-sm"
                onError={() => setEmblemError(true)}
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-[#0756AA] border border-[#E3B343] flex items-center justify-center text-[#E3B343] font-black text-lg shrink-0">
                S
              </div>
            )}

            <div className="flex flex-col items-center text-center">
              <span className="text-lg md:text-[22px] font-extrabold tracking-wide text-white leading-tight">
                خدمات ساهر الذكية
              </span>
              <span
                dir="ltr"
                className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-slate-200 uppercase leading-tight mt-0.5"
              >
                SAHER SMART SERVICES
              </span>
            </div>
          </div>

          {/* Physical Left (Last in RTL): Dual Live Date Widget (English + Arabic) */}
          <div className="hidden md:flex items-center z-10">
            {currentDate && (
              <div
                dir="ltr"
                className="flex items-center gap-2.5 text-slate-100 text-[11px] bg-[#0B2142]/90 px-4 py-1 rounded-full border border-[#E3B343]/40 hover:border-[#E3B343] transition-colors cursor-default shadow-inner"
              >
                <Calendar size={15} className="text-[#E3B343] shrink-0" />
                <div className="flex flex-col items-center leading-tight">
                  <span className="font-semibold tracking-wide text-white">{currentDate}</span>
                  {currentArabicDate && (
                    <span dir="rtl" className="text-[10.5px] text-slate-200 font-medium">
                      {currentArabicDate}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Only: Date & Time Row */}
          <div className="flex md:hidden items-center justify-center flex-wrap gap-2 z-10">
            {currentDate && (
              <div
                dir="ltr"
                className="flex items-center gap-1.5 text-slate-100 text-[10px] bg-[#0B2142] px-3 py-1 rounded-full border border-[#E3B343]/40"
              >
                <Calendar size={12} className="text-[#E3B343]" />
                <span>{currentDate}</span>
              </div>
            )}
            {currentTime && (
              <div
                dir="ltr"
                className="flex items-center gap-1.5 text-slate-100 text-[10px] bg-[#0B2142] px-3 py-1 rounded-full border border-[#E3B343]/40"
              >
                <Clock size={12} className="text-[#E3B343]" />
                <span className="tabular-nums font-semibold">{currentTime}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Secondary White Navigation Bar - Sticky */}
      <header className="bg-gradient-to-b from-white to-[#F4F7FB] sticky top-0 z-50 shadow-md border-b-[3px] border-[#E3B343]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 h-14 flex items-center justify-between relative">
          {/* Right Side (Start in RTL): Home Button */}
          <a
            href="#"
            className="bg-gradient-to-b from-[#1368C4] to-[#074794] hover:from-[#1676DD] hover:to-[#0953AB] text-white text-sm md:text-[15px] font-bold px-5 py-1.5 rounded-xl shadow-sm border border-[#43B8F5]/30 flex items-center gap-2 transition-all duration-200 hover:shadow-md whitespace-nowrap"
          >
            <Home size={17} className="text-white shrink-0" />
            <span>الرئيسية</span>
          </a>

          {/* Center: Department Name */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base lg:text-[19px] font-extrabold text-[#07162B] whitespace-nowrap tracking-normal">
            إدارة الخدمات العامة / قسم إدارة المرافق
          </div>

          {/* Left Side (End in RTL): Contact Us + Logout + Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <nav className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="bg-gradient-to-b from-[#1368C4] to-[#074794] hover:from-[#1676DD] hover:to-[#0953AB] text-white text-sm md:text-[15px] font-bold px-5 py-1.5 rounded-xl shadow-sm border border-[#43B8F5]/30 flex items-center gap-2 transition-all duration-200 hover:shadow-md whitespace-nowrap"
              >
                <Headset size={17} className="text-white shrink-0" />
                <span>اتصل بنا</span>
              </a>
            </nav>

            {/* Mobile Menu Icon */}
            <button
              type="button"
              className="md:hidden text-[#07162B] hover:text-[#0756AA] transition-colors p-1.5 rounded-lg hover:bg-slate-100"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 transition-all duration-300 ease-in-out origin-top ${
            isMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col p-4 space-y-3">
            <div className="text-center text-sm font-extrabold text-[#07162B] pb-2 border-b border-slate-100">
              إدارة الخدمات العامة / قسم إدارة المرافق
            </div>
            <a
              href="#"
              className="text-[#0756AA] hover:text-[#E3B343] font-bold flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-slate-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home size={17} />
              <span>الرئيسية</span>
            </a>
            <a
              href="#contact"
              className="text-[#0756AA] hover:text-[#E3B343] font-bold flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-slate-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <Headset size={17} />
              <span>اتصل بنا</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default SaherHeader;