import React, { useState } from 'react';
import { Layers, Droplets, Zap, Wind, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Settings, Sliders } from 'lucide-react';
import { portfolioData, GwpStep } from '../data/portfolioData';

export const GwpProcessVisualizer: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep: GwpStep = portfolioData.gwpSteps[activeStepIndex];

  return (
    <section id="gwp" className="py-20 lg:py-28 bg-slate-900/80 relative overflow-hidden border-t border-slate-800">
      {/* Glow Effects */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5" />
            Technical Process Mastery
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif-display tracking-tight">
            Garment Washing Process <span className="text-gold-gradient">(GWP)</span> Flow
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Detailed breakdown of Jawaid's 20-year mastery across all stages of industrial denim & apparel washing.
          </p>
        </div>

        {/* Horizontal Step Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {portfolioData.gwpSteps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStepIndex(idx)}
                id={`gwp-step-btn-${step.stepNumber}`}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'bg-amber-500/10 border-amber-400 text-white shadow-lg shadow-amber-500/10'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${isActive ? 'bg-amber-400 text-slate-950' : 'bg-slate-900 text-slate-400'}`}>
                    0{step.stepNumber}
                  </span>
                  {isActive && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
                </div>
                <div className="text-xs font-bold line-clamp-2">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep Dive Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
          
          {/* Step Details Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider">
                Step 0{activeStep.stepNumber} of 06
              </span>
              <span className="text-xs text-amber-400/90 font-semibold tracking-wide uppercase">
                Standard GWP Operational Procedure
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif-display">
              {activeStep.title}
            </h3>

            <p className="text-base text-slate-300 font-light leading-relaxed">
              {activeStep.fullDesc}
            </p>

            {/* Techniques Grid */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sliders className="w-4 h-4" />
                Key Techniques & Formulations
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeStep.techniques.map((tech, tIdx) => (
                  <span key={tIdx} className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Machinery Used */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Settings className="w-4 h-4" />
                Industrial Machinery Executed
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeStep.machinery.map((mac, mIdx) => (
                  <span key={mIdx} className="px-3 py-1.5 rounded-xl bg-slate-950 border border-amber-500/30 text-xs text-amber-300 font-mono">
                    {mac}
                  </span>
                ))}
              </div>
            </div>

            {/* QA Parameter */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-white block">Quality Assurance Benchmark</span>
                <span className="text-xs text-slate-300 font-light">{activeStep.qualityAssurance}</span>
              </div>
            </div>

          </div>

          {/* Right Technical Parameters Panel */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-xl space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
                  <Sliders className="w-4 h-4" />
                  GWP Stage 0{activeStep.stepNumber} Operational Specs
                </span>
                <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-semibold">
                  Standardized Recipe
                </span>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white font-serif-display">
                  Industrial Machinery & Systems
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeStep.machinery.map((machine, mIdx) => (
                    <div key={mIdx} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium flex items-center gap-1.5">
                      <Settings className="w-3.5 h-3.5 text-amber-400" />
                      <span>{machine}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-bold text-white font-serif-display">
                  Core Chemical & Engineering Techniques
                </h4>
                <ul className="space-y-2">
                  {activeStep.techniques.map((tech, tIdx) => (
                    <li key={tIdx} className="text-xs text-slate-300 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-500/20 space-y-1 text-left">
              <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                GWP Stage Outcome Summary
              </div>
              <div className="text-xs text-slate-200 font-medium">
                {activeStep.shortDesc}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
