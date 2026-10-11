# Known Limitations & Handover Notes

The following technical notes outline current prototype parameters and recommendations for production deployment:

---

## 1. Contact & Career Forms (Simulated Demo Backend)
- **Current Behavior**: The contact enquiry form (`/contact`), career application form (`/careers`), and CC Club registration form (`/club`) perform complete client-side validation and generate a formatted reference confirmation ticket. They do not persist records to a remote database in this front-end prototype.
- **Production Recommendation**: Connect an API endpoint (such as Firebase Firestore, Supabase, Formspree, or an Express/Node.js microservice) by pointing the `handleSubmit` functions to your production endpoint.

---

## 2. Google Maps Location Embed
- **Current Behavior**: The Google Maps embed in `/contact` displays an interactive map of Pune, Maharashtra with a direct external link to Google Maps directions.
- **Production Recommendation**: If a precise street address, building number, or physical academy premises is later finalized for The Consistent Academy (beyond "Pune, Maharashtra"), update the exact coordinates or embed key in `src/data/contactData.js`.

---

## 3. CC Club Member Dashboard Authentication
- **Current Behavior**: The Consistent Communicators Club page (`/club`) provides full public information regarding the club's pillars, collegiate chapters (iFEEL), and leadership hierarchy with a demo membership signup form.
- **Production Recommendation**: When launching the full student portal, attach Firebase Authentication or Auth0 to enable persistent member profiles and badge tracking.

---

## 4. Blog & Admin Management
- **Current Behavior**: In the client's previous bundle, the `/blog` and `/admin` routes depended on Firebase Firestore credentials that required active administrative login tokens.
- **Production Recommendation**: The current prototype focuses on the core public-facing educational website (Home, Courses, Tests, Club, Careers, Contact). Blog posts can be integrated statically or connected via a headless CMS (e.g. Strapi or Sanity).
