export const property = {
  id: "prop-001",
  name: "Marina Bay Towers",
  address: "1 Marina Blvd, San Francisco, CA 94105",
  type: "High-Rise Residential",
  floors: 32,
  units: 280,
  systemInstalled: "March 2023",
  contractRenewal: "March 2026",
  accountManager: "Sarah Chen",
  phone: "(415) 555-0182",
};

export const systemStatus = {
  overall: "online" as const,
  lastUpdated: "Just now",
  uptime30d: 99.6,
  flowRate: 8.4,
  pressure: { inlet: 58, outlet: 12 },
  turbidity: 0.3,
  pH: 7.2,
  temperature: 68,
};

export const sensors = [
  { id: "S-01", zone: "Zone A — Lobby",       metric: "Inlet Pressure",  value: 58,  unit: "PSI",  status: "online"  as const, trend: 0   },
  { id: "S-02", zone: "Zone A — Lobby",       metric: "Outlet Pressure", value: 12,  unit: "PSI",  status: "online"  as const, trend: -2  },
  { id: "S-03", zone: "Zone B — Floors 1-10", metric: "Flow Rate",       value: 8.4, unit: "GPM",  status: "online"  as const, trend: 0.1 },
  { id: "S-04", zone: "Zone B — Floors 1-10", metric: "Turbidity",       value: 0.3, unit: "NTU",  status: "warning" as const, trend: 0.1 },
  { id: "S-05", zone: "Zone C — Floors 11-22",metric: "pH Level",        value: 7.2, unit: "pH",   status: "online"  as const, trend: 0   },
  { id: "S-06", zone: "Zone C — Floors 11-22",metric: "Temperature",     value: 68,  unit: "°F",   status: "online"  as const, trend: 1   },
  { id: "S-07", zone: "Zone D — Floors 23-32",metric: "Flow Rate",       value: 7.9, unit: "GPM",  status: "online"  as const, trend: -0.2},
  { id: "S-08", zone: "Zone D — Floors 23-32",metric: "Chlorine",        value: 0.0, unit: "ppm",  status: "online"  as const, trend: 0   },
];

export const alerts = [
  { id: "al-1", severity: "warning" as const, message: "Sensor S-04 turbidity slightly elevated (0.3 NTU)", time: "8 min ago",  read: false },
  { id: "al-2", severity: "info"    as const, message: "Scheduled maintenance window: April 15, 9–11 AM",  time: "2 hrs ago",  read: false },
  { id: "al-3", severity: "success" as const, message: "Monthly performance report is ready to download",  time: "1 day ago",  read: true  },
  { id: "al-4", severity: "info"    as const, message: "Annual system inspection completed successfully",   time: "3 days ago", read: true  },
];

export const trendData = [
  { time: "00:00", flow: 6.2, pressure: 56, turbidity: 0.28 },
  { time: "03:00", flow: 5.8, pressure: 55, turbidity: 0.26 },
  { time: "06:00", flow: 7.1, pressure: 57, turbidity: 0.29 },
  { time: "09:00", flow: 9.2, pressure: 59, turbidity: 0.31 },
  { time: "12:00", flow: 10.1,pressure: 61, turbidity: 0.33 },
  { time: "15:00", flow: 9.8, pressure: 60, turbidity: 0.30 },
  { time: "18:00", flow: 8.4, pressure: 58, turbidity: 0.29 },
  { time: "21:00", flow: 7.6, pressure: 57, turbidity: 0.28 },
  { time: "Now",   flow: 8.4, pressure: 58, turbidity: 0.30 },
];

export const savingsHistory = [
  { month: "Sep", saved: 3800 },
  { month: "Oct", saved: 4100 },
  { month: "Nov", saved: 3700 },
  { month: "Dec", saved: 4300 },
  { month: "Jan", saved: 4000 },
  { month: "Feb", saved: 4200 },
  { month: "Mar", saved: 4500 },
];

export const reports = [
  { id: "r1", title: "March 2025 Performance Report",   date: "Apr 1, 2025",  size: "1.2 MB", type: "monthly"  },
  { id: "r2", title: "February 2025 Performance Report",date: "Mar 1, 2025",  size: "1.1 MB", type: "monthly"  },
  { id: "r3", title: "Q1 2025 Water Quality Analysis",  date: "Apr 1, 2025",  size: "3.4 MB", type: "quarterly"},
  { id: "r4", title: "Annual Inspection — 2024",        date: "Jan 15, 2025", size: "5.8 MB", type: "annual"   },
  { id: "r5", title: "January 2025 Performance Report", date: "Feb 1, 2025",  size: "1.0 MB", type: "monthly"  },
];

export const faq = [
  {
    q: "How does hydrodynamic cavitation work?",
    a: "Our system forces water through precisely engineered orifices at high velocity, creating microscopic cavitation bubbles. When these collapse, they generate intense localized energy that neutralizes bacteria, viruses, and contaminants — with zero chemicals required."
  },
  {
    q: "What maintenance is required on my end?",
    a: "Very little. Our system is designed to be self-maintaining. We handle all scheduled inspections remotely and on-site. You'll receive advance notice before any required access. Most issues are detected and resolved remotely before you notice them."
  },
  {
    q: "How do I read my sensor data?",
    a: "All sensor readings are visible in the Sensors tab. Green indicators mean nominal readings. Yellow indicates a value approaching a threshold — not an emergency, but worth monitoring. Red means our team has been automatically notified."
  },
  {
    q: "Who do I contact for urgent issues?",
    a: "For urgent issues, call your account manager directly. Emergency service is available 24/7 at (415) 555-0199. For non-urgent questions, use the support form on this page and we'll respond within 4 business hours."
  },
  {
    q: "How is my savings figure calculated?",
    a: "We calculate savings by comparing your current Aquasocius system cost against the estimated cost of equivalent chemical water treatment for a property of your size, using current market rates for chlorine, pH balancers, and other standard additives."
  },
];
