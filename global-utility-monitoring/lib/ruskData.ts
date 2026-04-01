export const properties = [
  { id: "p1", name: "Riverfront Industrial Park",  city: "Houston, TX",     type: "Industrial",  valves: 24, status: "online"  as const, uptime: 99.8, contact: "Mike Torres"   },
  { id: "p2", name: "Midtown Plaza Complex",       city: "Dallas, TX",      type: "Commercial",  valves: 16, status: "online"  as const, uptime: 100,  contact: "Lisa Park"     },
  { id: "p3", name: "Lakeside Water Treatment",    city: "Austin, TX",      type: "Municipal",   valves: 48, status: "warning" as const, uptime: 97.2, contact: "James Ortiz"   },
  { id: "p4", name: "North Harbor Refineries",     city: "Houston, TX",     type: "Industrial",  valves: 36, status: "online"  as const, uptime: 99.1, contact: "Dana Wilson"   },
  { id: "p5", name: "Greenfield Estates",          city: "San Antonio, TX", type: "Residential", valves: 8,  status: "offline" as const, uptime: 82.4, contact: "Chris Lee"     },
  { id: "p6", name: "Central Station Authority",   city: "Austin, TX",      type: "Municipal",   valves: 62, status: "online"  as const, uptime: 99.9, contact: "Patricia Moore" },
];

export const valves = [
  { id: "V-001", name: "Main Inlet Gate",     property: "p3", zone: "Zone A", position: 72, flow: 142, pressure: 68, status: "open"    as const, lastToggled: "2 min ago"  },
  { id: "V-002", name: "Secondary Bypass",    property: "p3", zone: "Zone A", position: 0,  flow: 0,   pressure: 0,  status: "closed"  as const, lastToggled: "4 hrs ago"  },
  { id: "V-003", name: "Distribution Alpha",  property: "p3", zone: "Zone B", position: 100,flow: 89,  pressure: 52, status: "open"    as const, lastToggled: "1 hr ago"   },
  { id: "V-004", name: "Emergency Shutoff",   property: "p3", zone: "Zone B", position: 100,flow: 0,   pressure: 0,  status: "warning" as const, lastToggled: "8 hrs ago"  },
  { id: "V-005", name: "Pressure Relief",     property: "p3", zone: "Zone C", position: 45, flow: 28,  pressure: 31, status: "open"    as const, lastToggled: "30 min ago" },
  { id: "V-006", name: "Chemical Feed Inlet", property: "p3", zone: "Zone C", position: 0,  flow: 0,   pressure: 0,  status: "closed"  as const, lastToggled: "1 day ago"  },
];

export const adminAlerts = [
  { id: "aa1", property: "Lakeside Water Treatment", severity: "warning" as const, message: "V-004 Emergency Shutoff valve reporting abnormal pressure differential", time: "12 min ago", resolved: false },
  { id: "aa2", property: "Greenfield Estates",       severity: "danger"  as const, message: "All telemetry lost — unit appears offline",                          time: "2 hrs ago",  resolved: false },
  { id: "aa3", property: "Riverfront Industrial",    severity: "info"    as const, message: "Scheduled calibration cycle completed on all 24 valve sensors",      time: "3 hrs ago",  resolved: true  },
  { id: "aa4", property: "Central Station",          severity: "success" as const, message: "Monthly system health check passed — all 62 valves nominal",         time: "1 day ago",  resolved: true  },
];

export const portalAlerts = [
  { id: "pa1", severity: "warning" as const, message: "V-004 pressure differential elevated — monitoring closely", time: "12 min ago", read: false },
  { id: "pa2", severity: "info"    as const, message: "Quarterly inspection scheduled for April 20, 2025",         time: "1 day ago",  read: false },
  { id: "pa3", severity: "success" as const, message: "All valve positions verified and logged",                   time: "2 days ago", read: true  },
];

export const flowTrend = [
  { time: "00:00", flow: 118, pressure: 62 },
  { time: "04:00", flow: 95,  pressure: 58 },
  { time: "08:00", flow: 134, pressure: 66 },
  { time: "12:00", flow: 158, pressure: 71 },
  { time: "16:00", flow: 148, pressure: 69 },
  { time: "20:00", flow: 142, pressure: 68 },
  { time: "Now",   flow: 142, pressure: 68 },
];

export const uptimeData = [
  { day: "Mon", uptime: 99.8 },
  { day: "Tue", uptime: 100  },
  { day: "Wed", uptime: 97.2 },
  { day: "Thu", uptime: 99.4 },
  { day: "Fri", uptime: 100  },
  { day: "Sat", uptime: 99.9 },
  { day: "Sun", uptime: 100  },
];

export const adminKpis = {
  totalProperties: properties.length,
  onlineProperties: properties.filter(p => p.status === "online").length,
  totalValves: properties.reduce((sum, p) => sum + p.valves, 0),
  activeAlerts: adminAlerts.filter(a => !a.resolved).length,
  avgUptime: "96.2%",
};
