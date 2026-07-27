import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 bg-slate-950 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic & Technical Background
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif-display tracking-tight">
            Education & <span className="text-gold-gradient">Qualifications</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Foundational schooling coupled with over two decades of specialized on-job industrial technical development.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {portfolioData.education.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-8 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  {idx === 0 ? <GraduationCap className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-serif-display group-hover:text-amber-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-amber-400 mt-1">
                    {edu.institution}
                  </div>
                </div>

                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {edu.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified Qualification Record</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
