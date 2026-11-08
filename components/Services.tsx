import React, { useState } from 'react';
import {
  Users,
  Calendar,
  IdCard,
  Coins,
  FileText,
  Zap,
  Laptop,
  ChevronLeft,
} from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
  image: string;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  Icon,
  image,
  link,
}) => {
  const [imgError, setImgError] = useState(false);

  const CardContent = (
    <div className="group bg-white rounded-[18px] shadow-[0_10px_26px_-6px_rgba(7,22,43,0.12)] hover:shadow-[0_20px_38px_-8px_rgba(7,86,170,0.22)] p-2.5 flex flex-col items-center justify-between text-center transition-all duration-300 border border-white/95 hover:border-[#1385D7]/40 hover:-translate-y-1.5 h-full w-full cursor-pointer">
      {/* 1. Top Service Image + 2. Overlapping Circular Navy/Gold Icon */}
      <div className="relative w-full h-[142px] shrink-0">
        <div className="w-full h-full rounded-[13px] overflow-hidden bg-gradient-to-br from-[#07162B] to-[#0756AA] relative">
          {!imgError ? (
            <img
              src={image}
              alt={title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#07162B] via-[#0B2D5C] to-[#0756AA] text-white/30">
              <Icon size={48} strokeWidth={1.2} />
            </div>
          )}
        </div>

        {/* Circular Navy Icon with Gold Border overlapping bottom edge of photo */}
        <div className="w-[52px] h-[52px] rounded-full bg-gradient-to-b from-[#0E366C] to-[#071A3B] border-[2.5px] border-[#E3B343] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(7,22,43,0.35)] absolute -bottom-6 left-1/2 -translate-x-1/2 z-10 transition-all duration-300 group-hover:scale-110 group-hover:from-[#0756AA] group-hover:to-[#072652]">
          <Icon size={24} strokeWidth={1.8} className="text-white" />
        </div>
      </div>

      {/* 3. Title & Description */}
      <div className="pt-8 pb-2 px-3 flex flex-col items-center justify-between flex-grow w-full">
        <div>
          <h3 className="text-[17px] md:text-[18.5px] font-extrabold text-[#10233D] mb-2 leading-snug transition-colors duration-300 group-hover:text-[#0756AA]">
            {title}
          </h3>

          <p className="text-[#334155] text-[13.5px] md:text-[14px] leading-relaxed font-medium px-1 mb-4">
            {description}
          </p>
        </div>

        {/* 4. Action Button: الدخول إلى النظام */}
        <div className="mt-auto pt-1 pb-1">
          <span className="inline-flex items-center justify-center gap-1.5 min-w-[185px] py-1.5 px-5 rounded-full bg-gradient-to-r from-[#072148] via-[#0B3C7D] to-[#072148] group-hover:from-[#0756AA] group-hover:via-[#1385D7] group-hover:to-[#0756AA] text-white text-xs md:text-[13.5px] font-bold border-[1.5px] border-[#E3B343] shadow-sm transition-all duration-300">
            <span>الدخول إلى النظام</span>
            <ChevronLeft
              size={15}
               strokeWidth={2.5}
              className="text-[#E3B343] group-hover:text-white group-hover:-translate-x-0.5 transition-transform"
            />
          </span>
        </div>
      </div>
    </div>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0756AA] rounded-[18px]"
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
};

const Services: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      title: "نظام تسجيل الزوار والموردين",
      description: "نظام آمن وفعال لتسجيل بيانات الزوار والموردين وتنظيم دخولهم وخروجهم.",
      Icon: Users,
      image: "/assets/cards/card-visitors.png",
      link: "https://vistor-vindor.vercel.app/",
    },
    {
      title: "نظام حجز القاعات",
      description: "نظام سهل ومرن لحجز قاعات الاجتماعات إلكترونياً.",
      Icon: Calendar,
      image: "/assets/cards/card-halls.png",
      link: "https://hall-nu.vercel.app/",
    },
    {
      title: "نظام تسجيل أسماء المستلمين لبطاقات الزوار",
      description: "نظام إلكتروني يهدف إلى تنظيم وتوثيق عملية تسليم واستلام بطاقات الزوار لضمان المتابعة الدقيقة.",
      Icon: IdCard,
      image: "/assets/cards/card-badges.png",
      link: "https://card-recipients.vercel.app/",
    },
    {
      title: "نظام تسجيل المبالغ المصروفة من قبل الدعم اللوجيستي ( بيتي كاش )",
      description: "نظام رقمي دقيق لإدارة وتسجيل المصروفات النثرية اليومية للدعم اللوجيستي وتوثيقها.",
      Icon: Coins,
      image: "/assets/cards/card-pettycash.png",
      link: "https://petty-cash-eta.vercel.app/",
    },
    {
      title: "نظام تسجيل بيانات الرخص التجارية والعقود وأخرى",
      description: "نظام متكامل لتسجيل وأرشفة الرخص التجارية والعقود المختلفة بطريقة آمنة ومنظمة.",
      Icon: FileText,
      image: "/assets/cards/card-licenses.png",
      link: "https://license-jet.vercel.app/",
    },
    {
      title: "نظام تسجيل نسبة استهلاك الماء والكهرباء للمقرات",
      description: "نظام متخصص لمراقبة وتسجيل معدلات استهلاك الماء والكهرباء في المقرات لضمان الكفاءة وترشيد الاستهلاك.",
      Icon: Zap,
      image: "/assets/cards/card-utilities.png",
      link: "https://record-water-elc.vercel.app/",
    },
  ];

  return (
    <section
      id="services"
      className="relative pt-7 pb-12 bg-gradient-to-b from-[#EBF4FF] via-[#F2F8FF] to-[#DFECFA] overflow-hidden"
    >
      {/* Subtle Geometric Network Ornaments on Left & Right Edges */}
      <svg
        className="hidden lg:block absolute top-8 right-0 w-64 h-64 text-[#0756AA]/[0.05] pointer-events-none select-none"
        viewBox="0 0 200 200"
        fill="none"
      >
        <polygon points="100,10 190,55 190,145 100,190 10,145 10,55" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="100,40 165,72 165,128 100,160 35,128 35,72" stroke="currentColor" strokeWidth="1" />
        <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="1" />
        <line x1="10" y1="55" x2="190" y2="145" stroke="currentColor" strokeWidth="1" />
        <line x1="190" y1="55" x2="10" y2="145" stroke="currentColor" strokeWidth="1" />
      </svg>
      <svg
        className="hidden lg:block absolute bottom-8 left-0 w-64 h-64 text-[#0756AA]/[0.05] pointer-events-none select-none"
        viewBox="0 0 200 200"
        fill="none"
      >
        <polygon points="100,10 190,55 190,145 100,190 10,145 10,55" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="100,40 165,72 165,128 100,160 35,128 35,72" stroke="currentColor" strokeWidth="1" />
        <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="1" />
        <line x1="10" y1="55" x2="190" y2="145" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="max-w-[1140px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center justify-center gap-2.5 mb-1.5">
            <Laptop size={30} strokeWidth={2.2} className="text-[#07162B] shrink-0" />
            <h2 className="text-2xl md:text-[30px] font-black text-[#07162B] tracking-tight">
              الخدمات الالكترونية
            </h2>
          </div>

          <div className="inline-block relative">
            <p className="text-[#263B59] text-sm md:text-[15.5px] font-semibold relative z-10 px-3">
              ملتزمون بتقديم خدمات عالية المستوى تساهم في تسهيل مهام العمل
            </p>
            <div className="mt-2 mx-auto w-full max-w-[440px] h-[3px] bg-gradient-to-r from-[#E3B343]/30 via-[#E3B343] to-[#E3B343]/30 rounded-full" />
          </div>
        </div>

        {/* Services Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="w-full flex justify-center h-full">
              <ServiceCard
                title={service.title}
                description={service.description}
                Icon={service.Icon}
                image={service.image}
                link={service.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;