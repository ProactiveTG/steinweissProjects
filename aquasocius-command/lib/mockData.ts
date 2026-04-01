export const clients = [
  { id: "c1", name: "Marina Bay Towers",    type: "High-Rise",    status: "online",  sensors: 12, city: "San Francisco", lastSeen: "2 min ago" },
  { id: "c2", name: "Grand Hyatt SF",       type: "Hotel",        status: "online",  sensors: 8,  city: "San Francisco", lastSeen: "1 min ago" },
  { id: "c3", name: "Embarcadero Center",   type: "Commercial",   status: "warning", sensors: 6,  city: "San Francisco", lastSeen: "5 min ago" },
  { id: "c4", name: "Pacific Heights Apts", type: "Residential",  status: "online",  sensors: 4,  city: "San Francisco", lastSeen: "3 min ago" },
  { id: "c5", name: "Bay Bridge Logistics", type: "Industrial",   status: "offline", sensors: 10, city: "Oakland",       lastSeen: "2 hrs ago" },
  { id: "c6", name: "SoMa Tech Campus",     type: "Commercial",   status: "online",  sensors: 14, city: "San Francisco", lastSeen: "Just now"  },
  { id: "c7", name: "Nob Hill Residences",  type: "Residential",  status: "online",  sensors: 3,  city: "San Francisco", lastSeen: "8 min ago" },
  { id: "c8", name: "Fisherman's Wharf Inn",type: "Hotel",        status: "warning", sensors: 5,  city: "San Francisco", lastSeen: "12 min ago"},
];

export const alerts = [
  { id: "a1", clientId: "c3", client: "Embarcadero Center",   severity: "warning", message: "Sensor S-04 pressure reading elevated (142 PSI)",       time: "8 min ago",  resolved: false },
  { id: "a2", clientId: "c5", client: "Bay Bridge Logistics", severity: "danger",  message: "Unit offline — no telemetry for 2+ hours",               time: "2 hrs ago",  resolved: false },
  { id: "a3", clientId: "c8", client: "Fisherman's Wharf Inn",severity: "warning", message: "Flow rate below threshold on Zone B (1.2 GPM)",          time: "15 min ago", resolved: false },
  { id: "a4", clientId: "c1", client: "Marina Bay Towers",    severity: "info",    message: "Scheduled maintenance window starts in 48 hours",         time: "1 hr ago",   resolved: false },
  { id: "a5", clientId: "c2", client: "Grand Hyatt SF",       severity: "info",    message: "Monthly performance report generated",                   time: "3 hrs ago",  resolved: true  },
  { id: "a6", clientId: "c6", client: "SoMa Tech Campus",     severity: "success", message: "Sensor calibration completed successfully on all 14 nodes","time": "4 hrs ago",resolved: true  },
];

export const sensorReadings = [
  { sensorId: "S-01", label: "Inlet Pressure",   value: 58,  unit: "PSI",  status: "online",  trend: "stable"   },
  { sensorId: "S-02", label: "Outlet Pressure",  value: 12,  unit: "PSI",  status: "online",  trend: "down"     },
  { sensorId: "S-03", label: "Flow Rate",         value: 8.4, unit: "GPM",  status: "online",  trend: "stable"   },
  { sensorId: "S-04", label: "Turbidity",         value: 0.3, unit: "NTU",  status: "warning", trend: "up"       },
  { sensorId: "S-05", label: "pH Level",          value: 7.2, unit: "pH",   status: "online",  trend: "stable"   },
  { sensorId: "S-06", label: "Temperature",       value: 68,  unit: "°F",   status: "online",  trend: "stable"   },
];

export const savingsData = [
  { month: "Sep", chemical: 4200, saved: 3800 },
  { month: "Oct", chemical: 4400, saved: 4100 },
  { month: "Nov", chemical: 4100, saved: 3700 },
  { month: "Dec", chemical: 4600, saved: 4300 },
  { month: "Jan", chemical: 4300, saved: 4000 },
  { month: "Feb", chemical: 4500, saved: 4200 },
  { month: "Mar", chemical: 4800, saved: 4500 },
];

export const uptimeData = [
  { day: "Mon", uptime: 99.8 },
  { day: "Tue", uptime: 100  },
  { day: "Wed", uptime: 98.2 },
  { day: "Thu", uptime: 99.9 },
  { day: "Fri", uptime: 100  },
  { day: "Sat", uptime: 99.7 },
  { day: "Sun", uptime: 100  },
];

export const kpis = {
  totalClients:    clients.length,
  onlineUnits:     clients.filter(c => c.status === "online").length,
  activeAlerts:    alerts.filter(a => !a.resolved).length,
  avgUptime:       "99.4%",
  chemicalSavings: "$31,600",
  totalSensors:    clients.reduce((sum, c) => sum + c.sensors, 0),
};
