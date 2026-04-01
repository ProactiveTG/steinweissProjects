export default function StatusBadge({ status }: { status: "online" | "warning" | "offline" | "info" | "success" | "danger" }) {
  const map: Record<string, { label: string; cls: string }> = {
    online:  { label: "Online",  cls: "badge-online"  },
    success: { label: "OK",      cls: "badge-online"  },
    warning: { label: "Warning", cls: "badge-warning" },
    offline: { label: "Offline", cls: "badge-offline" },
    danger:  { label: "Alert",   cls: "badge-offline" },
    info:    { label: "Info",    cls: "badge-warning" },
  };
  const { label, cls } = map[status] ?? map.info;
  return (
    <span className={cls}>
      {label}
    </span>
  );
}
