'use client';
import Link from 'next/link';

const Logo = ({ light = false }: { light?: boolean }) => (
  <Link href="/" className="flex items-center gap-2 sm:gap-4 min-w-0 hover:opacity-90 transition-opacity">
    <div className="flex-shrink-0 w-9 sm:w-[46px]">
      <svg className="w-full h-auto" viewBox="0 0 46 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 18L12 14V32H4V18Z" fill="#C5A059" />
        <path d="M13 12L21 8V32H13V12Z" fill="#C5A059" />
        <path d="M22 6L30 2V32H22V6Z" fill={light ? '#FFFFFF' : '#0A1F44'} />
        <path d="M2 32L12 22L21 26L30 8" stroke={light ? '#C5A059' : 'white'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="32" width="28" height="0.5" fill={light ? 'white' : '#0A1F44'} fillOpacity="0.1" />
      </svg>
    </div>
    <div className="flex flex-col">
      <span className="text-lg sm:text-[22px] md:text-[28px] font-serif font-bold leading-none tracking-tight text-gold uppercase" style={{ fontFamily: "'Prata', serif" }}>
        QuantRidge
      </span>
      <div className="flex items-center gap-2 mt-1">
        <div className={`h-[0.5px] flex-1 ${light ? 'bg-white/20' : 'bg-navy/30'}`} />
        <span className={`text-[10px] font-sans tracking-[0.5em] font-bold uppercase ${light ? 'text-white/70' : 'text-navy/70'}`}>
          Capital
        </span>
        <div className={`h-[0.5px] flex-1 ${light ? 'bg-white/20' : 'bg-navy/30'}`} />
      </div>
    </div>
  </Link>
);

export default Logo;
