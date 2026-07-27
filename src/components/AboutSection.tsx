import React, { useState } from 'react';
import { UserCheck, Shield, Award, CheckCircle2, Factory, Lock, Eye, EyeOff, Sparkles, Droplet, Layers, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [showPersonalDetails, setShowPersonalDetails] = useState(false);

  const pillars = [
    {
      title: "Garment Washing Operations",
      desc: "Specialized in raw denim and woven garment washing treatments, recipe balancing, liquor ratio control, and bath temperature chemistry.",
      icon: Droplet
    },
    {
      title: "Production Supervision",
      desc: "Over 20 years leading shift execution, floor coordination, machinery throughput, and line bottleneck elimination.",
      icon: Factory
    },
    {
      title: "Shade & Quality Assurance",
      desc: "Flawless shade band matching, color fastness testing, tensile/tear strength preservation, and zero-defect buyer approvals.",
      icon: Layers
    },
    {
      title: "Team Leadership & Mentorship",
      desc: "Proven track record supervising 60+ operators, shift heads, and technicians across Pakistan's leading export textile plants.",
      icon: Users
    }
  ];

  const companiesList = [
    "MG Apparel Pvt. Ltd.",
    "AGI Denim Artistic Pvt. Ltd.",
    "Denim Clothing Pvt. Ltd.",
    "Artistic Milliners Pvt. Ltd.",
    "Mister Half Pvt. Ltd.",
    "Soorty Enterprises Pvt. Ltd."
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-900/60 relative overflow-hidden border-t border-slate-800/80">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <UserCheck className="w-3.5 h-3.5" />
            Executive Leadership Profile
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif-display tracking-tight">
            About <span className="text-gold-gradient">Jawaid Hussain Kharal</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            A dedicated textile professional shaping two decades of garment washing excellence and sustainable manufacturing.
          </p>
        </div>

        {/* Bio & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Bio & Objective Card */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 border border-slate-800 space-y-6">
            <h3 className="text-2xl font-bold text-white font-serif-display flex items-center gap-3">
              <Award className="w-6 h-6 text-amber-400" />
              Career Overview & Professional Philosophy
            </h3>

            <p className="text-slate-300 text-base leading-relaxed font-light">
              {portfolioData.summary}
            </p>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-amber-500/20 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Primary Executive Objective</span>
              </div>
              <p className="text-sm text-slate-300 font-light italic leading-relaxed">
                "To continue growing within a progressive organization where I can contribute my 20+ years of industrial experience while embracing modern eco-friendly technologies, automated washing machinery, and continuous professional development."
              </p>
            </div>

            {/* Official Credentials Verification Card */}
            <div className="pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-slate-200 font-bold text-sm">
                  <Shield className="w-4 h-4 text-amber-400" />
                  <span>Official Personal Credentials & Verification</span>
                </div>
                <button
                  onClick={() => setShowPersonalDetails(!showPersonalDetails)}
                  id="toggle-personal-details-btn"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-amber-400 hover:text-white hover:border-amber-500 transition-colors"
                >
                  {showPersonalDetails ? (
                    <>
                      <EyeOff className="w-3.5 h-3.5" />
                      <span>Hide Details</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-3.5 h-3.5" />
                      <span>Verify Credentials</span>
                    </>
                  )}
                </button>
              </div>

              {showPersonalDetails ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-950/90 border border-slate-800 text-xs animate-fadeIn">
                  <div>
                    <span className="text-slate-500 block">Father's Name</span>
                    <span className="text-slate-200 font-semibold">{portfolioData.personalDetails.fatherName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Date of Birth</span>
                    <span className="text-slate-200 font-semibold">{portfolioData.personalDetails.dateOfBirth}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">CNIC No.</span>
                    <span className="text-amber-400 font-mono font-semibold">{portfolioData.personalDetails.cnic}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Marital Status</span>
                    <span className="text-slate-200 font-semibold">{portfolioData.personalDetails.maritalStatus}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Religion</span>
                    <span className="text-slate-200 font-semibold">{portfolioData.personalDetails.religion}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Nationality</span>
                    <span className="text-slate-200 font-semibold">{portfolioData.personalDetails.nationality}</span>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-slate-400 font-light italic">
                  Click 'Verify Credentials' to view official HR details (CNIC, DOB, Marital Status) extracted from official resume record.
                </p>
              )}
            </div>

          </div>

          {/* Core Pillars Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-serif-display mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Corporate Track Record Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-950 border border-slate-800 text-center space-y-6 shadow-2xl">
          <div className="text-xs font-semibold text-amber-400 tracking-widest uppercase flex items-center justify-center gap-2">
            <Factory className="w-4 h-4" />
            Corporate History Across 6 Industry Giants
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6">
            {companiesList.map((company, i) => (
              <div
                key={i}
                className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800/80 text-slate-200 font-serif-display text-sm font-semibold hover:border-amber-500/50 hover:text-amber-400 transition-colors shadow-sm"
              >
                {company}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
