import { Link } from "@tanstack/react-router";
import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Shield,
  Twitter,
} from "lucide-react";
import logo from "@/assets/sosync-logo.png.asset.json";
import { useSite } from "@/context/SiteProvider";
import { BRAND, SERVICES } from "@/lib/site-data";

const MAP_SRC =
  "https://www.google.com/maps?q=Kharadi,Pune,Maharashtra&output=embed";

export function Footer() {
  const { settings } = useSite();

  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo.url} alt={`${BRAND.name} logo`} className="h-12 w-12 object-contain" />
            <span className="text-lg font-bold">
              SOSync <span className="text-solar">AI Tech</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {BRAND.legal} builds custom software, enterprise IT systems, AI automation and growth
            marketing for businesses across India and abroad.
          </p>
          <p className="mt-4 text-sm font-medium text-primary">{BRAND.tagline}</p>
          <div className="mt-5 flex gap-3">
            {[Linkedin, Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social profile"
                className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-widest text-primary">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link to="/services" hash={s.id} className="hover:text-foreground">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="flex flex-col">
                <a href={`tel:${settings.phonePrimary.replace(/\s/g, "")}`} className="hover:text-foreground">
                  {settings.phonePrimary}
                </a>
                <a href={`tel:${settings.phoneSecondary.replace(/\s/g, "")}`} className="hover:text-foreground">
                  {settings.phoneSecondary}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`mailto:${settings.email}`} className="hover:text-foreground">
                {settings.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{settings.address}</span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{settings.hours}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our office
          </h3>
          <div className="mt-4 overflow-hidden rounded-xl border border-border">
            <iframe
              title="SOSync AI Tech office location"
              src={MAP_SRC}
              loading="lazy"
              className="h-44 w-full"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {BRAND.legal}. All rights reserved.</p>
          <Link
            to="/admin/login"
            className="flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Shield className="h-3.5 w-3.5" />
            Staff Portal
          </Link>
        </div>
      </div>
    </footer>
  );
}
