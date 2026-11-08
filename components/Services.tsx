import React from 'react';
import { ClipboardList, Calendar, FileText, Zap, Briefcase, Coins } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, Icon, link }) => {
  const CardContent = (
    <div className="group bg-white rounded-2xl shadow-lg py-10 px-8 flex flex-col items-center justify-center text-center transition-all duration-500 border-2 border-white hover:border-[#0056b3] hover:shadow-[0_25px_50px_-12px_rgba(0,86,179,0.25)] hover:-translate-y-4 h-full w-full min-h-[320px] cursor-pointer">
      {/* Icon Wrapper: Blue normally, turns Gold on hover with dark icon */}
      <div className="w-20 h-20 rounded-full bg-[#0056b3] flex items-center justify-center text-white mb-6 shadow-md shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#fbbf24] group-hover:text-[#091526]">
        <Icon size={40} strokeWidth={1.5} />
      </div>
      
      {/* Title: Dark normally, turns Blue on hover */}
      <h3 className="text-2xl font-bold text-slate-900 mb-4 px-2 transition-colors duration-300 group-hover:text-[#0056b3]">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-slate-600 text-lg leading-relaxed font-medium px-2">
        {description}
      </p>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full h-full no-underline">
        {CardContent}
      </a>
    );
  }

  return CardContent;
};

const Services: React.FC = () => {
  const services = [
    {
      title: "نظام تسجيل الزوار والموردين",
      description: "نظام آمن وفعال لتسجيل بيانات الزوار والموردين وتنظيم دخولهم وخروجهم.",
      Icon: ClipboardList,
      link: "https://vistor-vindor.vercel.app/"
    },
    {
      title: "نظام حجز القاعات",
      description: "نظام سهل ومرن لحجز قاعات الاجتماعات إلكترونياً.",
      Icon: Calendar,
      link: "https://hall-nu.vercel.app/"
    },
    {
      title: "نظام تسجيل أسماء المستلمين لبطاقات الزوار",
      description: "نظام إلكتروني يهدف إلى تنظيم وتوثيق عملية تسليم واستلام بطاقات الزوار لضمان المتابعة الدقيقة.",
      Icon: Briefcase,
      link: "https://card-recipients.vercel.app/"
    },
    {
      title: "نظام تسجيل المبالغ المصروفة من قبل الدعم اللوجيستي ( بيتي كاش )",
      description: "نظام رقمي دقيق لإدارة وتسجيل المصروفات النثرية اليومية للدعم اللوجيستي وتوثيقها.",
      Icon: Coins,
      link: "https://petty-cash-eta.vercel.app/"
    },
    {
      title: "نظام تسجيل بيانات الرخص التجارية والعقود وأخرى",
      description: "نظام متكامل لتسجيل وأرشفة الرخص التجارية والعقود المختلفة بطريقة آمنة ومنظمة.",
      Icon: FileText,
      link: "https://license-jet.vercel.app/"
    },
    {
      title: "نظام تسجيل نسبة استهلاك الماء والكهرباء للمقرات",
      description: "نظام متخصص لمراقبة وتسجيل معدلات استهلاك الماء والكهرباء في المقرات لضمان الكفاءة وترشيد الاستهلاك.",
      Icon: Zap,
      link: "https://record-water-elc.vercel.app/"
    }
  ];

  return (
    <section className="pt-8 pb-20 bg-[#f1f5f9]">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0056b3] mb-4">
            الخدمات الالكترونية
          </h2>
          {/* Updated: Yellow line spans the full width of the text */}
          <div className="inline-block relative">
            <p className="text-[#334155] text-base md:text-lg font-medium relative z-10 px-2">
              ملتزمون بتقديم خدمات عالية المستوى تساهم في تسهيل مهام العمل
            </p>
            {/* Reduced thickness from h-1.5 to h-1 */}
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#fbbf24] rounded-full"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
             <div key={index} className="w-full flex justify-center h-full">
                <ServiceCard 
                  title={service.title} 
                  description={service.description} 
                  Icon={service.Icon}
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