import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSite } from "@/context/SiteProvider";
import { SERVICES } from "@/lib/site-data";

export function DemoBookingModal() {
  const { modal, closeModal, addDemo } = useSite();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: SERVICES[0].title,
    preferredAt: "",
    notes: "",
  });

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name.trim().length < 2) {
      toast.error("Please enter your name.");
      return;
    }
    if (!/^[0-9+\s-]{8,15}$/.test(form.phone.trim())) {
      toast.error("Enter a valid phone number.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      toast.error("Enter a valid email address.");
      return;
    }
    addDemo({
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      service: form.service,
      preferredAt: form.preferredAt,
      notes: form.notes.trim().slice(0, 800),
    });
    toast.success("Demo slot requested! Our team will confirm shortly.");
    setForm({ name: "", phone: "", email: "", service: SERVICES[0].title, preferredAt: "", notes: "" });
    closeModal();
  };

  return (
    <Dialog open={modal === "demo"} onOpenChange={(o) => !o && closeModal()}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Book your ₹1 Demo Consultation</DialogTitle>
          <DialogDescription>
            A 45-minute session with our architects — requirement review, roadmap and fixed quote.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="d-name">Full name</Label>
              <Input id="d-name" maxLength={80} value={form.name} onChange={(e) => set("name", e.target.value)} />
            </div>
            <div>
              <Label htmlFor="d-phone">Phone</Label>
              <Input id="d-phone" maxLength={15} value={form.phone} onChange={(e) => set("phone", e.target.value)} />
            </div>
          </div>
          <div>
            <Label htmlFor="d-email">Email</Label>
            <Input id="d-email" type="email" maxLength={120} value={form.email} onChange={(e) => set("email", e.target.value)} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="d-service">Service</Label>
              <select
                id="d-service"
                value={form.service}
                onChange={(e) => set("service", e.target.value)}
                className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="d-date">Preferred date & time</Label>
              <Input id="d-date" type="datetime-local" value={form.preferredAt} onChange={(e) => set("preferredAt", e.target.value)} />
            </div>
          </div>
          <div>
            <Label htmlFor="d-notes">Project notes</Label>
            <Textarea id="d-notes" maxLength={800} rows={3} value={form.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Tell us briefly what you want to build." />
          </div>
          <Button type="submit" className="bg-solar w-full font-semibold">
            Confirm ₹1 Demo Slot
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
