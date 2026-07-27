import React from 'react';
import { Award, ShieldCheck, Building2, Shirt, CheckCircle, Sparkles, TrendingUp, Cpu, Leaf, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const CareerHighlights: React.FC = () => {
  const highlightsList = [
    {
      title: "20+ Years Unbroken Industrial Experience",
      metric: "20+ Yrs",
      desc: "Continuous hands-on expertise in garment washing operations, shift management, chemical formulation, and quality assurance.",
      icon: Award
    },
    {
      title: "6 Leading Textile Manufacturers",
      metric: "6 Companies",
      desc: "Served at premier Pakistani textile export giants: MG Apparel, AGI Denim, Denim Clothing, Artistic Milliners, Mister Half, and Soorty Enterprises.",
      icon: Building2
    },
    {
      title: "13+ Years Loyalty at Denim Clothing Pvt Ltd",
      metric: "13+ Yrs Tenure",
      desc: "Over a decade of continuous leadership stability, building plant washing capacity and managing export quality.",
      icon: ShieldCheck
    },
    {
      title: "50+ Million Garments Processed",
      metric: "50M+ Units",
      desc: "Supervised high-capacity washing lines for international denim brands, maintaining strict shade matching and customer specs.",
      icon: Shirt
    }
  ];

  const achievementPillars = [
    {
      title: "First-Pass Quality Inspection Rate",
      stat: "99.8%",
      desc: "Consistently achieved top-tier approval ratings on bulk washing inspections across international buyer light box audits.",
      icon: CheckCircle
    },
    {
      title: "Water & Chemical Conservation",
      stat: "Up to 60%",
      desc: "Spearheaded low-liquor ratio washing and ozone gas bleaching integration to minimize environmental footprint.",
      icon: Leaf
    },
    {
      title: "Shift Floor Efficiency",
      stat: "100%",
      desc: "Zero major shipment delays recorded over two decades through rigorous preventive maintenance and bottleneck management.",
      icon: TrendingUp
    },
    {
      title: "Cross-Functional Workforce Led",
      stat: "60+ Staff",
      desc: "Mentored shift supervisors, machine operators, chemical dosage technicians, and quality auditors.",
      icon: Users
    }
  ];

  return (
    <section id="highlights" className="py-20 lg:py-28 bg-slate-900/60 relative overflow-hidden border-t border-slate-800">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Executive Impact & Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif-display tracking-tight">
            Career <span className="text-gold-gradient">Highlights & Metrics</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Tangible operational outcomes delivered over 20+ years of industrial leadership.
          </p>
        </div>

        {/* Top 4 Key Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlightsList.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-3xl p-7 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-extrabold text-gold-gradient font-serif-display mb-2">
                    {item.metric}
                  </div>
                  <h3 className="text-base font-bold text-white font-serif-display mb-2">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed pt-2 border-t border-slate-800/80">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Achievement Pillars Grid */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800">
          <h3 className="text-2xl font-bold text-white font-serif-display mb-8 text-center flex items-center justify-center gap-2">
            <Award className="w-6 h-6 text-amber-400" />
            Operational Impact Benchmarks
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievementPillars.map((pillar, pIdx) => {
              const IconComp = pillar.icon;
              return (
                <div key={pIdx} className="space-y-3 text-center sm:text-left">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 flex items-center justify-center mx-auto sm:mx-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-extrabold text-amber-400 font-serif-display">
                    {pillar.stat}
                  </div>
                  <h4 className="text-sm font-bold text-slate-100">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
