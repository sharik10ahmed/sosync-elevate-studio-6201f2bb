import { Wrench } from "lucide-react";
import logo from "@/assets/sosync-logo.png.asset.json";
import { useSite } from "@/context/SiteProvider";
import { BRAND } from "@/lib/site-data";

export function MaintenanceModeView() {
  const { settings } = useSite();

  return (
    <main className="flex min-h-[80vh] items-center justify-center px-4 py-20">
      <div className="card-surface max-w-lg p-10 text-center">
        <img src={logo.url} alt={`${BRAND.name} logo`} className="mx-auto h-20 w-20 object-contain" />
        <div className="bg-solar mx-auto mt-6 flex h-12 w-12 items-center justify-center rounded-full text-primary-foreground">
          <Wrench className="h-6 w-6" />
        </div>
        <h1 className="mt-6 text-2xl font-bold">We're upgrading our systems</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {BRAND.legal} is performing scheduled maintenance. We'll be back online shortly. For
          anything urgent, reach us directly.
        </p>
        <div className="mt-6 flex flex-col gap-2 text-sm">
          <a href={`tel:${settings.phonePrimary.replace(/\s/g, "")}`} className="font-semibold text-primary">
            {settings.phonePrimary}
          </a>
          <a href={`mailto:${settings.email}`} className="text-muted-foreground hover:text-foreground">
            {settings.email}
          </a>
        </div>
      </div>
    </main>
  );
}
