import React, { useState } from 'react';
import { X, Download, Printer, CheckCircle, Shield, Award, Calendar, MapPin, Mail, Phone, FileText, Sparkles } from 'lucide-react';
import jsPDF from 'jspdf';
import { portfolioData } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const generatePDF = () => {
    setDownloading(true);

    try {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pageWidth = doc.internal.pageSize.getWidth();

      // Top Navy Header Banner
      doc.setFillColor(11, 17, 32); // Dark Navy
      doc.rect(0, 0, pageWidth, 42, 'F');

      // Gold Accent Line
      doc.setFillColor(234, 179, 8); // Gold
      doc.rect(0, 42, pageWidth, 2, 'F');

      // Title & Name
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(22);
      doc.text('JAWAID HUSSAIN KHARAL', 15, 18);

      doc.setFontSize(11);
      doc.setTextColor(234, 179, 8);
      doc.text('Assistant Manager – Garment Washing Process (GWP)', 15, 26);

      doc.setFontSize(9);
      doc.setTextColor(203, 213, 225);
      doc.text('20+ Years Textile Manufacturing & Garment Washing Operations Leadership', 15, 33);

      let yPos = 52;

      // Contact Info Strip
      doc.setFillColor(248, 250, 252);
      doc.rect(12, yPos, pageWidth - 24, 16, 'F');
      doc.setDrawColor(226, 232, 240);
      doc.rect(12, yPos, pageWidth - 24, 16, 'S');

      doc.setFontSize(8);
      doc.setTextColor(51, 65, 85);
      doc.setFont('helvetica', 'bold');
      doc.text(`Phone: ${portfolioData.contacts.phoneNumbers.join(', ')}`, 16, yPos + 6);
      doc.text(`Email: ${portfolioData.contacts.email}`, 16, yPos + 11);
      doc.text(`Location: Karachi, Pakistan | House No. 782, Sector 32/E, Korangi`, 110, yPos + 6);

      yPos += 22;

      // Section: Professional Objective
      doc.setFontSize(11);
      doc.setTextColor(15, 23, 42);
      doc.setFont('helvetica', 'bold');
      doc.text('EXECUTIVE PROFILE & OBJECTIVE', 15, yPos);
      doc.setLineWidth(0.5);
      doc.setDrawColor(234, 179, 8);
      doc.line(15, yPos + 2, pageWidth - 15, yPos + 2);

      yPos += 8;
      doc.setFontSize(8.5);
      doc.setTextColor(71, 85, 105);
      doc.setFont('helvetica', 'normal');
      const objLines = doc.splitTextToSize(portfolioData.summary, pageWidth - 30);
      doc.text(objLines, 15, yPos);
      yPos += objLines.length * 4 + 6;

      // Section: Personal Details
      doc.setFontSize(11);
      doc.setTextColor(15, 23, 42);
      doc.setFont('helvetica', 'bold');
      doc.text('PERSONAL INFORMATION', 15, yPos);
      doc.line(15, yPos + 2, pageWidth - 15, yPos + 2);

      yPos += 7;
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);
      doc.text(`Father Name: ${portfolioData.personalDetails.fatherName}   |   DOB: ${portfolioData.personalDetails.dateOfBirth}   |   CNIC: ${portfolioData.personalDetails.cnic}`, 15, yPos);
      yPos += 5;
      doc.text(`Marital Status: ${portfolioData.personalDetails.maritalStatus}   |   Religion: ${portfolioData.personalDetails.religion}   |   Nationality: ${portfolioData.personalDetails.nationality}`, 15, yPos);

      yPos += 10;

      // Section: Professional Experience
      doc.setFontSize(11);
      doc.setTextColor(15, 23, 42);
      doc.setFont('helvetica', 'bold');
      doc.text('PROFESSIONAL EXPERIENCE (20+ YEARS)', 15, yPos);
      doc.line(15, yPos + 2, pageWidth - 15, yPos + 2);

      yPos += 8;

      portfolioData.experiences.forEach((exp) => {
        if (yPos > 260) {
          doc.addPage();
          yPos = 20;
        }

        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(15, 23, 42);
        doc.text(exp.company, 15, yPos);

        doc.setFontSize(9);
        doc.setTextColor(202, 138, 4); // Dark Gold
        doc.text(exp.period, pageWidth - 15, yPos, { align: 'right' });

        yPos += 4.5;
        doc.setFontSize(8.5);
        doc.setTextColor(71, 85, 105);
        doc.setFont('helvetica', 'bold');
        doc.text(`Designation: ${exp.role}`, 15, yPos);

        yPos += 4.5;
        doc.setFont('helvetica', 'normal');
        const descLines = doc.splitTextToSize(exp.description, pageWidth - 30);
        doc.text(descLines, 15, yPos);

        yPos += descLines.length * 3.8 + 4;
      });

      // Section: Education
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }

      doc.setFontSize(11);
      doc.setTextColor(15, 23, 42);
      doc.setFont('helvetica', 'bold');
      doc.text('QUALIFICATION & EDUCATION', 15, yPos);
      doc.line(15, yPos + 2, pageWidth - 15, yPos + 2);

      yPos += 7;
      doc.setFontSize(9);
      doc.setTextColor(51, 65, 85);
      doc.text('Matriculation from Govt. High School Khanewal', 15, yPos);

      // Save PDF
      doc.save('Jawaid_Hussain_Kharal_Executive_Textile_CV.pdf');
    } catch (err) {
      console.error('PDF Generation error:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn" id="cv-modal-overlay">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Modal Top Header Bar */}
        <div className="p-5 px-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-serif-display">
                Official Executive Resume Document
              </h3>
              <p className="text-xs text-amber-400 font-medium">
                Jawaid Hussain Kharal | Assistant Manager GWP
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Jawaid_Hussain_Kharal_CV.pdf"
              download="Jawaid_Hussain_Kharal_CV.pdf"
              id="cv-modal-download-btn"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-colors shadow-md cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Original PDF CV</span>
            </a>

            <button
              onClick={() => window.print()}
              id="cv-modal-print-btn"
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-700 text-slate-200 hover:text-white cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              id="cv-modal-close-btn"
              className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Preview Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-200 text-xs sm:text-sm bg-slate-950/90 font-sans">
          
          {/* Document Title Header */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1">
              <h1 className="text-2xl font-extrabold text-white font-serif-display tracking-wide">
                JAWAID HUSSAIN KHARAL
              </h1>
              <p className="text-amber-400 text-xs font-semibold">
                Assistant Manager – Garment Washing Process (GWP)
              </p>
            </div>
            <div className="text-right text-xs text-slate-400 space-y-1">
              <div>Phone: {portfolioData.contacts.phoneNumbers.join(', ')}</div>
              <div>Email: {portfolioData.contacts.email}</div>
              <div>Karachi, Pakistan</div>
            </div>
          </div>

          {/* Section: Executive Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-amber-400 uppercase tracking-widest border-b border-amber-500/30 pb-1">
              Professional Objective & Summary
            </h2>
            <p className="text-slate-300 font-light leading-relaxed">
              {portfolioData.summary}
            </p>
          </div>

          {/* Section: Personal Information */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-amber-400 uppercase tracking-widest border-b border-amber-500/30 pb-1">
              Personal Information
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs">
              <div><span className="text-slate-500">Father Name:</span> <span className="font-semibold text-slate-200">{portfolioData.personalDetails.fatherName}</span></div>
              <div><span className="text-slate-500">Date of Birth:</span> <span className="font-semibold text-slate-200">{portfolioData.personalDetails.dateOfBirth}</span></div>
              <div><span className="text-slate-500">CNIC No:</span> <span className="font-semibold text-amber-400 font-mono">{portfolioData.personalDetails.cnic}</span></div>
              <div><span className="text-slate-500">Marital Status:</span> <span className="font-semibold text-slate-200">{portfolioData.personalDetails.maritalStatus}</span></div>
              <div><span className="text-slate-500">Religion:</span> <span className="font-semibold text-slate-200">{portfolioData.personalDetails.religion}</span></div>
              <div><span className="text-slate-500">Nationality:</span> <span className="font-semibold text-slate-200">{portfolioData.personalDetails.nationality}</span></div>
            </div>
          </div>

          {/* Section: Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-amber-400 uppercase tracking-widest border-b border-amber-500/30 pb-1">
              Work Experience (20+ Years)
            </h2>

            <div className="space-y-4">
              {portfolioData.experiences.map((exp, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-white text-sm font-serif-display">{exp.company}</h3>
                      <p className="text-amber-400 text-xs font-medium">{exp.role}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono">{exp.period}</span>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-amber-400 uppercase tracking-widest border-b border-amber-500/30 pb-1">
              Educational Qualification
            </h2>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-medium">
              Matriculation — Government High School Khanewal
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
