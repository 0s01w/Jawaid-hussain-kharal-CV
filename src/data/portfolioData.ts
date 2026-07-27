export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  startYear: number;
  endYear: number | 'Present';
  isCurrent?: boolean;
  location: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  keyTechnologies: string[];
  teamSize?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; experience: string; description: string }[];
}

export interface PersonalDetails {
  fatherName: string;
  dateOfBirth: string;
  cnic: string;
  maritalStatus: string;
  religion: string;
  nationality: string;
}

export interface GwpStep {
  stepNumber: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  techniques: string[];
  machinery: string[];
  qualityAssurance: string;
  iconName: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  headline: string;
  summary: string;
  contacts: {
    phoneNumbers: string[];
    email: string;
    address: {
      house: string;
      sector: string;
      colony: string;
      area: string;
      city: string;
      country: string;
      full: string;
    };
  };
  personalDetails: PersonalDetails;
  experiences: Experience[];
  skills: SkillCategory[];
  highlights: {
    number: string;
    label: string;
    description: string;
    icon: string;
  }[];
  education: {
    degree: string;
    institution: string;
    year?: string;
    description: string;
  }[];
  gwpSteps: GwpStep[];
  images: {
    portrait: string;
    cvPdf: string;
  };
}

export const portfolioData: PortfolioData = {
  name: "Jawaid Hussain Kharal",
  title: "Assistant Manager – Garment Washing Process (GWP)",
  headline: "Experienced Textile & Garment Washing Professional with more than 20 years of expertise in garment washing operations, production management, quality control, and team leadership within Pakistan's leading textile manufacturing companies.",
  summary: "I am a dedicated and results-driven textile professional with extensive experience in garment washing, production supervision, and operational management. Throughout my career, I have successfully worked with some of Pakistan's leading textile manufacturers, contributing to efficient production processes, maintaining quality standards, and leading teams with professionalism. My objective is to continue growing within a progressive organization where I can contribute my experience while embracing modern technologies and continuous professional development.",
  contacts: {
    phoneNumbers: ["0307-3635580", "0313-2407577"],
    email: "j358681@gmail.com",
    address: {
      house: "House No. 782",
      sector: "Sector 32/E",
      colony: "Nasir Colony",
      area: "Korangi",
      city: "Karachi",
      country: "Pakistan",
      full: "House No. 782, Sector 32/E, Nasir Colony, Korangi, Karachi, Pakistan"
    }
  },
  personalDetails: {
    fatherName: "Muhammad Nawaz",
    dateOfBirth: "15-04-1979",
    cnic: "36103-1663822-9",
    maritalStatus: "Married",
    religion: "Islam",
    nationality: "Pakistani"
  },
  images: {
    portrait: "https://cdn.corenexis.com/f/l5psLjUvLUP.jpeg",
    cvPdf: "/Jawaid_Hussain_Kharal_CV.pdf"
  },
  experiences: [
    {
      id: "mg-apparel",
      company: "MG Apparel Pvt. Ltd.",
      role: "Assistant Manager – GWP (Washing)",
      period: "April 2023 – Present",
      startYear: 2023,
      endYear: "Present",
      isCurrent: true,
      location: "Pakistan",
      description: "Currently responsible for supervising garment washing operations, maintaining production quality, coordinating teams, and ensuring smooth workflow across high-capacity denim and casual wear washing lines.",
      responsibilities: [
        "Direct supervision of end-to-end Garment Washing Process (GWP) floor operations.",
        "Ensuring strict compliance with client shade bands, color consistency, and fabric strength standards.",
        "Optimizing chemical recipes and eco-friendly wash techniques (Ozone, Laser, Enzyme washing).",
        "Coordinating cross-functional production teams, shift supervisors, and quality auditors.",
        "Driving daily output targets while maintaining zero-defect quality parameters."
      ],
      achievements: [
        "Maintained 99.8% first-pass quality inspection approval on high-volume export orders.",
        "Implemented streamlined wash recipe standardization reducing batch processing re-wash rates.",
        "Led sustainable washing initiatives reducing water and chemical consumption per garment."
      ],
      keyTechnologies: ["Eco-Washing", "Ozone Depilling", "Laser Finishing", "Shade Band Control", "Chemical Dosage Optimization"],
      teamSize: "40+ Floor Staff & Technicians"
    },
    {
      id: "agi-denim",
      company: "AGI Denim Artistic Pvt. Ltd.",
      role: "Assistant Manager – GWP (Washing)",
      period: "July 2022 – March 2023",
      startYear: 2022,
      endYear: 2023,
      location: "Karachi, Pakistan",
      description: "Managed garment washing production processes while maintaining high efficiency, stringent quality standards, and strict shipment targets.",
      responsibilities: [
        "Managed daily shift execution for heavy denim wash treatments and special wash effects.",
        "Overwatched recipe formulation for stone wash, enzyme desizing, tinting, and bleach cycles.",
        "Collaborated with sample development teams to translate customer wash targets into bulk production recipes.",
        "Enforced chemical safety, machine maintenance schedules, and worker health & safety protocols."
      ],
      achievements: [
        "Reduced sample-to-bulk approval cycle time through precise shade matching protocols.",
        "Achieved 100% on-time shipment compliance during peak seasonal production demand."
      ],
      keyTechnologies: ["Denim Wash Recipe Dev", "Bleach & Neutralization", "Stone Wash", "Enzyme Bio-Polishing"],
      teamSize: "35+ Technicians & Washing Operators"
    },
    {
      id: "denim-clothing",
      company: "Denim Clothing Pvt. Ltd.",
      role: "Assistant Manager – GWP (Washing)",
      period: "2009 – May 2022",
      startYear: 2009,
      endYear: 2022,
      location: "Karachi, Pakistan",
      description: "Served for over a decade (13+ years) leading garment washing operations, production planning, process engineering, and quality assurance in major export-oriented denim manufacturing.",
      responsibilities: [
        "Overawes decade-long expansion of washing plant capacities and high-tier export customer requirements.",
        "Supervised industrial washing extractors, hydro-extractors, belly washers, and tumble dryers.",
        "Spearheaded raw fabric inspection, shrinkage testing, tear strength analysis, and washing shade groupings.",
        "Mentored and trained shift supervisors, wash technicians, and recipe specialists over 13 years."
      ],
      achievements: [
        "Recognized for 13 years of continuous operational excellence and zero major shipment delays.",
        "Engineered innovative wash treatments including 3D whiskers, hand scraping, resin coating, and PP spraying.",
        "Pioneered water recycle integration and chemical cost reduction programs across wash lines."
      ],
      keyTechnologies: ["Industrial Extractor Operation", "Resin Dip Curing", "Hand Scraping & Whiskering", "PP Spraying", "Shade Grouping"],
      teamSize: "60+ Plant Workers & Technicians"
    },
    {
      id: "artistic-milliners",
      company: "Artistic Milliners Pvt. Ltd.",
      role: "Incharge – GWP (Washing)",
      period: "2007 – 2009",
      startYear: 2007,
      endYear: 2009,
      location: "Karachi, Pakistan",
      description: "Supervised washing department operations and coordinated production activities at one of global denim's premier textile manufacturers.",
      responsibilities: [
        "Coordinated daily washing floor schedules according to cutting and sewing output flow.",
        "Monitored chemical inventory, liquor ratios, temperature controls, and pH levels during wash cycles.",
        "Executed shade band matching against buyer master samples for international brands."
      ],
      achievements: [
        "Upgraded floor workflow efficiency by eliminating bottleneck delays between hydro-extraction and drying.",
        "Maintained high quality compliance with rigorous international buyer audits."
      ],
      keyTechnologies: ["Washing Operations Control", "Liquor Ratio Control", "Enzyme Wash", "Master Sample Matching"],
      teamSize: "25+ Operators"
    },
    {
      id: "mister-half",
      company: "Mister Half Pvt. Ltd. (Lahore)",
      role: "Incharge – GWP (Washing)",
      period: "2006 – 2007",
      startYear: 2006,
      endYear: 2007,
      location: "Lahore, Pakistan",
      description: "Managed daily garment washing operations while maintaining high production efficiency in Lahore's vibrant garment sector.",
      responsibilities: [
        "Managed daily shift execution, chemical bath preparation, and machine loading capacities.",
        "Conducted quality checks post-washing to identify and resolve uneven shade variances."
      ],
      achievements: [
        "Successfully streamlined washing operations for local and export apparel collections."
      ],
      keyTechnologies: ["Batch Washing Control", "Desizing", "Softener Application"],
      teamSize: "20+ Operators"
    },
    {
      id: "soorty-enterprises",
      company: "Soorty Enterprises Pvt. Ltd.",
      role: "Incharge – GWP (Washing)",
      period: "2001 – 2006",
      startYear: 2001,
      endYear: 2006,
      location: "Karachi, Pakistan",
      description: "Foundational 5-year tenure starting professional career in garment washing management and gaining strong industrial experience in textile manufacturing.",
      responsibilities: [
        "Pioneered foundational washing techniques for denim, twill, and woven garments.",
        "Supervised manual and semi-automated washing machinery, hydro-extractors, and dryers.",
        "Built fundamental mastery in dye characteristics, fabric contraction, and chemical interactions."
      ],
      achievements: [
        "Promoted from initial floor technician roles to Department Incharge due to leadership and technical skill.",
        "Established strong foundational operational discipline lasting a 20+ year distinguished career."
      ],
      keyTechnologies: ["Garment Washing Fundamentals", "Chemical Bath Mixes", "Floor Supervision"],
      teamSize: "15+ Floor Workers"
    }
  ],
  skills: [
    {
      category: "GWP & Technical Washing Mastery",
      skills: [
        { name: "Garment Washing Operations", level: 100, experience: "20+ Years", description: "Comprehensive mastery of industrial washing cycles, chemical bath physics, fabric reaction, and finishing." },
        { name: "Eco-Washing & Sustainable Tech", level: 95, experience: "8+ Years", description: "Expert in low liquor ratio washing, Ozone bleaching, laser technology, and water savings." },
        { name: "Shade Matching & Shade Grouping", level: 98, experience: "20+ Years", description: "Precision color spectrum matching against buyer light boxes (D65, CWF, TL84) and master swatches." },
        { name: "Wash Recipe Formulation", level: 96, experience: "18+ Years", description: "Custom chemical recipe creation for Enzyme, Stone, Bleach, Tint, Resin, and Vintage effects." },
        { name: "Quality Assurance & Fabric Testing", level: 98, experience: "20+ Years", description: "Tear strength, tensile, shrinkage, crocking, and fiber integrity testing post-washing." }
      ]
    },
    {
      category: "Production & Operational Leadership",
      skills: [
        { name: "Textile Production Management", level: 98, experience: "20+ Years", description: "End-to-end plant throughput planning, line loading, machine balance, and output forecasting." },
        { name: "Production Planning & Scheduling", level: 96, experience: "18+ Years", description: "Capacity planning, shift balancing, bottleneck removal, and customer delivery alignment." },
        { name: "Team Leadership & Floor Supervision", level: 98, experience: "20+ Years", description: "Leading teams of 60+ operators, shift supervisors, and technical staff with empathy and rigor." },
        { name: "Factory Operations & Safety", level: 95, experience: "20+ Years", description: "EHS compliance, chemical hazard handling, machine preventive maintenance, and floor ergonomics." },
        { name: "Process Improvement & Cost Control", level: 95, experience: "15+ Years", description: "Waste minimization, chemical consumption optimization, and cycle time reduction." }
      ]
    },
    {
      category: "Management & Problem Solving",
      skills: [
        { name: "Workflow Coordination", level: 96, experience: "20+ Years", description: "Seamless coordination between sewing lines, washing floor, finishing, and packing departments." },
        { name: "Troubleshooting & Root Cause Analysis", level: 98, experience: "20+ Years", description: "Rapid identification and corrective action for wash defects, streaking, yellowing, or uneven abrasion." },
        { name: "Time Management & Target Compliance", level: 96, experience: "20+ Years", description: "Consistent hit rate on daily production targets under high volume pressure." }
      ]
    }
  ],
  highlights: [
    {
      number: "20+",
      label: "Years of Industry Experience",
      description: "Two decades of unbroken excellence in industrial textile & garment washing management.",
      icon: "Award"
    },
    {
      number: "6",
      label: "Leading Textile Giants",
      description: "Proven track record at Pakistan's premier export apparel corporations (MG Apparel, AGI Denim, Denim Clothing, Artistic Milliners, Mister Half, Soorty).",
      icon: "Building2"
    },
    {
      number: "13+",
      label: "Years at Denim Clothing Pvt Ltd",
      description: "Demonstrated loyalty, leadership stability, and sustained performance over a decade.",
      icon: "ShieldCheck"
    },
    {
      number: "50M+",
      label: "Garments Processed",
      description: "Over 50 million denim and casual garments successfully washed and exported worldwide.",
      icon: "Shirt"
    }
  ],
  education: [
    {
      degree: "Matriculation",
      institution: "Government High School Khanewal",
      description: "Secondary school education with strong foundational academic credentials before entering specialized industrial textile training."
    },
    {
      degree: "Senior GWP & Chemical Safety Certifications",
      institution: "Industrial In-House & Supplier Technical Programs",
      description: "Continuous specialized training in industrial washing machinery, enzyme formulation, eco-friendly washing standards, and factory floor safety protocols."
    }
  ],
  gwpSteps: [
    {
      stepNumber: 1,
      title: "Desizing & Pre-Treatment",
      shortDesc: "Removal of warp sizing starches and preparing fabric fibers for uniform washing chemical penetration.",
      fullDesc: "Initial washing bath with specialized alpha-amylase enzymes to dissolve sizing agents applied during weaving. Ensures uniform wettability and prevents streaking during subsequent dye abrasion.",
      techniques: ["Enzyme Desizing", "Temperature Controlled Baths", "Wettability Optimization"],
      machinery: ["Industrial Belly Washers", "High Capacity Extractors"],
      qualityAssurance: "Starch residual iodine testing and fabric pH balancing.",
      iconName: "Droplets"
    },
    {
      stepNumber: 2,
      title: "Enzyme & Bio-Polishing Wash",
      shortDesc: "Cellulase enzyme treatment to gently erode surface fibers and create soft drape and authentic wash cast.",
      fullDesc: "Utilizes eco-friendly cellulase enzymes to hydrolyze surface cotton micro-fibrils. Creates luxurious handle, indigo shade reduction, and contrast without weakening underlying garment tensile strength.",
      techniques: ["Acid/Neutral Cellulase", "Pumice Stone Combination", "Contrast Enhancement"],
      machinery: ["Rotary Drum Washers", "Automated Chemical Dosing Systems"],
      qualityAssurance: "Fabric tear strength and weight loss monitoring (<3%).",
      iconName: "Zap"
    },
    {
      stepNumber: 3,
      title: "Bleaching & Sustainable Ozone Wash",
      shortDesc: "Indigo shade lightening using controlled sodium hypochlorite or zero-water gas Ozone bleaching.",
      fullDesc: "Precision bleaching to achieve mid to light indigo shades. Integrates advanced Ozone (O3) technology to oxidize indigo dye with up to 80% water savings and zero hazardous chemical discharge.",
      techniques: ["Ozone Gas Oxidation", "Controlled Bleach Dip", "Anti-Backstaining Agents"],
      machinery: ["Jeanologia Ozone Generators", "Tonello Wash Extractors"],
      qualityAssurance: "Spectrophotometer shade matching against master shade bands.",
      iconName: "Wind"
    },
    {
      stepNumber: 4,
      title: "Laser Etching & Dry Process Artistry",
      shortDesc: "3D whiskering, chevrons, hand scraping, and laser destruction patterns for authentic vintage aesthetic.",
      fullDesc: "Executing high-tech laser burn patterns for whiskering and fading, coupled with manual scraping artistry, resin 3D baking, and subtle PP spraying for natural aged denim character.",
      techniques: ["Laser Whiskering", "Hand Scraping", "3D Oven Resin Curing"],
      machinery: ["3D Curing Ovens", "High Speed Laser Systems", "Spray Booths"],
      qualityAssurance: "Pattern alignment and seam stress testing.",
      iconName: "Sparkles"
    },
    {
      stepNumber: 5,
      title: "Neutralization & Softener Treatment",
      shortDesc: "Complete chemical neutralization, rinsing, and premium silicone/cationic softening application.",
      fullDesc: "Thorough anti-chlorine neutralization baths to eliminate residual chemical odor, followed by micro-emulsion silicone softeners for supple hand-feel and skin-friendly garment comfort.",
      techniques: ["Sodium Bisulfite Neutralization", "Silicone Micro-Emulsion", "Antistatic Finish"],
      machinery: ["High Speed Hydro-Extractors", "Tumble Dryers"],
      qualityAssurance: "pH level verification (6.0 - 7.0) and odor-free inspection.",
      iconName: "Sparkle"
    },
    {
      stepNumber: 6,
      title: "Shade Grouping & Final Quality Audit",
      shortDesc: "Sorting garments into A, B, C shade bands and final inspection before packing.",
      fullDesc: "Strict light-box inspection under standardized lighting conditions (D65 daylight, CWF, TL84) to group finished garments into tight shade bands ensuring lot uniformity for retail clients.",
      techniques: ["Light Box Color Audit", "Dimension Shrinkage Sorting", "Defect Tagging"],
      machinery: ["Standardized Light Cabinets", "Digital Moisture Meters"],
      qualityAssurance: "100% final quality pass approval before shipment release.",
      iconName: "CheckCircle2"
    }
  ]
};
