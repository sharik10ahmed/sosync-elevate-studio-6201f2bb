import { useEffect, useState } from "react";
import { PhoneCall, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSite } from "@/context/SiteProvider";

export function FloatingCallbackButton() {
  const { addCallback } = useSite();
  const [open, setOpen] = useState(false);
  const [teased, setTeased] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const t = setTimeout(() => {
      setTeased(true);
      setOpen(true);
    }, 20000);
    return () => clearTimeout(t);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) return toast.error("Please enter your name.");
    if (!/^[0-9+\s-]{8,15}$/.test(phone.trim())) return toast.error("Enter a valid phone number.");
    addCallback({ name: name.trim().slice(0, 80), phone: phone.trim() });
    toast.success("Callback requested — we'll ring you shortly.");
    setName("");
    setPhone("");
    setOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <form
          onSubmit={submit}
          className="w-[min(88vw,20rem)] animate-scale-in rounded-xl border border-border bg-card p-4 shadow-2xl"
        >
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-sm font-semibold">Request a callback</p>
              <p className="text-xs text-muted-foreground">
                {teased ? "Our team calls back within 20 minutes." : "Share your number."}
              </p>
            </div>
            <button type="button" aria-label="Close callback form" onClick={() => setOpen(false)}>
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
          <div className="mt-3 space-y-3">
            <div>
              <Label htmlFor="cb-name" className="text-xs">Name</Label>
              <Input id="cb-name" value={name} maxLength={80} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="cb-phone" className="text-xs">Phone</Label>
              <Input id="cb-phone" value={phone} maxLength={15} onChange={(e) => setPhone(e.target.value)} placeholder="+91 90000 00000" />
            </div>
            <Button type="submit" className="w-full bg-solar font-semibold">
              Call me back
            </Button>
          </div>
        </form>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Request a callback"
        className="bg-solar flex h-14 w-14 items-center justify-center rounded-full text-primary-foreground shadow-[var(--shadow-solar)] transition-transform hover:scale-105"
      >
        <PhoneCall className="h-6 w-6" />
      </button>
    </div>
  );
}
