import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_PROJECTS,
  DEFAULT_SETTINGS,
  DEFAULT_TESTIMONIALS,
  STORAGE_KEYS,
  uid,
  type Callback,
  type DemoBooking,
  type Enquiry,
  type Project,
  type Referral,
  type Settings,
  type Testimonial,
} from "@/lib/site-data";

type ModalName = "demo" | "enquiry" | "referral" | "feedback" | "caseStudy";

type SiteContextValue = {
  hydrated: boolean;
  settings: Settings;
  updateSettings: (patch: Partial<Settings>) => void;
  enquiries: Enquiry[];
  addEnquiry: (e: Omit<Enquiry, "id" | "createdAt" | "status">) => void;
  setEnquiries: (rows: Enquiry[]) => void;
  callbacks: Callback[];
  addCallback: (c: Omit<Callback, "id" | "createdAt" | "status">) => void;
  setCallbacks: (rows: Callback[]) => void;
  demos: DemoBooking[];
  addDemo: (d: Omit<DemoBooking, "id" | "createdAt" | "status">) => void;
  setDemos: (rows: DemoBooking[]) => void;
  projects: Project[];
  setProjects: (rows: Project[]) => void;
  testimonials: Testimonial[];
  addTestimonial: (t: Omit<Testimonial, "id" | "createdAt" | "approved">) => void;
  setTestimonials: (rows: Testimonial[]) => void;
  referrals: Referral[];
  addReferral: (r: Omit<Referral, "id" | "createdAt">) => void;
  modal: ModalName | null;
  modalPayload: { service?: string; project?: Project } | null;
  openModal: (name: ModalName, payload?: { service?: string; project?: Project }) => void;
  closeModal: () => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore quota errors */
  }
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [settings, setSettingsState] = useState<Settings>(DEFAULT_SETTINGS);
  const [enquiries, setEnquiriesState] = useState<Enquiry[]>([]);
  const [callbacks, setCallbacksState] = useState<Callback[]>([]);
  const [demos, setDemosState] = useState<DemoBooking[]>([]);
  const [projects, setProjectsState] = useState<Project[]>(DEFAULT_PROJECTS);
  const [testimonials, setTestimonialsState] = useState<Testimonial[]>(DEFAULT_TESTIMONIALS);
  const [referrals, setReferralsState] = useState<Referral[]>([]);
  const [modal, setModal] = useState<ModalName | null>(null);
  const [modalPayload, setModalPayload] = useState<{ service?: string; project?: Project } | null>(
    null,
  );

  useEffect(() => {
    setSettingsState({ ...DEFAULT_SETTINGS, ...read(STORAGE_KEYS.settings, {}) });
    setEnquiriesState(read<Enquiry[]>(STORAGE_KEYS.enquiries, []));
    setCallbacksState(read<Callback[]>(STORAGE_KEYS.callbacks, []));
    setDemosState(read<DemoBooking[]>(STORAGE_KEYS.demos, []));
    setProjectsState(read<Project[]>(STORAGE_KEYS.projects, DEFAULT_PROJECTS));
    setTestimonialsState(read<Testimonial[]>(STORAGE_KEYS.testimonials, DEFAULT_TESTIMONIALS));
    setReferralsState(read<Referral[]>(STORAGE_KEYS.referrals, []));
    setHydrated(true);
  }, []);

  const persist = useCallback(<T,>(key: string, value: T, setter: (v: T) => void) => {
    setter(value);
    write(key, value);
  }, []);

  const value = useMemo<SiteContextValue>(
    () => ({
      hydrated,
      settings,
      updateSettings: (patch) =>
        persist(STORAGE_KEYS.settings, { ...settings, ...patch }, setSettingsState),
      enquiries,
      addEnquiry: (e) =>
        persist(
          STORAGE_KEYS.enquiries,
          [
            {
              ...e,
              id: uid(),
              status: "Pending" as const,
              createdAt: new Date().toISOString(),
            },
            ...enquiries,
          ],
          setEnquiriesState,
        ),
      setEnquiries: (rows) => persist(STORAGE_KEYS.enquiries, rows, setEnquiriesState),
      callbacks,
      addCallback: (c) =>
        persist(
          STORAGE_KEYS.callbacks,
          [
            { ...c, id: uid(), status: "Pending" as const, createdAt: new Date().toISOString() },
            ...callbacks,
          ],
          setCallbacksState,
        ),
      setCallbacks: (rows) => persist(STORAGE_KEYS.callbacks, rows, setCallbacksState),
      demos,
      addDemo: (d) =>
        persist(
          STORAGE_KEYS.demos,
          [
            { ...d, id: uid(), status: "Pending" as const, createdAt: new Date().toISOString() },
            ...demos,
          ],
          setDemosState,
        ),
      setDemos: (rows) => persist(STORAGE_KEYS.demos, rows, setDemosState),
      projects,
      setProjects: (rows) => persist(STORAGE_KEYS.projects, rows, setProjectsState),
      testimonials,
      addTestimonial: (t) =>
        persist(
          STORAGE_KEYS.testimonials,
          [
            { ...t, id: uid(), approved: false, createdAt: new Date().toISOString() },
            ...testimonials,
          ],
          setTestimonialsState,
        ),
      setTestimonials: (rows) => persist(STORAGE_KEYS.testimonials, rows, setTestimonialsState),
      referrals,
      addReferral: (r) =>
        persist(
          STORAGE_KEYS.referrals,
          [{ ...r, id: uid(), createdAt: new Date().toISOString() }, ...referrals],
          setReferralsState,
        ),
      modal,
      modalPayload,
      openModal: (name, payload) => {
        setModalPayload(payload ?? null);
        setModal(name);
      },
      closeModal: () => setModal(null),
    }),
    [
      hydrated,
      settings,
      enquiries,
      callbacks,
      demos,
      projects,
      testimonials,
      referrals,
      modal,
      modalPayload,
      persist,
    ],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used inside SiteProvider");
  return ctx;
}
