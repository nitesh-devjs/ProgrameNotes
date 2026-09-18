# programenote

A responsive study-resource storefront and developer portfolio built with React, Vite, React Router, CSS Modules, Lucide icons, and Framer Motion. The existing 64-product catalog and all public pages are retained.

## Run locally

- Install dependencies: `npm install`
- Development: `npm run dev`
- Production build: `npm run build`
- Preview the build: `npm run preview`
- Lint: `npm run lint`
- Browser regression checks: `npm run test:browser` (start the development server first).

The browser checks use the existing Puppeteer dependency. Set `TEST_URL` to test another local URL, such as `http://127.0.0.1:4173` for the production preview. Reports, screenshots, and sample downloads go into the ignored `artifacts/` folder. Chrome must be allowed to launch on the machine.

## Project map

- `src/App.jsx`: routes, lazy page loading, navigation focus, missing-page handling.
- `src/pages/`: home, store, categories, product details, services, about, and legal pages.
- `src/components/`: shared navigation, footer, cards, dialogs, and contact form.
- `src/context/`: theme/currency providers, hooks, and safe preference storage.
- `src/data/products.js`: existing product and service content.
- `src/data/categoryOptions.js`: category filters, including existing college subjects.
- `src/data/subjectColors.js`: shared subject accents.
- `src/hooks/useDialog.js`: dialog lifecycle, focus wrap, Escape, and scroll restoration.
- `src/index.css`: shared theme tokens, typography, accessibility, and spacing.
- `public/downloads/`: downloadable assets.
- `scripts/smoke-test.mjs`: browser layout and interaction regression checks.

Legacy components and the unmounted Notes page remain available; they were not deleted. The root textbook/course scripts, JSON source material, generated HTML, and PDFs are separate publishing resources and are not part of the website runtime.

## Current integration boundaries

This is a polished frontend, not a connected commerce backend.

- Checkout is explicitly a **download demo**. No payment is collected.
- Only the JavaScript product with `actualFile` has a full PDF available. Other products offer clearly labeled `.txt` samples; they are never disguised as PDFs.
- The PDF is publicly accessible, as it was before. A paid launch needs server-verified payments and protected file delivery.
- All contact forms prepare a draft in the visitor's email application. The visitor must review and send it. The website does not send, store, or claim to have delivered inquiries.
- Theme and currency preferences use local storage when available, with safe fallbacks.
- Some catalog preview images are hosted externally; the local preview/code fallback handles image failures.
- Existing testimonials, sales counts, ratings, contact details, social links, and policy copy were retained as supplied. Verify them before publishing.
- Existing offline PDF generator helpers are not covered by website tests. The older `generate_pdf.*` helpers reference `js_course_scene.html`, which is absent in this checkout; use/review the separate course or textbook generator as appropriate.

## Before launch

1. Connect a real payment provider and verify payment on a server before releasing a paid download.
2. Supply and verify every advertised product file.
3. Confirm the support email, phone number, location, GitHub link, ratings, testimonials, and policy text.
4. Test email drafts on a real phone and computer with an email app configured.
5. Spot-check actual PDF content, preview imagery, dark/light themes, keyboard controls, and mobile navigation.
6. Configure the host to serve `index.html` for application routes such as `/store/prog-java-1`; React Router requires this fallback.
7. Review the browser report in `artifacts/browser-report.json`.

Original images are preserved. The About page uses optimized copies, while the homepage study-note composition is rendered with HTML/CSS rather than large decorative images.
