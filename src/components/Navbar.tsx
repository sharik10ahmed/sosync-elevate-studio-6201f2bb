import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/sosync-logo.png.asset.json";
import { Button } from "@/components/ui/button";
import { useSite } from "@/context/SiteProvider";
import { BRAND } from "@/lib/site-data";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { settings, openModal } = useSite();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo.url} alt={`${BRAND.name} logo`} className="h-11 w-11 object-contain" />
          <span className="hidden text-lg font-bold tracking-tight sm:block">
            SOSync <span className="text-solar">AI Tech</span>
          </span>
        </Link>

        <div className="ml-auto hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <a
            href={`tel:${settings.phonePrimary.replace(/\s/g, "")}`}
            className="hidden items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-medium transition-colors hover:border-primary lg:flex"
          >
            <Phone className="h-4 w-4 text-primary" />
            {settings.phonePrimary}
          </a>
          <Button onClick={() => openModal("demo")} className="bg-solar font-semibold">
            Book ₹1 Demo
          </Button>
          <button
            className="rounded-md border border-border p-2 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-card md:hidden">
          <div className="flex flex-col p-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${settings.phonePrimary.replace(/\s/g, "")}`}
              className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground"
            >
              Call {settings.phonePrimary}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
