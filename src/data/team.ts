export interface TeamMemberProfile {
  id: string;
  name: string;
  shortName: string;
  role: string;
  roleBadge: string;
  institution: string;
  statement: string;
  image: string;
  bio: string;
  competencies: string[];
  experience: string[];
  contacts: {
    email: string;
    github?: string;
    linkedin: string;
    instagram?: string;
    portfolio?: string;
  };
}

export const TEAM_MEMBERS_DETAILED: TeamMemberProfile[] = [
  {
    id: "ghiffar",
    name: "Qudwa Abyaz Ghiffara",
    shortName: "Ghiffar",
    role: "Chief Executive Officer & Founding Product Lead",
    roleBadge: "CHIEF EXECUTIVE OFFICER & FOUNDING PRODUCT LEAD",
    institution: "🎓 S1 Teknik Informatika, Universitas Brawijaya",
    statement:
      "True leadership is the ability to orchestrate deep technology into real-world economic empowerment. At ZapLabs, we don't just engineer intelligent systems—we unlock sustainable business models that move society forward.",
    image: "/images/team/ghiffar.jpg",
    bio: "Memimpin visi strategis, peta jalan komersial, dan tata kelola produk digital ekosistem ZapIN.",
    competencies: [
      "Venture Leadership & Governance",
      "Product Architecture & UI/UX",
      "Cross-Functional Team Orchestration",
      "B2B MSME Economic Transformation",
    ],
    experience: [
      "Venture & Product Steering: Memimpin visi strategis, peta jalan komersial, dan arsitektur produk digital ekosistem ZapIN (Intelligent Distributed EV Charging).",
      "Cross-Functional Team Leadership: Berpengalaman memimpin dan menyelaraskan eksekusi lintas divisi teknologi (hardware, AI, cloud) dan komersial menuju target KPI terukur.",
      "High-Impact Brand Reach (1.000.000+ Views): Berhasil memimpin strategi komunikasi publik dan kampanye digital berskala nasional dengan capaian lebih dari 1 juta views organik.",
      "MSME Economic Empowerment: Mengorkestrasi digitalisasi dan pemasaran komoditas UMKM lokal (produk kopi dan entitas desa) guna memperluas jangkauan pasar dan menaikkan omzet penjualan.",
      "Fiscal & Cashflow Governance: Bertanggung jawab atas pengelolaan Rencana Anggaran Biaya (RAB), alokasi permodalan, serta akuntabilitas arus kas (cashflow) proyek lapangan.",
      "International Innovation Recognition: Peraih medali Emas (2026) dan perak (2022) di kompetisi penemu internasional World Young Inventors Exhibition (WYIE) serta olimpiade sains nasional.",
    ],
    contacts: {
      email: "ghffr64@gmail.com",
      github: "https://github.com/Faarae",
      linkedin: "https://linkedin.com/in/QudwaAbyazGhiffara",
      instagram: "https://instagram.com/ghiffar64",
    },
  },
  {
    id: "alvin",
    name: "Farhan Alvin Alatas",
    shortName: "Alvin",
    role: "Chief Technology Officer & Hardware Lead",
    roleBadge: "CHIEF TECHNOLOGY OFFICER & HARDWARE LEAD",
    institution: "🎓 S1 Teknik Elektro, Universitas Brawijaya",
    statement:
      "Reliable hardware is the backbone of real-world energy systems. We engineer fail-safe IoT controllers that ensure strict electrical safety and microsecond telemetry precision.",
    image: "/images/team/alvin.jpg",
    bio: "Merancang modul IoT pengontrol pengisian daya cerdas, instrumentasi industri, dan proteksi beban kelistrikan.",
    competencies: [
      "Industrial Instrumentation & Control",
      "Embedded Hardware & ESP32-S3",
      "Electrical Power Protection & Safety",
      "IoT Telemetry & Automation Protocols",
    ],
    experience: [
      "Industrial Instrumentation Background: Pengalaman di subdivisi Instrumentation Control System PT Pertamina Hulu Mahakam dalam kalibrasi keandalan instrumen industri kelistrikan.",
      "WYIE 2026 Gold Medalist & IP Holder: Meraih Gold Medal pada World Young Inventors Exhibition (WYIE) 2026 untuk inovasi sistem cerdas berbasis akuisisi data ESP32-S3, serta memegang sertifikat Hak Kekayaan Intelektual (HAKI) alat filtrasi L-PURE.",
      "ZapIN Smart Dock Controller Architecture: Merancang modul perangkat keras pengisian daya dengan proteksi beban daya, sakelar relai otomatis, dan pembacaan kWh telemetri real-time.",
      "Field Electrical Leadership: Memimpin perancangan distribusi daya listrik lapangan dan implementasi instalasi kelistrikan sebagai Koordinator Divisi Listrik KKM Teknik XLV.",
    ],
    contacts: {
      email: "Farhan.alvin25@gmail.com",
      github: "https://github.com/farhanalvin",
      linkedin: "https://linkedin.com/in/farhan-alvin-alatas-56a042294",
      instagram: "https://instagram.com/farhanalvin",
    },
  },
  {
    id: "dyan",
    name: "Dyandra Aurellia Agata Fitri",
    shortName: "Dyan",
    role: "Chief Information Officer & Lead AI Architect",
    roleBadge: "CHIEF INFORMATION OFFICER & LEAD AI ARCHITECT",
    institution: "🎓 S1 Teknologi Informasi, Universitas Brawijaya",
    statement:
      "The true power of AI in energy is predictability. We turn dynamic telemetry into actionable routing decisions before the driver even faces a queue.",
    image: "/images/team/dyan.png",
    bio: "Mengembangkan algoritma AI dynamic rerouting, model prediksi ketersediaan stasiun, dan arsitektur microservices cloud.",
    competencies: [
      "Time-Series Machine Learning",
      "Dynamic Rerouting Algorithms",
      "Scalable Cloud Microservices",
      "Payment Gateway & API Integration",
    ],
    experience: [
      "WYIE 2026 Gold Medalist & National Business Champion: Meraih Gold Medal WYIE 2026 di bidang AI komputasi lokal dan Juara 1 Nasional Ambition 2026 Business Plan Competition (Green Tech Category).",
      "ZapIN AI Availability Prediction Engine: Merancang arsitektur model time-series machine learning untuk memprediksi durasi pengisian daya dan ketersediaan dock stasiun secara akurat.",
      "Dynamic Rerouting Engine: Mengembangkan logika komputasi perutean dinamis yang mendeteksi risiko kepadatan stasiun dan mengalihkan pengguna ke stasiun alternatif.",
      "High-Availability Cloud Infrastructure: Membangun backend microservices berlatensi rendah untuk menangani ribuan aliran data telemetri IoT dan transaksi otomatis.",
    ],
    contacts: {
      email: "dyandra.aurellia@zaplabs.id",
      github: "https://github.com/dyandraurellia",
      linkedin: "https://www.linkedin.com/in/dyandra-aurellia",
      instagram: "https://instagram.com/dyandraurellia",
    },
  },
  {
    id: "nadhif",
    name: "Nadhif Rif'at Rasendriya",
    shortName: "Nadhif",
    role: "Chief Operating Officer & Business Growth Lead",
    roleBadge: "CHIEF OPERATING OFFICER & BUSINESS GROWTH LEAD",
    institution: "🎓 S1 Teknik Informatika, Universitas Brawijaya",
    statement:
      "Technology creates true value only when it scales sustainably. We empower commercial spaces to turn idle parking into thriving, recurring revenue streams.",
    image: "/images/team/profile.png",
    bio: "Mengembangkan kemitraan korporasi strategis, model bisnis Zero-CapEx HaaS, dan ekspansi ekonomi UMKM.",
    competencies: [
      "Corporate Partnerships (PLN Ecosystem)",
      "MSME Economic Acceleration (6x Growth)",
      "Agile Product & Project Management",
      "B2B Revenue Modeling & Commercialization",
    ],
    experience: [
      "Corporate Partnerships with PT PLN (Persero): Berpengalaman mengarahkan kompetisi bisnis nasional dan membangun kemitraan strategis dengan entitas BUMN energi termasuk PT PLN (Persero).",
      "Proven MSME Growth (Bakti BCA Awardee): Berhasil mendorong pertumbuhan omzet harian mitra wisata/UMKM lokal hingga 6x lipat dan memfasilitasi legalitas perizinan usaha (60+ NIB/PIRT).",
      "Google Student Ambassador (Top 2% Nationwide): Terpilih dari 81.000+ pendaftar nasional sebagai duta AI dan kepemimpinan ekosistem digital Google.",
      "Multi-Award Winning Business Strategist: Juara 1 Nasional Ambition 2026, Juara 1 Nasional BCOM 2025 BMC, serta perancang model Zero-CapEx & Hardware-as-a-Service (HaaS) ZapIN.",
    ],
    contacts: {
      email: "nadhifrifat@gmail.com",
      portfolio: "https://nadhif-portfolio.vercel.app/",
      linkedin: "https://linkedin.com/in/royalnadhif50",
      instagram: "https://instagram.com/nadhifrifat",
    },
  },
];

// Compatibility alias for existing components
export const TEAM_MEMBERS = TEAM_MEMBERS_DETAILED.map((m) => ({
  id: m.id,
  name: m.name,
  role: m.role,
  bio: m.bio,
  image: m.image,
  linkedin: m.contacts.linkedin,
  github: m.contacts.github,
  email: m.contacts.email,
  education: m.institution,
  experience: m.experience,
  focusAreas: m.competencies,
  statement: m.statement,
}));
