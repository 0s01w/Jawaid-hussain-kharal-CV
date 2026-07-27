import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Copy, Check, Sparkles, Building2, User, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [inquiryType, setInquiryType] = useState('Executive Offer');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#eab308', '#fef08a', '#38bdf8', '#ffffff']
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-900/80 relative overflow-hidden border-t border-slate-800">
      {/* Glow Effects */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif-display tracking-tight">
            Contact <span className="text-gold-gradient">Jawaid Hussain Kharal</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Available for executive textile management opportunities, factory operational audits, and technical leadership consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Numbers Card */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Direct Phone Lines</h3>
                  <p className="text-xs text-slate-400 font-light">Karachi, Pakistan (GMT+5)</p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                {portfolioData.contacts.phoneNumbers.map((phone, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                    <span className="font-mono font-bold text-amber-400">{phone}</span>
                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                        className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-400 hover:text-slate-950 font-semibold transition-colors"
                      >
                        Call
                      </a>
                      <button
                        onClick={() => handleCopy(phone, `phone-${idx}`)}
                        className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white"
                        title="Copy phone"
                      >
                        {copiedText === `phone-${idx}` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Email Card */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Official Email Address</h3>
                  <p className="text-xs text-slate-400 font-light">Fast response for executive inquiries</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                <span className="font-mono font-bold text-slate-100">{portfolioData.contacts.email}</span>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${portfolioData.contacts.email}`}
                    className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-400 hover:text-slate-950 font-semibold transition-colors"
                  >
                    Email
                  </a>
                  <button
                    onClick={() => handleCopy(portfolioData.contacts.email, 'email')}
                    className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white"
                    title="Copy Email"
                  >
                    {copiedText === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Residential & Mail Location</h3>
                  <p className="text-xs text-amber-400 font-semibold">Karachi, Pakistan</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 font-light leading-relaxed p-3 rounded-xl bg-slate-950 border border-slate-800">
                {portfolioData.contacts.address.full}
              </p>
            </div>

          </div>

          {/* Right Column: Executive Interactive Inquiry Form */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 border border-slate-800">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-serif-display">
                  Inquiry Received
                </h3>
                <p className="text-sm text-slate-300 font-light max-w-md mx-auto">
                  Thank you for reaching out. Jawaid Hussain Kharal will review your message regarding <span className="text-amber-400 font-semibold">{inquiryType}</span> promptly.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-amber-400 hover:text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white font-serif-display flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-amber-400" />
                    Send Direct Message
                  </h3>
                  <span className="text-xs text-slate-400">Response within 24 hours</span>
                </div>

                {/* Inquiry Type Buttons */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Inquiry Classification</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['Executive Offer', 'Factory Audit', 'Consultancy', 'General'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setInquiryType(type)}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                          inquiryType === type
                            ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold'
                            : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Your Full Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Director HR"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-950 text-slate-100 text-xs rounded-xl pl-9 pr-3 py-3 border border-slate-800 focus:outline-none focus:border-amber-500/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Company / Organization</label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="e.g. Textile Mills Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-slate-950 text-slate-100 text-xs rounded-xl pl-9 pr-3 py-3 border border-slate-800 focus:outline-none focus:border-amber-500/50"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Email Address *</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-950 text-slate-100 text-xs rounded-xl pl-9 pr-3 py-3 border border-slate-800 focus:outline-none focus:border-amber-500/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Phone Number</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        placeholder="+92 300 0000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-950 text-slate-100 text-xs rounded-xl pl-9 pr-3 py-3 border border-slate-800 focus:outline-none focus:border-amber-500/50"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">Message / Opportunity Details *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details about the role, plant requirements, or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 text-slate-100 text-xs rounded-xl p-3 border border-slate-800 focus:outline-none focus:border-amber-500/50"
                  />
                </div>

                <button
                  type="submit"
                  id="submit-contact-form-btn"
                  className="w-full py-3.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 transition-all duration-300 shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry to Executive</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
