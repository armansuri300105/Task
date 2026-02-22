import React from 'react';
import { Gavel, FileText, CheckSquare, ReceiptText } from 'lucide-react';

interface PillProps {
  icon: React.ElementType;
  label: string;
  color: string;
  rotation: string;
  position: string;
}

const FloatingPill = ({ icon: Icon, label, color, rotation, position }: PillProps) => (
  <div className={`w-[250px] absolute ${position} ${rotation} ${color} flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl transition-transform hover:scale-105 z-10`}>
    <Icon className="text-white" size={24} />
    <span className="text-white font-semibold text-xl">{label}</span>
  </div>
);

// Fixed: In Tailwind, dynamic strings like w-[${width}] don't always compile. 
// We use style object for true dynamic dimensions.
const BackgroundBlob = ({ position, rotation = "", width, height, borderRadius = "rounded-full" }: any) => (
  <div 
    className={`absolute ${position} ${rotation} ${borderRadius} bg-[#e3eaf8] z-[1] opacity-70`}
    style={{ width: width, height: height }}
  />
);

const LegalHero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#f4f5f8] overflow-hidden flex items-center px-10 lg:px-24">
      {/* Soft Background Blurs */}
      <div className="absolute top-[10%] right-[-5%] w-[40%] h-24 bg-blue-100/50 rounded-full blur-xl" />
      <div className="absolute top-[30%] right-[-10%] w-[35%] h-24 bg-blue-100/50 rounded-full blur-xl" />
      <div className="absolute bottom-[15%] left-[-5%] w-[30%] h-24 bg-blue-100/50 rounded-full blur-xl" />

      <div className="flex flex-col w-full gap-3 mt-12">
        {/* Text Section */}
        <div className="max-w-xl z-20">
          <h1 className="text-6xl font-normal text-[#5A607F] leading-tight">
            A single platform to <br />
            <span className="text-[#3A3F58] font-bold">manage every part of your legal work</span>
          </h1>
          <p className="text-[#6366F1] text-lg leading-relaxed max-w-md mt-4">
            Track matters, coordinate schedules, manage clients, centralize documents, and handle communication - all in one system.
          </p>
        </div>

        {/* Visual Section */}
        <div className="relative h-[400px] w-full max-w-[1000px] mt-[40px]">
          <FloatingPill 
            icon={ReceiptText}
            label="Billing" 
            color="bg-[#2D5BFF]" 
            rotation="rotate-[12deg]"
            position="top-[0] right-[30%]" 
          />

          <FloatingPill 
            icon={Gavel} 
            label="Matters" 
            color="bg-[#E67E22]" 
            rotation="-rotate-[12deg]" 
            position="top-[25%] left-[5%]" 
          />

          {/* John Doe Portal (Special Card) */}
          <div className="absolute top-[25%] left-[35%] lg:left-[42%] rotate-[4deg] bg-[#A5B4FC] p-[10px_30px_10px_20px] rounded-[60px] shadow-xl flex items-center gap-3 z-20">
            <div className="w-1 bg-[#E67E22] h-10 rounded-full" />
            <div className="w-10 h-10 rounded-full bg-slate-300 flex-shrink-0 flex items-center justify-center overflow-hidden">
               <span className="text-xs text-slate-600 font-bold">JD</span>
            </div>
            <div>
              <h4 className="font-bold text-[#1E293B] text-[12px]">John Doe - Portal</h4>
              <p className="text-[#475569] w-[180px] text-[10px] leading-tight font-medium">Hey! Could you please review a document for me?</p>
              <p className="text-[#334155] text-[7px] mt-1 font-bold uppercase tracking-widest opacity-70">MAT-2233 • 2 h ago</p>
            </div>
          </div>

          <FloatingPill 
            icon={CheckSquare} 
            label="Tasks" 
            color="bg-[#2D2E3E]" 
            rotation="rotate-[0deg]" 
            position="bottom-[10%] left-[20%]" 
          />
          <FloatingPill 
            icon={FileText} 
            label="Documents" 
            color="bg-[#2D2E3E]" 
            rotation="-rotate-[6deg]" 
            position="bottom-[10%] right-[10%]" 
          />
        </div>

        {/* Horizontal Pill Background Blobs */}
        <BackgroundBlob width="200px" height="60px" position="top-[50%] left-[-5%]" borderRadius="rounded-r-full" rotation="-rotate-[6deg]" />
        <BackgroundBlob width="200px" height="60px" position="top-[60%] left-[-5%]" borderRadius="rounded-r-full" />
        <BackgroundBlob width="300px" height="60px" position="top-[70%] left-[-5%]" borderRadius="rounded-r-full" />
        
        <BackgroundBlob width="200px" height="60px" position="top-[30%] right-[-5%]" borderRadius="rounded-l-full" rotation="rotate-[6deg]" />
        <BackgroundBlob width="300px" height="60px" position="top-[40%] right-[-5%]" borderRadius="rounded-l-full" />
        <BackgroundBlob width="300px" height="60px" position="top-[50%] right-[-5%]" borderRadius="rounded-l-full" />

      </div>
    </section>
  );
};

export default LegalHero;