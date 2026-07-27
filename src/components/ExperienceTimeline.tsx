import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Search, ChevronDown, ChevronUp, Users, Wrench, Trophy, Sparkles, Building2 } from 'lucide-react';
import { portfolioData, Experience } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'MANAGERIAL' | 'SUPERVISORY'>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>('mg-apparel');

  const filteredExperiences = portfolioData.experiences.filter((exp) => {
    const matchesSearch =
      exp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.keyTechnologies.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

    if (!matchesSearch) return false;

    if (selectedFilter === 'MANAGERIAL') {
      return exp.role.includes('Assistant Manager');
    }
    if (selectedFilter === 'SUPERVISORY') {
      return exp.role.includes('Incharge');
    }
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 lg:py-28 bg-slate-950 relative overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            20+ Years Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif-display tracking-tight">
            Professional <span className="text-gold-gradient">Experience</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Unbroken leadership track record across Pakistan's premier export apparel manufacturing giants.
          </p>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search companies, tech, roles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 text-slate-100 text-xs rounded-xl pl-10 pr-4 py-2.5 border border-slate-800 focus:outline-none focus:border-amber-500/50"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            {[
              { id: 'ALL', label: 'All Roles (6)' },
              { id: 'MANAGERIAL', label: 'Assistant Manager Roles (3)' },
              { id: 'SUPERVISORY', label: 'Incharge Roles (3)' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                  selectedFilter === filter.id
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l-2 border-slate-800/80 ml-4 lg:ml-8 space-y-8 pl-6 lg:pl-10">
          {filteredExperiences.map((exp, idx) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div key={exp.id} className="relative group">
                {/* Timeline Dot Connector */}
                <div
                  className={`absolute -left-[31px] lg:-left-[47px] top-6 w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                    exp.isCurrent
                      ? 'bg-amber-400 border-amber-300 ring-4 ring-amber-500/20 scale-110'
                      : 'bg-slate-950 border-amber-500/60 group-hover:border-amber-400 group-hover:bg-amber-500'
                  }`}
                />

                {/* Experience Card */}
                <div
                  className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                    exp.isCurrent
                      ? 'border-amber-500/40 bg-slate-900/80 shadow-xl shadow-amber-500/5'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {/* Card Header Bar */}
                  <div className="p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/40">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="text-xl sm:text-2xl font-bold text-white font-serif-display">
                          {exp.company}
                        </span>
                        {exp.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold tracking-wide uppercase">
                            Current Position
                          </span>
                        )}
                        {exp.company.includes('Denim Clothing') && (
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-bold tracking-wide uppercase">
                            13+ Years Tenure
                          </span>
                        )}
                      </div>

                      <div className="text-base font-semibold text-amber-400 flex items-center gap-2">
                        <span>{exp.role}</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-light pt-1">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-amber-400" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-amber-400" />
                          {exp.location}
                        </span>
                        {exp.teamSize && (
                          <span className="flex items-center gap-1.5">
                            <Users className="w-3.5 h-3.5 text-amber-400" />
                            {exp.teamSize}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => toggleExpand(exp.id)}
                      id={`expand-exp-btn-${exp.id}`}
                      className="self-start md:self-center flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors shrink-0"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Full Scope'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Card Description */}
                  <div className="px-6 sm:px-7 pb-4 pt-2">
                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Expandable Section */}
                  {isExpanded && (
                    <div className="px-6 sm:px-7 py-6 bg-slate-950/60 border-t border-slate-800/80 space-y-6 animate-fadeIn">
                      
                      {/* Responsibilities */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                          <Wrench className="w-4 h-4" />
                          Core Operational Responsibilities
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <div key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                              <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                          <Trophy className="w-4 h-4" />
                          Key Achievements & Milestones
                        </h4>
                        <div className="space-y-2">
                          {exp.achievements.map((ach, aIdx) => (
                            <div key={aIdx} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-200 flex items-start gap-2.5">
                              <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{ach}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Technologies & Methods */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Techniques & Tools Mastered
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.keyTechnologies.map((tech, tIdx) => (
                            <span key={tIdx} className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-900 border border-slate-800 text-slate-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
