# The Consistent Academy — Website Redesign

A production-quality, responsive React website prototype for **The Consistent Academy**, rebuilt with clean, credible, academic aesthetics using the client website ([https://www.theconsistentacademy.in/](https://www.theconsistentacademy.in/)) as the single source of truth.

---

## Technology Stack

- **React.js 18** with **Vite 6** (fast HMR and optimized production bundling)
- **Tailwind CSS 3** (semantic, responsive utility styling)
- **React Router DOM 6** (declarative client-side routing with automatic scroll-to-top)
- **Lucide React** (accessible, modern interface icons)
- **Plus Jakarta Sans & Inter** typography via Google Fonts

---

## Key Pages & Functionality

1. **Home (`/`)**:
   - High-impact Hero section with accreditation badge, value propositions, key statistics, and founder highlight card.
   - Core Pedagogical Pillars (*Why Aspiring Leaders Choose The Consistent Academy*).
   - Flagship Courses Preview with curriculum access.
   - Meet the Founder: **Vidya Wankhade** (19+ years experience, British Council Certified Master Trainer credentials, pedagogical journey timeline 2007–2025, and published books showcase with purchase links).
   - *Learning in Action* authentic gallery (22 approved classroom and event photographs).
   - Real student testimonials with band scores and international destinations (Canada, UK, Germany, Australia).
   - Consultation CTA banner.

2. **Course Catalogue (`/courses`)**:
   - Comprehensive catalogue of **8 Adult Professional Programs** (IELTS/TOEFL/PTE, Corporate Survival, Crack Your Interview, Dining Etiquette, Leadership Presence, Communication Skills, Personality Development, EELTA Teacher Training).
   - Interactive **Syllabus Modal** with module-by-module breakdown, durations, target audience, and learning promise.
   - **5 Kids & Young Learner Programs** (Elocution, TedX/Toastmasters, Grammar Foundations, Creative Writing, Reading Club).
   - Consultation booking advisory card.

3. **Contact Us (`/contact`)**:
   - Verified Academy Contact Details:
     - **Location**: Pune, Maharashtra, India
     - **Phone**: `+91 77091 09830` (clickable `tel:` link)
     - **Email**: `theconsistentacademy@gmail.com` (clickable `mailto:` link)
     - **Hours**: Monday – Saturday: 9:00 AM – 7:30 PM (IST)
   - Embedded Google Maps view with direct driving directions link.
   - Client-side validated enquiry form with instant demo reference ticket modal.

4. **Careers (`/careers`)**:
   - 5 open faculty and support positions (*IELTS Trainer*, *Spoken English Mentor*, *Teaching Assistant*, *Writing Skills Coach*, *Corporate Communication Trainer*).
   - Interactive faculty application form with field validation.

5. **Diagnostic Tests (`/tests`)**:
   - **Leadership Style Assessment** (20 questions evaluating autocratic, democratic, transformational, and laissez-faire approaches with customized report).
   - **Advanced English Grammar Diagnostic** (15 questions on subjunctive mood, conditionals, and syntax with instant band readiness score and explanations).
   - **Young Learners Grammar Quest** (10 interactive questions for ages 6–15).

6. **Consistent Communicators Club (`/club`)**:
   - College public speaking transformation program in partnership with **iFEEL**.
   - 4 Pillars of Speaking Mastery and Collegiate Chapter Leadership Structure.
   - Simulated student chapter membership registration.

---

## Assets & Authenticity

- All 44 image assets are **original, approved client assets** extracted directly from the live website and saved locally in `public/assets/academy/`.
- Zero AI-generated photographs or unrelated stock images were introduced.
- Verified developer footer credit: **"Website developed by ThinkBuild"** linking to [https://www.thinkbuild.in/](https://www.thinkbuild.in/).

---

## Local Development & Production Build

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Running the Development Server
```bash
npm install
npm run dev
```
The development server will launch at `http://127.0.0.1:5173/` with hot module replacement (HMR).

### Building for Production
```bash
npm run build
```
Creates an optimized production bundle in `dist/`.

### Previewing Production Build
```bash
npm run preview
```
