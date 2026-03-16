# Product Requirements Document (PRD)

## AI Code / Project Yaki 3D Showcase Website

Document version: v1.0  
Status: Draft ready for implementation  
Primary language: Bahasa Indonesia with English technical terms  
Product type: Personal showcase website  
Implementation target: Vite + React.js + Tailwind CSS

---

## 1. Executive Summary

AI Code / Project Yaki adalah web showcase 3D untuk menampilkan profil seorang **AI-driven Full Stack Developer with Data Analytics expertise**. Website ini dirancang sebagai pengalaman hybrid: satu alur landing page yang cinematic, immersive, dan smooth, lalu didukung detail project atau case study yang dapat dibuka tanpa memutus flow eksplorasi pengguna.

Tujuan utama produk:

- Membuat first impression yang kuat untuk recruiter, client, dan collaborator.
- Menampilkan kombinasi skill Full Stack Development, AI integration, dan Data Analytics secara jelas.
- Menyediakan narasi profesional yang modern, visual, dan mudah dipahami dalam waktu singkat.
- Menyiapkan struktur konten yang bisa langsung dipindah ke implementasi React dan data JSON/TypeScript.

PRD ini menggunakan **replaceable profile data**. Nama, foto, link, dan detail personal akhir dapat diganti kemudian tanpa mengubah struktur produk.

---

## 2. Product Vision

### 2.1 Vision Statement

Membangun showcase website yang terasa seperti demo produk teknologi premium: visual 3D yang hidup, motion yang halus, dan konten yang menunjukkan dampak nyata dari kemampuan engineering, AI-driven problem solving, dan data analytics.

### 2.2 Product Promise

Website harus membuat pengunjung memahami tiga hal dalam 15-30 detik pertama:

- Pemilik showcase adalah developer full stack yang kuat secara teknis.
- Pemilik showcase mampu mengintegrasikan AI ke workflow atau produk nyata.
- Pemilik showcase mampu mengubah data menjadi insight, dashboard, atau keputusan bisnis.

### 2.3 Positioning

Official role label yang dipakai di dokumen ini:

**AI-driven Full Stack Developer | Data Analytics | Digital Product Builder**

Catatan terminologi:

- Gunakan istilah **AI-driven**, bukan "AI driver".
- Gunakan istilah **3D showcase website** untuk experience utama.

---

## 3. Business Goals and Success Metrics

### 3.1 Business Goals

- Meningkatkan conversion dari visitor menjadi recruiter inquiry, client lead, atau collaboration invite.
- Menyediakan showcase yang membedakan diri dari website developer generik.
- Memperlihatkan breadth dan depth skill secara visual tanpa terasa padat atau membingungkan.

### 3.2 User Goals

- Recruiter dapat cepat memahami role fit, stack, dan impact.
- Client dapat melihat service capability dan proof of work.
- Collaborator dapat menilai cara kerja, kualitas project, dan area spesialisasi.

### 3.3 Success Metrics

- Average engagement time di atas 90 detik.
- Hero-to-project scroll completion rate di atas 55%.
- Contact CTA click-through rate minimal 6%.
- Project detail open rate minimal 30% dari total pengunjung yang mencapai section projects.
- Lighthouse target:
  - Performance >= 80 pada desktop
  - Accessibility >= 90
  - Best Practices >= 90
  - SEO >= 85

---

## 4. Target Audience

### 4.1 Primary Audience

- Tech recruiter
- Hiring manager
- Startup founder
- Agency owner
- Product or engineering lead

### 4.2 Secondary Audience

- Potential collaborator
- Fellow developer
- Community organizer
- Mentor or investor yang ingin melihat capability teknis

### 4.3 Audience Needs

- Identitas profesional yang jelas
- Bukti kompetensi teknis dan hasil kerja
- Gambaran proyek nyata dan dampak bisnis
- Cara kontak yang cepat dan terpercaya

---

## 5. Problem Statement and Opportunity

### 5.1 Current Problem

Banyak website developer terlihat seragam: hanya daftar stack, daftar project, dan kontak. Sulit membedakan developer yang benar-benar punya sudut pandang produk, kemampuan AI integration, dan data thinking.

### 5.2 Product Opportunity

Dengan pengalaman 3D yang terarah, data story yang rapi, dan narasi proyek yang kuat, showcase ini dapat:

- Menjadi alat branding personal yang lebih premium.
- Menunjukkan kualitas engineering melalui detail experience, bukan hanya visual.
- Menjadi showcase yang relevan untuk pasar modern yang mencari developer serba bisa.

---

## 6. Scope

### 6.1 In Scope for v1

- Single-page cinematic landing experience
- Hybrid navigation ke detail project/case study
- 3D hero scene
- Smooth animation system
- About, skills, services, projects, analytics capability, workflow, testimonials placeholder, contact
- Replaceable structured content
- Responsive layout untuk desktop, tablet, dan mobile
- Accessibility baseline dan fallback 2D

### 6.2 Out of Scope for v1

- CMS admin dashboard
- Blog engine
- Authentication
- Full backend contact CRM
- Multi-language switcher di UI
- 3D heavy simulation yang mengorbankan performance

---

## 7. Experience Model and Information Architecture

### 7.1 Experience Model

Website menggunakan model **hybrid**:

- Landing page utama sebagai one-page immersive flow
- Detail project/case study dibuka sebagai modal overlay atau routed detail page ringan
- Pengguna tetap merasa berada dalam satu brand experience

### 7.2 Primary Navigation

- Home
- About
- Skills
- Projects
- Analytics
- Workflow
- Contact

### 7.3 Suggested Page / Section Order

1. Cinematic Hero 3D
2. About / Positioning
3. Core Skills and Tech Intelligence
4. Services / What I Build
5. Featured Projects
6. AI and Data Analytics Capability
7. Experience / Workflow Timeline
8. Testimonials or Social Proof
9. Contact CTA
10. Footer

---

## 8. Visual Direction and Motion Principles

### 8.1 Art Direction

Visual identity harus terasa:

- Futuristic but professional
- High-tech but readable
- Premium but not flashy
- Data-centric but human

### 8.2 Visual Elements

- Layered depth dengan lighting lembut
- Floating glassmorphism cards
- Interactive particles atau node grid
- Subtle gradient atmospheres
- Accent glow pada CTA dan highlight metric
- 3D objects yang abstrak, bukan karakter kartun

### 8.3 Motion Principles

- Smooth easing, tidak snappy berlebihan
- Scroll reveal berlapis dengan momentum ringan
- Camera motion lambat dan intentional
- Hover state harus terasa responsif tapi tidak mengganggu
- Semua motion harus menghormati `prefers-reduced-motion`

### 8.4 Motion Stack

- `Framer Motion` untuk UI transitions, stagger, and section reveal
- `React Three Fiber` + `Three.js` untuk scene dan object interaction
- `GSAP` optional hanya jika dibutuhkan untuk camera choreography atau timeline kompleks

---

## 9. Technical Direction

### 9.1 Core Stack

- Build tool: `Vite`
- UI library: `React.js`
- Styling: `Tailwind CSS`
- 3D rendering: `@react-three/fiber`, `three`, `@react-three/drei`
- Animation: `framer-motion`
- Optional advanced timeline: `gsap`
- State/content management: local JSON/TS data + `Zustand` atau React Context jika dibutuhkan

### 9.2 Rendering Strategy

- HTML sections digunakan untuk readability, SEO, dan accessibility
- 3D Canvas dipakai pada hero dan beberapa accent sections
- Detail project dapat memakai overlay panel berbasis DOM agar mudah diakses

### 9.3 Content Strategy

- Semua konten utama disimpan dalam bentuk structured data
- Komponen UI membaca data dari content object, bukan hardcoded inline copy
- Replaceable profile data diberi penanda jelas

---

## 10. Functional Requirements by Section

### 10.1 Cinematic Hero 3D

### Purpose

Menarik perhatian pengguna dan menyampaikan positioning inti dalam hitungan detik.

### Required Content

- Brand placeholder
- Main headline
- Supporting headline
- Short value proposition
- Primary CTA
- Secondary CTA
- Social proof micro-line

### Required Interaction

- 3D scene merespons pointer dengan subtle parallax
- Camera bergerak halus saat scroll awal
- CTA utama scroll atau focus ke About/Projects
- CTA kedua membuka resume, GitHub, atau case study highlight

### Acceptance Criteria

- Headline tetap terbaca jelas di atas 3D background
- Hero tampil baik di desktop dan mobile
- Motion tidak membuat teks sulit dibaca
- Terdapat fallback static gradient + DOM layout ketika WebGL gagal

### 10.2 About / Positioning

### Purpose

Menjelaskan siapa pemilik showcase, fokus profesional, dan cara berpikirnya.

### Required Content

- Short biography
- Professional positioning statement
- Core values atau work principles
- Quick facts

### Required Interaction

- Cards atau panels muncul dengan staggered reveal
- Hover memberi depth ringan
- Quick facts bisa berupa floating chips atau compact stat cards

### Acceptance Criteria

- Pengunjung memahami role utama dan domain kemampuan
- About section tidak lebih dari 20 detik untuk dipindai
- Ada penekanan jelas pada AI-driven Full Stack + Data Analytics

### 10.3 Core Skills and Tech Intelligence

### Purpose

Menampilkan breadth dan depth skill tanpa hanya menjadi daftar logo.

### Required Content

- Skill categories
- Tools and frameworks
- Confidence / emphasis level
- Preferred use case per category

### Required Interaction

- Skill clusters divisualisasikan sebagai cards, orbit, sphere, atau layered grid
- Hover memperlihatkan detail dan stack relations
- Metric chips menampilkan level atau project count

### Acceptance Criteria

- Skill dibagi ke kategori yang logis
- Ada pembeda antara core skill, supporting skill, dan exploratory skill
- Informasi tetap dapat dibaca tanpa interaksi pointer

### 10.4 Services / What I Build

### Purpose

Menerjemahkan skill menjadi layanan atau output nyata.

### Required Content

- Service title
- Short description
- Deliverables
- Ideal client/problem fit

### Acceptance Criteria

- Service section tidak terdengar generik
- Setiap service terkait langsung dengan project atau skill yang ditampilkan

### 10.5 Featured Projects

### Purpose

Menjadi bukti utama kualitas kerja dan kemampuan implementasi.

### Required Content

- Featured project cards
- Role
- Problem statement
- Solution summary
- Tech stack
- Impact metrics
- Link repo/demo

### Required Interaction

- Project cards memiliki focus state
- Click membuka modal atau detail view
- Transition dari list ke detail terasa smooth
- Keyboard navigation tersedia untuk card selection dan modal close

### Acceptance Criteria

- Minimal 3 project unggulan
- Setiap project punya hasil, bukan hanya deskripsi fitur
- Detail view dapat dibuka tanpa merusak scroll position utama

### 10.6 AI and Data Analytics Capability

### Purpose

Menunjukkan kemampuan menggabungkan software engineering dengan insight dan automation.

### Required Content

- AI use cases
- Data pipeline capability
- Dashboard or analytics capability
- Quantified outcomes

### Required Interaction

- Metrics dapat ditampilkan sebagai animated counters, charts, atau panels
- Hover / tap pada metric memperlihatkan penjelasan singkat

### Acceptance Criteria

- Section membedakan AI integration dari sekadar memakai API
- Section membedakan data analytics dari sekadar chart visual
- Ada minimal 3 quantified metrics atau capability proof points

### 10.7 Experience / Workflow Timeline

### Purpose

Menjelaskan cara kerja dan proses delivery.

### Required Content

- Discovery
- Architecture
- Build
- Optimize
- Measure

### Acceptance Criteria

- Flow kerja terlihat matang dan berorientasi hasil
- Timeline mudah dipahami di desktop maupun mobile

### 10.8 Testimonials / Social Proof Placeholder

### Purpose

Menambah trust tanpa menghambat launch awal.

### Required Content

- Minimal placeholder area untuk testimonial, quote, partner logo, atau achievement badge

### Acceptance Criteria

- Jika belum ada testimonial nyata, section tetap terlihat intentional
- Tidak menampilkan klaim palsu

### 10.9 Contact CTA and Footer

### Purpose

Mengonversi minat menjadi komunikasi langsung.

### Required Content

- Contact headline
- Short invitation copy
- Email
- Optional form
- Social links

### Required Interaction

- CTA terlihat jelas dan kontras
- Form memiliki validasi basic
- Contact channels mudah di-tap di mobile

### Acceptance Criteria

- Minimal ada 2 channel kontak aktif
- Pengunjung dapat memahami cara menghubungi dalam kurang dari 5 detik

---

## 11. Non-Functional Requirements

### 11.1 Performance

- Target 60 FPS pada desktop modern
- Motion harus degrade gracefully pada device low-end
- Gunakan lazy loading untuk scene berat dan asset 3D
- Hindari model 3D dengan polygon count tinggi bila tidak memberi value visual nyata
- Gunakan compressed asset format bila memakai `.glb` atau texture besar

### 11.2 Accessibility

- Full keyboard navigation untuk elemen interaktif utama
- Kontras teks memenuhi standar dasar WCAG
- `prefers-reduced-motion` harus menonaktifkan motion intens
- Semua action penting tetap tersedia tanpa 3D

### 11.3 Responsiveness

- Desktop: immersive layout dengan canvas dominan
- Tablet: motion dipertahankan dengan kompleksitas lebih ringan
- Mobile: prioritaskan readability, touch targets, dan scene simplification

### 11.4 SEO

- Semantic HTML untuk content sections
- Meta title dan description yang relevan
- Heading hierarchy konsisten
- Open Graph basic

### 11.5 Maintainability

- Content dipisah dari presentational component
- Reusable motion tokens dan design tokens
- Clear section-based component boundaries

### 11.6 Analytics Hooks

- Track CTA clicks
- Track project detail opens
- Track contact clicks
- Track scroll depth per section

---

## 12. Content Model and Interface Contracts

Berikut interface konseptual yang harus dijadikan acuan saat implementasi data layer.

```ts
type ProfileData = {
  brandName: string;
  personalName: string;
  roleLabel: string;
  location: string;
  availability: string;
  bioShort: string;
  bioLong: string;
  avatarHint: string;
  resumeUrl: string;
};

type HeroContent = {
  eyebrow: string;
  headline: string;
  supportingText: string;
  primaryCtaLabel: string;
  primaryCtaTarget: string;
  secondaryCtaLabel: string;
  secondaryCtaTarget: string;
  sceneStyle: string;
  motionPreset: string;
};

type SkillCategory = {
  id: string;
  title: string;
  summary: string;
  emphasis: "core" | "supporting" | "exploratory";
  tools: string[];
  preferredUseCases: string[];
  accentColor: string;
  interactionType: string;
};

type ProjectItem = {
  id: string;
  title: string;
  tag: string;
  role: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string[];
  techStack: string[];
  repoUrl: string;
  demoUrl: string;
  priority: number;
  accentColor: string;
  "3dAssetHint": string;
  motionPreset: string;
};

type CaseStudyItem = {
  projectId: string;
  challenge: string;
  approach: string[];
  architectureNotes: string[];
  measurableResults: string[];
  galleryHints: string[];
};

type AnalyticsMetric = {
  id: string;
  label: string;
  value: string;
  context: string;
  accentColor: string;
};

type ContactChannel = {
  type: "email" | "github" | "linkedin" | "whatsapp" | "calendar";
  label: string;
  value: string;
  href: string;
  priority: number;
};
```

### Conceptual Component Contracts

- `HeroScene`: menampilkan scene 3D, headline overlay, dan CTA.
- `SkillSphere`: menampilkan kategori skill dalam bentuk interactive cluster.
- `ProjectShowcase`: menampilkan featured projects dan focus interaction.
- `MetricPanel`: menampilkan quantified impact, AI capability, dan analytics proof.
- `ContactSection`: menampilkan CTA, channels, dan optional form.

---

## 13. Structured Content Schema

Konten minimum yang harus tersedia dalam satu source of truth:

- `profile`
- `hero`
- `about`
- `skills`
- `services`
- `projects`
- `caseStudies`
- `experienceTimeline`
- `analyticsMetrics`
- `socialLinks`
- `contact`

Disarankan implementasi awal menggunakan satu file `siteContent.ts` atau `siteContent.json`.

---

## 14. Realistic Sample Data

Sample berikut bersifat realistis dan dapat langsung dijadikan starter content. Semua data personal masih placeholder.

```json
{
  "profile": {
    "brandName": "AI Code",
    "personalName": "[Replace with Your Name]",
    "roleLabel": "AI-driven Full Stack Developer | Data Analytics",
    "location": "Indonesia",
    "availability": "Open for freelance, contract, and full-time opportunities",
    "bioShort": "Saya membangun aplikasi web end-to-end yang menggabungkan frontend modern, backend yang scalable, integrasi AI, dan dashboard analytics yang membantu pengambilan keputusan.",
    "bioLong": "Sebagai AI-driven Full Stack Developer, saya fokus pada pembuatan produk digital yang tidak hanya berjalan dengan baik, tetapi juga memberi insight melalui data. Saya nyaman bekerja dari tahap discovery, arsitektur aplikasi, implementasi UI, integrasi API, hingga analytics dan optimization.",
    "avatarHint": "Minimal portrait with soft glow and tech background",
    "resumeUrl": "/resume.pdf"
  },
  "hero": {
    "eyebrow": "Full Stack Developer + AI Integration + Data Analytics",
    "headline": "Building immersive web products with intelligence, performance, and measurable impact.",
    "supportingText": "Saya membantu mengubah ide menjadi web experience modern yang cepat, scalable, dan didukung AI serta data insight.",
    "primaryCtaLabel": "Explore Projects",
    "primaryCtaTarget": "#projects",
    "secondaryCtaLabel": "View Resume",
    "secondaryCtaTarget": "/resume.pdf",
    "sceneStyle": "Abstract neural grid with floating glass panels",
    "motionPreset": "cinematic-smooth"
  },
  "about": {
    "positioning": "I build digital products that connect user experience, engineering quality, and business intelligence.",
    "principles": [
      "Build with clarity",
      "Design for performance",
      "Use AI with purpose",
      "Turn data into action"
    ],
    "quickFacts": [
      "Frontend to backend delivery",
      "AI API and workflow integration",
      "Dashboard and data storytelling",
      "Responsive and accessible UI systems"
    ]
  },
  "skills": [
    {
      "id": "frontend-3d",
      "title": "Frontend and 3D Experience",
      "summary": "Membangun UI modern, responsive, dan interaktif dengan perhatian pada motion dan detail visual.",
      "emphasis": "core",
      "tools": ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "Three.js", "React Three Fiber"],
      "preferredUseCases": ["Showcase websites", "Dashboard UI", "Interactive landing pages"],
      "accentColor": "#7dd3fc",
      "interactionType": "hover-depth"
    },
    {
      "id": "backend-ai",
      "title": "Backend and AI Integration",
      "summary": "Merancang API, workflow automation, data flow, dan integrasi AI untuk use case nyata.",
      "emphasis": "core",
      "tools": ["Node.js", "Express", "Supabase", "PostgreSQL", "REST API", "OpenAI API"],
      "preferredUseCases": ["AI assistant", "Internal tools", "Data-enabled applications"],
      "accentColor": "#38bdf8",
      "interactionType": "focus-expand"
    },
    {
      "id": "analytics",
      "title": "Data Analytics and Insight",
      "summary": "Mengolah data menjadi dashboard, KPI panel, dan insight yang relevan bagi produk atau bisnis.",
      "emphasis": "core",
      "tools": ["Python", "Pandas", "SQL", "Looker Studio", "Power BI", "Custom analytics dashboards"],
      "preferredUseCases": ["Performance dashboard", "Operational reporting", "Trend analysis"],
      "accentColor": "#22d3ee",
      "interactionType": "metric-hover"
    }
  ],
  "services": [
    {
      "title": "Full Stack Product Development",
      "description": "Membangun aplikasi web end-to-end dari interface hingga backend dan deployment.",
      "deliverables": ["Responsive UI", "API integration", "Database design", "Admin panel"],
      "idealFit": "Startup MVP, internal tools, business platform"
    },
    {
      "title": "AI-Powered Feature Integration",
      "description": "Menambahkan AI capability ke produk seperti summarization, search assist, classification, atau workflow automation.",
      "deliverables": ["Prompt flow", "AI endpoint integration", "Human-in-the-loop experience"],
      "idealFit": "SaaS tools, productivity products, customer support automation"
    },
    {
      "title": "Analytics Dashboard and Reporting",
      "description": "Membuat dashboard yang memudahkan tim membaca performa, tren, dan anomaly.",
      "deliverables": ["KPI dashboard", "Filterable reports", "Data visualization"],
      "idealFit": "Operations, education, sales, product analytics"
    }
  ],
  "projects": [
    {
      "id": "smart-ops-dashboard",
      "title": "Smart Ops Dashboard",
      "tag": "Data Analytics",
      "role": "Full Stack Developer",
      "summary": "Dashboard operasional untuk memonitor KPI harian, performa tim, dan anomaly secara visual.",
      "problem": "Tim operasional kesulitan memonitor performa lintas channel dengan data yang terpisah-pisah.",
      "solution": "Membangun dashboard terpadu dengan filter dinamis, visual KPI, dan ringkasan insight otomatis.",
      "impact": [
        "Mengurangi waktu pembuatan laporan mingguan hingga 70%",
        "Mempercepat deteksi anomaly operasional",
        "Meningkatkan visibilitas KPI lintas tim"
      ],
      "techStack": ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "Charting library"],
      "repoUrl": "https://github.com/placeholder/smart-ops-dashboard",
      "demoUrl": "https://demo.example.com/smart-ops-dashboard",
      "priority": 1,
      "accentColor": "#7dd3fc",
      "3dAssetHint": "Floating analytics panels",
      "motionPreset": "panel-orbit"
    },
    {
      "id": "ai-support-workflow",
      "title": "AI Support Workflow",
      "tag": "AI Integration",
      "role": "AI-driven Full Stack Developer",
      "summary": "Workflow bantuan internal berbasis AI untuk merangkum tiket, mengelompokkan intent, dan mempercepat respons awal.",
      "problem": "Tim support membutuhkan waktu lama untuk membaca riwayat tiket dan mengidentifikasi kategori masalah.",
      "solution": "Mengintegrasikan AI summarization dan classification ke dashboard support internal.",
      "impact": [
        "Memotong waktu triage tiket hingga 45%",
        "Meningkatkan konsistensi klasifikasi isu",
        "Mengurangi beban manual tim support"
      ],
      "techStack": ["React", "Node.js", "Supabase", "OpenAI API", "Webhook automation"],
      "repoUrl": "https://github.com/placeholder/ai-support-workflow",
      "demoUrl": "https://demo.example.com/ai-support-workflow",
      "priority": 2,
      "accentColor": "#38bdf8",
      "3dAssetHint": "Abstract message streams",
      "motionPreset": "signal-pulse"
    },
    {
      "id": "edu-data-platform",
      "title": "Education Data Platform",
      "tag": "Full Stack",
      "role": "Full Stack Developer",
      "summary": "Platform manajemen data pendidikan dengan panel admin, pencarian cepat, dan laporan berbasis filter.",
      "problem": "Data akademik dan administrasi tersebar di banyak sheet dan sulit ditelusuri.",
      "solution": "Mendesain platform terpusat untuk input, pencarian, validasi, dan reporting.",
      "impact": [
        "Mengurangi query manual data secara signifikan",
        "Mempercepat akses informasi penting",
        "Meningkatkan akurasi pelaporan internal"
      ],
      "techStack": ["React", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL"],
      "repoUrl": "https://github.com/placeholder/education-data-platform",
      "demoUrl": "https://demo.example.com/education-data-platform",
      "priority": 3,
      "accentColor": "#22d3ee",
      "3dAssetHint": "Data cubes and flow lines",
      "motionPreset": "data-rise"
    }
  ],
  "caseStudies": [
    {
      "projectId": "smart-ops-dashboard",
      "challenge": "Menyatukan data KPI dan memperjelas insight operasional untuk stakeholder non-teknis.",
      "approach": [
        "Audit sumber data yang tersedia",
        "Tentukan KPI prioritas",
        "Buat struktur dashboard modular",
        "Optimalkan query dan visual hierarchy"
      ],
      "architectureNotes": [
        "Frontend React modular",
        "API layer untuk agregasi data",
        "Database query dioptimalkan untuk laporan periodik"
      ],
      "measurableResults": [
        "Reporting mingguan lebih cepat",
        "Stakeholder lebih cepat menemukan anomaly",
        "KPI visibility meningkat"
      ],
      "galleryHints": ["Dashboard overview", "Team comparison view", "Anomaly state panel"]
    },
    {
      "projectId": "ai-support-workflow",
      "challenge": "Mengurangi waktu respons awal sambil tetap menjaga kualitas konteks pada tim support.",
      "approach": [
        "Petakan alur tiket dan bottleneck",
        "Tambahkan summarization layer",
        "Tambahkan auto-tagging intent",
        "Uji hasil dan lakukan refinement"
      ],
      "architectureNotes": [
        "AI prompt pipeline dengan guardrails dasar",
        "Log hasil AI untuk evaluasi",
        "UI mendukung review manual sebelum action"
      ],
      "measurableResults": [
        "Triage lebih cepat",
        "Konteks tiket lebih mudah dipahami",
        "Workflow support lebih konsisten"
      ],
      "galleryHints": ["Ticket summary panel", "Intent badge system", "Agent response workspace"]
    }
  ],
  "experienceTimeline": [
    {
      "stage": "Discover",
      "description": "Memahami tujuan bisnis, user flow, dan metric sukses sebelum coding dimulai."
    },
    {
      "stage": "Architect",
      "description": "Menyusun struktur frontend, API, data flow, dan komponen reusable."
    },
    {
      "stage": "Build",
      "description": "Mengembangkan UI, backend logic, integrations, dan motion system."
    },
    {
      "stage": "Optimize",
      "description": "Meningkatkan performance, accessibility, dan quality of interaction."
    },
    {
      "stage": "Measure",
      "description": "Membaca analytics dan feedback untuk iterasi berikutnya."
    }
  ],
  "analyticsMetrics": [
    {
      "id": "delivery-speed",
      "label": "Reporting Efficiency",
      "value": "70%",
      "context": "Contoh peningkatan efisiensi reporting setelah dashboard automation",
      "accentColor": "#7dd3fc"
    },
    {
      "id": "triage-time",
      "label": "Support Triage Faster",
      "value": "45%",
      "context": "Contoh percepatan triage dengan AI summarization dan tagging",
      "accentColor": "#38bdf8"
    },
    {
      "id": "ui-impact",
      "label": "Decision Visibility",
      "value": "3x",
      "context": "Representasi peningkatan kejelasan insight untuk stakeholder",
      "accentColor": "#22d3ee"
    }
  ],
  "socialLinks": [
    {
      "type": "github",
      "label": "GitHub",
      "value": "@yourhandle",
      "href": "https://github.com/yourhandle",
      "priority": 1
    },
    {
      "type": "linkedin",
      "label": "LinkedIn",
      "value": "Your Name",
      "href": "https://linkedin.com/in/yourhandle",
      "priority": 2
    }
  ],
  "contact": {
    "headline": "Let's build something intelligent and useful.",
    "supportingText": "Terbuka untuk kolaborasi produk, freelance project, maupun peluang full-time.",
    "channels": [
      {
        "type": "email",
        "label": "Email",
        "value": "hello@placeholder.dev",
        "href": "mailto:hello@placeholder.dev",
        "priority": 1
      },
      {
        "type": "linkedin",
        "label": "LinkedIn",
        "value": "Your Name",
        "href": "https://linkedin.com/in/yourhandle",
        "priority": 2
      }
    ]
  }
}
```

---

## 15. Interaction Requirements

### 15.1 Scroll Behavior

- Scroll transitions harus terasa halus dan stabil
- Hindari scroll hijacking penuh kecuali benar-benar terkontrol
- Section reveal mengikuti urutan narasi

### 15.2 Hover and Focus States

- Semua elemen interaktif memiliki hover, focus, dan active state
- Keyboard focus ring harus tetap terlihat di atas visual effect

### 15.3 Project Detail Experience

- Detail dapat dibuka sebagai modal overlay atau dedicated detail page
- Modal harus dapat ditutup dengan tombol close, backdrop click, dan `Esc`
- Focus trap wajib jika modal dipakai

### 15.4 Reduced Motion

- Nonaktifkan camera sweep besar
- Ganti animated particles menjadi static accents
- Gunakan fade sederhana sebagai fallback

---

## 16. Acceptance Criteria Summary

Produk dianggap selesai untuk v1 jika:

- Seluruh section utama tersedia dan terhubung dalam satu alur yang jelas
- Hero 3D berjalan baik dengan fallback non-3D
- Projects, AI capability, dan analytics proof points tampil jelas
- Sample content dapat diganti dari satu source data terstruktur
- Website responsif pada desktop, tablet, dan mobile
- CTA kontak mudah ditemukan dan berfungsi
- Motion terasa smooth tanpa mengorbankan readability
- Accessibility baseline dipenuhi untuk navigasi utama

---

## 17. Roadmap

### v1

- Cinematic hero
- About and positioning
- Skills and services
- Featured projects
- Analytics capability
- Workflow timeline
- Contact CTA
- Structured content layer

### v1.1

- Dedicated case study routes
- Advanced scene transitions
- CMS or headless content integration
- Real testimonial section
- Blog or insight notes
- Downloadable resume analytics tracking

---

## 18. Risks and Mitigations

### Risk: 3D scene terlalu berat

Mitigation:

- Batasi complexity
- Lazy load scene
- Siapkan fallback ringan

### Risk: Visual bagus tetapi informasi tidak jelas

Mitigation:

- Prioritaskan readability
- Gunakan content hierarchy yang kuat
- Uji scanability per section

### Risk: Showcase terasa generik walau 3D

Mitigation:

- Perkuat project story dan quantified outcomes
- Gunakan sample copy yang spesifik, bukan buzzword kosong

---

## 19. Implementation Notes for the Developer

- Bangun dulu content-driven layout sebelum mengoptimalkan scene 3D kompleks
- Pisahkan visual layer dari copy layer
- Gunakan section wrappers yang mudah dipakai ulang
- Simpan constants untuk colors, motion tokens, dan section IDs
- Pastikan setiap klaim di sample content mudah diganti dengan data nyata

---

## 20. Replaceable Profile Data Checklist

Item berikut wajib diganti sebelum production launch:

- `personalName`
- `resumeUrl`
- `email`
- `GitHub`
- `LinkedIn`
- foto/profile image
- project links
- impact metrics jika sudah ada data nyata
- testimonial jika sudah tersedia

---

## 21. Final Definition of Done

PRD ini siap dipakai sebagai acuan implementasi bila tim dapat:

- Membuat struktur halaman tanpa menebak section dan urutannya
- Membuat data model tanpa menebak field minimum
- Mendesain motion behavior tanpa menebak tone visual
- Menentukan scope v1 tanpa mencampur fitur tambahan
- Mengisi starter content tanpa menulis ulang struktur dari nol
