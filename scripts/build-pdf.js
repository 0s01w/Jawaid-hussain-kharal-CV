import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generatePDF() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 size in points
  const { width, height } = page.getSize();

  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Top header background banner
  page.drawRectangle({
    x: 0,
    y: height - 100,
    width: width,
    height: 100,
    color: rgb(0.1, 0.15, 0.25),
  });

  // Top accent bar
  page.drawRectangle({
    x: 0,
    y: height - 104,
    width: width,
    height: 4,
    color: rgb(0.85, 0.65, 0.15),
  });

  // Title in Banner
  page.drawText('CURRICULUM VITAE', {
    x: 35,
    y: height - 40,
    size: 24,
    font: helveticaBold,
    color: rgb(1, 1, 1),
  });

  page.drawText('JAWAID HUSSAIN KHARAL', {
    x: 35,
    y: height - 68,
    size: 18,
    font: helveticaBold,
    color: rgb(0.9, 0.75, 0.25),
  });

  let y = height - 125;

  // Contact Info
  page.drawText('Contact #: 0307-3635580, 0313-2407577', {
    x: 35,
    y,
    size: 10,
    font: helveticaBold,
    color: rgb(0.2, 0.2, 0.2),
  });
  y -= 15;

  page.drawText('Email: j358681@gmail.com', {
    x: 35,
    y,
    size: 10,
    font: helveticaBold,
    color: rgb(0.2, 0.2, 0.2),
  });
  y -= 15;

  page.drawText('Address: House No. 782, Sector 32/E Nasir Colony, Korangi, Karachi.', {
    x: 35,
    y,
    size: 10,
    font: helvetica,
    color: rgb(0.2, 0.2, 0.2),
  });
  y -= 25;

  // Helper for Section Header
  const drawSectionHeader = (title) => {
    page.drawRectangle({
      x: 35,
      y: y - 4,
      width: width - 70,
      height: 20,
      color: rgb(0.12, 0.2, 0.38),
    });
    page.drawText(title, {
      x: 42,
      y: y,
      size: 11,
      font: helveticaBold,
      color: rgb(1, 1, 1),
    });
    y -= 28;
  };

  // OBJECTIVE
  drawSectionHeader('OBJECTIVE');
  const objText = 'To build a long term career with opportunities for career growth, keep up with edge of technologies and use my skills in the best possible way for achieving the Company\'s goal and solve problems in an position and seeking a responsible job with an opportunity for professional challenges.';
  
  // Wrap objective text manually
  const words = objText.split(' ');
  let line = '';
  for (const word of words) {
    if ((line + word).length > 85) {
      page.drawText(line, { x: 35, y, size: 9.5, font: helvetica, color: rgb(0.25, 0.25, 0.25) });
      y -= 14;
      line = word + ' ';
    } else {
      line += word + ' ';
    }
  }
  if (line) {
    page.drawText(line, { x: 35, y, size: 9.5, font: helvetica, color: rgb(0.25, 0.25, 0.25) });
    y -= 20;
  }

  // PERSONAL INFORMATION
  drawSectionHeader('PERSONAL INFORMATION');
  const personalDetails = [
    ['Father Name', ': Muhammad Nawaz'],
    ['Date of Birth', ': 15-04-1979'],
    ['CNIC No.', ': 36103-1663822-9'],
    ['Marital Status', ': Married'],
    ['Religion', ': Islam'],
    ['Nationality', ': Pakistani'],
  ];

  for (const [label, val] of personalDetails) {
    page.drawText(label, { x: 45, y, size: 9.5, font: helveticaBold, color: rgb(0.2, 0.2, 0.2) });
    page.drawText(val, { x: 140, y, size: 9.5, font: helvetica, color: rgb(0.2, 0.2, 0.2) });
    y -= 15;
  }
  y -= 10;

  // QUALIFICATION
  drawSectionHeader('QUALIFICATION');
  page.drawText('Matriculation from Govt. High School Khanewal.', {
    x: 45,
    y,
    size: 10,
    font: helveticaBold,
    color: rgb(0.2, 0.2, 0.2),
  });
  y -= 25;

  // EXPERIENCE
  drawSectionHeader('EXPERIENCE');

  const experiences = [
    {
      company: 'MG Apparel PVT LTD.',
      period: 'Apr 2023 to Continue',
      designation: 'Designation: Asst. Manager GWP (Washing)',
    },
    {
      company: 'AGI Denim Artistic PV LTD.',
      period: 'July 2022 to March 2023',
      designation: 'Designation: Asst. Manager GWP (Washing)',
    },
    {
      company: 'DENIM CLOTHING PVT LTD.',
      period: '2009 to May 2022',
      designation: 'Designation: Asst. Manager GWP (Washing)',
    },
    {
      company: 'ARTISTIC MILLINERS PVT LTD.',
      period: '2007 to 2009',
      designation: 'Designation: Incharge GWP (Washing)',
    },
    {
      company: 'MISTER HALF PVT LTD. (LAHORE)',
      period: '2006 to 2007',
      designation: 'Designation: Incharge GWP (Washing)',
    },
    {
      company: 'SOORTY ENTERPRISES PVT LTD.',
      period: '2001 to 2006',
      designation: 'Designation: Incharge GWP (Washing)',
    },
  ];

  for (const exp of experiences) {
    page.drawText('• ' + exp.company, { x: 40, y, size: 10, font: helveticaBold, color: rgb(0.1, 0.1, 0.1) });
    y -= 13;
    page.drawText(exp.period, { x: 55, y, size: 9, font: helvetica, color: rgb(0.4, 0.4, 0.4) });
    y -= 12;
    page.drawText(exp.designation, { x: 55, y, size: 9, font: helveticaBold, color: rgb(0.2, 0.4, 0.7) });
    y -= 18;
  }

  // Ensure public directory exists
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const pdfBytes = await pdfDoc.save();
  const filePath = path.join(publicDir, 'Jawaid_Hussain_Kharal_CV.pdf');
  fs.writeFileSync(filePath, pdfBytes);
  console.log('PDF generated successfully at:', filePath);
}

generatePDF().catch(console.error);
