# SOSync Elevate Studio

MASTER CODE EXECUTION PROMPT — SOSync AI Tech IT Solutions
Repository: https://github.com/sharik10ahmed/sosync-elevate-studio

You are a Principal Full-Stack React Engineer. 

Do NOT write lengthy explanations or planning summaries. IMMEDIATELY create and write the full production code for all remaining files in the following exact sequence:

> Company: SOSync AI Tech IT Solutions (Brand: SOSync AI Tech)
> Tagline: "Innovate. Integrate. Elevate. — Digital Solutions for a Smarter Tomorrow"
> Palette: Carbon Obsidian `#0B0F17` canvas, Matte Charcoal `#1A1F2C`, Solar Orange `#FF6A00` 10% CTA accent.

---

### 🚫 STRICT CONTENT EXCLUSIONS (MANDATORY):
- **NO E-Learning, NO courses, NO LMS, NO training programs, NO bootcamps, NO internships, NO student batches/testimonials.**
- 100% focused on **B2B & B2C Client Services, Custom Software, Web Development, Enterprise IT, AI Automation, and Digital Marketing**.

---

### ⚡ CODE EXECUTION PHASES (CREATE ALL FILES NOW):

#### PHASE 1: MODALS & FLOATING WIDGETS
Create these files under `src/components/`:
1. `src/components/Footer.tsx`: Brand summary, nav links, services links, direct phones (`+91 91724 03714` / `+91 70043 30655`), email (`support@sosyncaitech.in`), Kharadi Pune office address, operating hours, embedded map preview, social links, and discrete Shield icon with link to `/admin/login` ("Admin Portal").
2. `src/components/FloatingCallbackButton.tsx`: Fixed bottom-right 20-second callback popup form (Name, Phone). Saves to `sosync_callbacks` via `SiteProvider`.
3. `src/components/AIChatbot.tsx`: `SOSync AI Assistant` floating FAQ chat assistant with quick action buttons. Stacks cleanly with callback button.
4. `src/components/MaintenanceModeView.tsx`: Branded maintenance screen shown when `settings.maintenanceMode === true`.
5. `src/components/modals/DemoBookingModal.tsx`: Book ₹1 Demo Consultation (Name, Phone, Email, Service, Date/Time, Notes) saving to `sosync_demo_bookings`.
6. `src/components/modals/ServiceEnquiryModal.tsx`: Auto-fills selected service title, collects budget & project details, saves to `sosync_enquiries`.
7. `src/components/modals/ReferralModal.tsx`: Generates `SOSYNC-XXXXXX` code for 10% commission.
8. `src/components/modals/FeedbackModal.tsx`: Star rating (1–5) and review submission, saves to `sosync_testimonials` as "Pending".
9. `src/components/modals/CaseStudyModal.tsx`: Case study drawer showing portfolio project metrics and tech badges.

---

#### PHASE 2: WIRE UP ROOT SHELL & PUBLIC ROUTES
1. `src/routes/__root.tsx`:
   - Wrap with `SiteProvider` and mount `Toaster` (Sonner).
   - Render `AnnouncementBar` at top.
   - Render `Navbar`.
   - Render `<Outlet />` (or `MaintenanceModeView` if maintenance mode is ON and path is not `/admin/*`).
   - Render `Footer`.
   - Mount `FloatingCallbackButton`, `AIChatbot`, and all 5 modals.
2. `src/routes/services.tsx`:
   - Full-page directory of all 6 divisions (Website Dev, Software & ERP, Enterprise IT, Growth Marketing, Graphic Design, AI Services & Automation) with capability checkmarks and "Enquire Now" triggers.
3. `src/routes/portfolio.tsx`:
   - Filterable gallery with live metrics and "View Case Study" modal triggers.
4. `src/routes/contact.tsx`:
   - Interactive contact form, direct click-to-call/email, Kharadi Pune address, embedded Google Map iframe, and FAQ accordion.

---

#### PHASE 3: 11 HOMEPAGE SECTIONS & `src/routes/index.tsx`
Create modular components under `src/components/home/` and wire into `src/routes/index.tsx`:
1. `HeroSlider.tsx`: 3 rotating slides with unique Unsplash tech images, animated badges, bold headlines ("Build Smarter. Automate Faster. Scale Further"), "Book ₹1 Demo" CTA, "Explore Services" CTA, autoplay & pause on hover.
2. `StatsSection.tsx`: Animated numbers for `50+ Projects Delivered`, `50+ Happy Clients`, `8+ Senior Engineers`, `12+ Countries Served`.
3. `ServicesSection.tsx`: Tabbed category filters across all 6 divisions with feature bullets and "Enquire Now" triggers.
4. `ValueProps.tsx`: **6 Months FREE Technical Support (Worth ₹25,000+)** badge card, **100% IP Ownership**, and **Rapid 1–3 Weeks Delivery**.
5. `TechStack.tsx`: Interactive tech chips (React, Next.js, Node, Python, AWS, Docker, AI/ML, NLP, RAG, PowerBI, Razorpay).
6. `PortfolioSection.tsx`: Filterable portfolio grid (`All`, `E-Commerce`, `ERP / Software`, `Portals`) with unique images for *Morpankh Saree*, *SP Art Hubs*, *Suraj Naturo Dry Fruits*, *Sonai Residential World School*, *Karyon College*, *Sona I Group of Institutes*.
7. `ProcessTimeline.tsx`: 9-step timeline (01. Requirement Analysis → 02. Architecture Roadmap → 03. UI/UX Prototype → 04. Clean Development → 05. QA & Security → 06. Client Demo → 07. Production Deployment → 08. Admin Handover & Training → 09. 6 Months Free Support Warranty).
8. `TeamSection.tsx`: Leadership (Shashant Shekhar, Omkar Bachanatti, Sanika Chougule, Vivek Dhumal, Aslam Pathan) + Senior Full Stack Squad (Tridev Sharma, Sharik Ahmed, Vicky Kumar, Ashish Ranjan, Anurag Kumar) with unique photos.
9. `Testimonials.tsx`: Dynamic carousel reading approved reviews from localStorage (`sosync_testimonials`).
10. `ReferralCTA.tsx`: "Refer a client & earn 10% commission" button opening the referral modal.
11. `FinalCTA.tsx`: High-impact conversion banner with "Book ₹1 Demo" and "Contact Us" actions.

---

#### PHASE 4: COMPLETE PROTECTED ADMIN PORTAL (`/admin`)
1. `src/routes/admin/login.tsx`:
   - Clean credentials login (`admin@sosyncaitech.in` / `admin123`). Saves state in localStorage and redirects to dashboard.
2. `src/routes/admin/dashboard.tsx`:
   - Protected route guard (redirects unauthenticated visitors to login).
   - Responsive sidebar navigation + topbar with admin profile & Logout button.
   - **7 Full CRUD Modules (connected to localStorage)**:
     1. **Overview Dashboard**: Dynamic metric cards for Total Enquiries, Pending Callbacks, Demo Bookings, Active Projects, and Average Rating.
     2. **Service Enquiries Manager**: Searchable table with status toggles (`Pending`, `Contacted`, `In Progress`, `Closed`).
     3. **Callback Requests Manager**: List of instant callback requests with one-click status update (`Pending` → `Called`).
     4. **Demo Bookings Manager**: View all ₹1 demo consultation bookings with requested dates and notes.
     5. **Portfolio Projects Manager**: Add new project, edit existing, delete with confirmation, and toggle "Featured" status.
     6. **Testimonials & Feedback Manager**: Approve or hide client reviews (only approved reviews show on the public site).
     7. **Website Settings Manager**: Edit phone numbers, email, physical address, operating hours, announcement banner text/toggle, and maintenance mode toggle.

---

### 🚀 EXECUTION:
Write and connect all remaining files now. Ensure all actions persist to `localStorage`, mobile responsiveness is seamless, and all image URLs are unique Unsplash photos.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7b41a3c1-206c-4af3-91e3-885d833a59f1).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
