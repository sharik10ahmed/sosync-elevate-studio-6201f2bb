import { useRef, useState, useEffect } from "react";
import { Bot, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSite } from "@/context/SiteProvider";

type Msg = { role: "user" | "bot"; text: string };

const QUICK = [
  "What services do you offer?",
  "How much does a website cost?",
  "What is the ₹1 demo?",
  "How long does delivery take?",
  "Talk to a human",
];

function answer(q: string, phone: string, email: string): string {
  const t = q.toLowerCase();
  if (t.includes("service") || t.includes("offer"))
    return "We deliver 6 divisions: Website Development, Software & ERP, Enterprise IT, Growth Marketing, Graphic Design, and AI Services & Automation.";
  if (t.includes("cost") || t.includes("price") || t.includes("budget"))
    return "Business websites typically start around ₹25,000, e-commerce from ₹60,000, and custom ERP/software is scoped per requirement. Share your brief and we'll send a fixed quote.";
  if (t.includes("demo"))
    return "The ₹1 demo consultation is a 45-minute session where our architects review your requirement and give you a roadmap and quote. Tap 'Book ₹1 Demo' anywhere on the site.";
  if (t.includes("time") || t.includes("delivery") || t.includes("long"))
    return "Most projects ship in 1–3 weeks. Larger ERP builds run 4–8 weeks with weekly demos.";
  if (t.includes("support") || t.includes("warranty"))
    return "Every project includes 6 months of free technical support (worth ₹25,000+) plus 100% source code and IP ownership.";
  if (t.includes("human") || t.includes("call") || t.includes("contact"))
    return `Sure — call us on ${phone} or email ${email}. You can also use the callback button at the bottom right.`;
  if (t.includes("ai") || t.includes("automation"))
    return "We build AI assistants, RAG knowledge search, document extraction and workflow automation that plug into your existing systems.";
  return "Great question! Our team can answer that in detail — book the ₹1 demo consultation or request a callback and we'll get right back to you.";
}

export function AIChatbot() {
  const { settings } = useSite();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "bot",
      text: "Hi, I'm the SOSync AI Assistant. Ask me about our services, pricing or delivery timelines.",
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [messages, open]);

  const send = (text: string) => {
    const q = text.trim();
    if (!q) return;
    setMessages((m) => [
      ...m,
      { role: "user", text: q.slice(0, 300) },
      { role: "bot", text: answer(q, settings.phonePrimary, settings.email) },
    ]);
    setInput("");
  };

  return (
    <div className="fixed bottom-24 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex h-[26rem] w-[min(88vw,21rem)] animate-scale-in flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
          <div className="bg-solar flex items-center gap-2 px-4 py-3 text-primary-foreground">
            <Bot className="h-5 w-5" />
            <div className="flex-1">
              <p className="text-sm font-semibold">SOSync AI Assistant</p>
              <p className="text-[11px] opacity-90">Online • replies instantly</p>
            </div>
            <button aria-label="Close assistant" onClick={() => setOpen(false)}>
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground"
                    : "max-w-[90%] text-sm leading-relaxed text-foreground"
                }
              >
                {m.text}
              </div>
            ))}
            <div className="flex flex-wrap gap-2 pt-1">
              {QUICK.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {q}
                </button>
              ))}
            </div>
            <div ref={endRef} />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex gap-2 border-t border-border p-3"
          >
            <Input
              value={input}
              maxLength={300}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question…"
            />
            <Button type="submit" size="icon" aria-label="Send" className="bg-solar shrink-0">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open SOSync AI Assistant"
        className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-card text-primary shadow-xl transition-transform hover:scale-105"
      >
        <Bot className="h-6 w-6" />
      </button>
    </div>
  );
}
