import React, { useState, useEffect } from 'react';
import { Download, Mail, Phone, Menu, X, Shield, Award, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  onOpenCVModal: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCVModal, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'gwp', 'skills', 'highlights', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'GWP Operations', href: '#gwp', id: 'gwp' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Highlights', href: '#highlights', id: 'highlights' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo / Emblem */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group"
            id="nav-logo-link"
          >
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-800 p-[1px] shadow-lg shadow-amber-500/10 group-hover:shadow-amber-500/25 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <span className="font-serif-display text-lg font-bold text-amber-400 tracking-wider">
                  JK
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-display text-lg font-bold text-slate-100 group-hover:text-amber-400 transition-colors tracking-tight">
                Jawaid Hussain Kharal
              </span>
              <span className="text-[11px] font-medium text-amber-400/90 tracking-wider uppercase flex items-center gap-1">
                <Shield className="w-3 h-3 text-amber-400" />
                Textile Operations Leader
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md" id="desktop-nav">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  id={`nav-link-${link.id}`}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'text-slate-300 hover:text-amber-300 hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/Jawaid_Hussain_Kharal_CV.pdf"
              download="Jawaid_Hussain_Kharal_CV.pdf"
              id="nav-cv-btn"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 hover:border-amber-500/50 hover:text-amber-400 transition-all duration-300 shadow-sm cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>Download CV (PDF)</span>
            </a>

            <button
              onClick={onOpenContact}
              id="nav-contact-btn"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 active:scale-95 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="/Jawaid_Hussain_Kharal_CV.pdf"
              download="Jawaid_Hussain_Kharal_CV.pdf"
              id="mobile-nav-cv-btn"
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-amber-400 sm:hidden flex items-center justify-center"
              title="Download CV (PDF)"
            >
              <Download className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 py-4 px-6 shadow-2xl transition-all duration-300 animate-fadeIn" id="mobile-menu-drawer">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30 font-semibold'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-amber-400'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-800/80 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCVModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Download Official CV</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-slate-950 bg-amber-400"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Executive</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
