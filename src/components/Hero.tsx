import React, { useState } from 'react';
import { Download, ChevronRight, Award, Building2, ShieldCheck, Shirt, CheckCircle, Sparkles, MapPin, Eye, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onOpenCVModal: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal, onOpenContact }) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-slate-950 flex flex-col justify-center">
      {/* Background Decorative Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Executive Copy & Info */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide shadow-xl backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Assistant Manager – Garment Washing Process (GWP)</span>
              <span className="hidden sm:inline text-slate-500">|</span>
              <span className="hidden sm:inline text-slate-300 font-normal">MG Apparel Pvt. Ltd.</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-serif-display leading-[1.1]">
                Jawaid Hussain <span className="text-gold-gradient">Kharal</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-amber-400/90 tracking-wide">
                20+ Years of Textile & Garment Washing Operations Leadership
              </p>
            </div>

            {/* Professional Headline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light max-w-2xl">
              {portfolioData.headline}
            </p>

            {/* Key Value Proposition Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {['Denim Wash Engineering', 'Shade Band Control', 'Eco-Washing Tech', 'Team Leadership', 'Output Optimization'].map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900/80 text-slate-300 border border-slate-800 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="/Jawaid_Hussain_Kharal_CV.pdf"
                download="Jawaid_Hussain_Kharal_CV.pdf"
                id="hero-download-cv-btn"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 transition-all duration-300 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 active:scale-98 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Official CV (PDF)</span>
              </a>

              <button
                onClick={onOpenContact}
                id="hero-contact-btn"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 hover:border-amber-500/60 hover:text-white transition-all duration-300 shadow-md cursor-pointer"
              >
                <span>Schedule Discussion</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </button>

              <a
                href="#experience"
                className="w-full sm:w-auto text-center px-5 py-3.5 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors"
              >
                View Career Timeline ↓
              </a>
            </div>

            {/* Current Location Badge */}
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Karachi, Pakistan</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">Open for Executive Textile Opportunities</span>
            </div>

          </div>

          {/* Right Column: Single Executive Profile Photo Display */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Decorative Glow Card */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-amber-500/30 via-slate-800/40 to-amber-600/20 blur-xl opacity-70"></div>

              {/* Main Card Frame */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-4 shadow-2xl backdrop-blur-xl">
                
                {/* Single Image Display */}
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-950 border border-amber-500/30 shadow-inner">
                  <img
                    src={portfolioData.images.portrait}
                    alt="Jawaid Hussain Kharal"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-all duration-500 hover:scale-102"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent"></div>

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-lg border border-amber-500/30 text-[11px] font-semibold text-amber-400 flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3 h-3" />
                    Official Executive Photo
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <h3 className="text-lg font-bold text-white font-serif-display">
                      Jawaid Hussain Kharal
                    </h3>
                    <p className="text-xs text-amber-300 font-medium">
                      Assistant Manager – Garment Washing Process (GWP)
                    </p>
                  </div>
                </div>

                {/* Company Experience Quick Ticker */}
                <div className="mt-4 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-left">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                    <span className="font-semibold text-slate-300 flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-amber-400" />
                      Current Organization
                    </span>
                    <span className="text-amber-400 font-bold">2023 – Present</span>
                  </div>
                  <div className="text-sm font-bold text-white font-serif-display">
                    MG Apparel Pvt. Ltd.
                  </div>
                  <div className="text-xs text-slate-400 font-light mt-0.5">
                    Assitant Manager GWP (Washing)
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Key Performance Statistics Bar */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {portfolioData.highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-5 border border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 text-left group"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-gold-gradient font-serif-display tracking-tight group-hover:scale-105 transition-transform origin-left">
                  {item.number}
                </div>
                <div className="text-sm font-bold text-slate-100 mt-1">
                  {item.label}
                </div>
                <div className="text-xs text-slate-400 font-light mt-1 line-clamp-2">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
