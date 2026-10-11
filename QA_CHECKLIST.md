# Quality Assurance & Testing Checklist

---

## 1. Responsiveness & Cross-Device Layout
- [x] **Mobile Viewports (320px – 480px)**:
  - Header displays compact logo, hamburger toggle, and drawer navigation.
  - No horizontal scrolling (`overflow-x: hidden`).
  - Hero statistics stack into clean 2-column grid.
  - Course cards and test diagnostic forms stack comfortably with touch targets $\ge 44\text{px}$.
  - Enquiry form inputs and textareas adapt with full width and legible font sizing ($\ge 16\text{px}$ to prevent iOS auto-zoom).
- [x] **Tablet Viewports (768px – 1024px)**:
  - Grid structures transition cleanly to 2-column layouts.
  - Course modals retain maximum 90vh scrollable height without clipping.
- [x] **Desktop Viewports (1280px+)**:
  - Full desktop navigation with active route highlights.
  - 4-column course cards, 3-column book showcases, and 4-column footer layout.

---

## 2. Navigation & Link Integrity
- [x] **Internal Route Transitions**:
  - `/` (Home) $\rightarrow$ `/courses` $\rightarrow$ `/contact` $\rightarrow$ `/careers` $\rightarrow$ `/tests` $\rightarrow$ `/club`.
  - Automatic scroll restoration to top of page via `ScrollToTop` helper.
- [x] **External Links**:
  - Verified phone link: `tel:+917709109830` opens device dialer.
  - Verified email link: `mailto:theconsistentacademy@gmail.com` opens mail client.
  - ThinkBuild developer credit: [https://www.thinkbuild.in/](https://www.thinkbuild.in/) with `target="_blank"` and `rel="noopener noreferrer"`.
  - Book purchase links (Amazon, Flipkart, Evincepub, Bspkart) open with safety attributes.
  - WhatsApp Study Community link opens official WhatsApp group invite.
  - Instagram and LinkedIn links verified.

---

## 3. Interactive Component Validation
- [x] **Enquiry Form (`/contact`)**:
  - Client-side validation active for Full Name, Email format, 10-digit Phone, Course Selection, and Learning Goals.
  - Displays red error state messages for missing/invalid fields.
  - Displays clear notice identifying form as a prototype demo.
  - Displays instant reference ticket modal upon valid submission.
  - Course selector auto-fills when navigated from a Course Card (`/contact?course=...`).
- [x] **Job Application Form (`/careers`)**:
  - Validates Full Name, Email, Phone, Resume/Portfolio URL, and selected role.
  - Displays candidate reference ID upon submission.
- [x] **Diagnostic Test Runners (`/tests`)**:
  - Switcher dynamically switches between Adults Grammar, Leadership Assessment, and Kids Grammar.
  - Progress bar dynamically tracks test completion.
  - Immediate calculation and presentation of results, feedback, and targeted course recommendations.
  - Retake assessment button smoothly resets state.
- [x] **Course Syllabus Modals (`/courses`)**:
  - Clicking "Syllabus" opens detailed module-by-module breakdown.
  - Escape key and backdrop clicks dismiss modal.
  - Background body scrolling disabled when modal is active.

---

## 4. Performance & Technical SEO
- [x] **Build Verification**:
  - Production build compiles cleanly with 0 errors (`npm run build`).
  - Total JS bundle size: **~322 kB** (optimized from the original 2.6 MB bundle).
- [x] **SEO & Accessibility**:
  - Canonical link tag pointing to `https://www.theconsistentacademy.in/`.
  - Open Graph title, description, and preview image tags configured.
  - Twitter Card summary tags configured.
  - Schema.org JSON-LD `EducationalOrganization` snippet present in `index.html`.
  - `public/robots.txt` and `public/sitemap.xml` properly served.
  - All images include meaningful descriptive `alt` text with fallback handling.
