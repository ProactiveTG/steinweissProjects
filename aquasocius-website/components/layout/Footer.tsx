import Link from "next/link";

const footerLinks = [
  { href: "/technology", label: "Technology" },
  { href: "/product",    label: "Product"    },
  { href: "/markets",    label: "Markets"    },
  { href: "/about",      label: "About"      },
  { href: "/contact",    label: "Contact"    },
];

export default function Footer() {
  return (
    <footer className="bg-[#060E1A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <p className="text-xl font-bold text-white mb-3">Aquasocius</p>
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs">
              {/* TODO: Final copy */}
              Hydrodynamic cavitation water purification. No chemicals. Pure output.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-4">
              Navigate
            </p>
            <ul className="flex flex-col gap-2">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#94A3B8] hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-4">
              Contact
            </p>
            <p className="text-sm text-[#94A3B8]">
              {/* TODO: Final contact info */}
              New York, NY
              <br />
              Zürich, Switzerland
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#94A3B8]">
            © {new Date().getFullYear()} Aquasocius. All rights reserved.
          </p>
          <p className="text-xs text-[#94A3B8]">
            Engineered between Zürich &amp; New York
          </p>
        </div>
      </div>
    </footer>
  );
}
