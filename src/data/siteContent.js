const copy = (id, en) => ({ id, en });

export const siteContent = {
  profile: {
    brandName: "My Portofolio",
    personalName: copy("Muhammad Agha Prabaswara", "Muhammad Agha Prabaswara"),
    roleLabel: copy(
      "AI Driven | Full Stack Developer | Data Analyst",
      "AI Driven | Full Stack Developer | Data Analyst",
    ),
    roleSequence: {
      id: ["AI Driven", "Full Stack Developer", "Data Analyst"],
      en: ["AI Driven", "Full Stack Developer", "Data Analyst"],
    },
    intro: copy(
      "Muhammad Agha Prabaswara adalah seorang AI Driven, Full Stack Developer, dan Data Analyst berusia 16 tahun yang fokus membangun produk digital yang rapi, fungsional, dan terukur.",
      "Muhammad Agha Prabaswara is a 16-year-old AI Driven, Full Stack Developer, and Data Analyst focused on building clean, functional, and measurable digital products.",
    ),
    location: copy("Klaten, Indonesia", "Klaten, Indonesia"),
    availability: copy("16 yo", "16 yo"),
  },
  hero: {
    eyebrow: copy("", ""),
    title: copy(
      "Hello, I'm Muhammad Agha Prabaswara",
      "Hello, I'm Muhammad Agha Prabaswara",
    ),
    lead: copy(
      "Hello, I'm Muhammad Agha Prabaswara",
      "Hello, I'm Muhammad Agha Prabaswara",
    ),
    support: copy(
      "Seorang AI Driven, Full Stack Developer, dan Data Analyst berusia 16 tahun yang membangun pengalaman digital modern dengan pendekatan yang terstruktur dan relevan.",
      "A 16-year-old AI Driven, Full Stack Developer, and Data Analyst building modern digital experiences with a structured and relevant approach.",
    ),
    meta: [
      {
        label: copy("Brand", "Brand"),
        value: copy("My Portofolio", "My Portofolio"),
      },
      {
        label: copy("Project", "Project"),
        value: copy("Personal Developer Website", "Personal Developer Website"),
      },
      {
        label: copy("Status", "Status"),
        value: copy("Open to Build and Learn", "Open to Build and Learn"),
      },
    ],
    ctaPrimary: copy("Explore Layout", "Explore Layout"),
    ctaSecondary: copy("Open Contact", "Open Contact"),
  },
  spotlightCards: [
    {
      id: "board-a",
      label: copy("Focus", "Focus"),
      title: copy("AI Driven Builder", "AI Driven Builder"),
      body: copy(
        "Menggabungkan pemanfaatan premium AI tools dengan pemahaman proyek yang teliti untuk mempercepat workflow coding, debugging, dan delivery.",
        "Combining premium AI tools with careful project understanding to accelerate coding, debugging, and delivery workflows.",
      ),
    },
    {
      id: "board-b",
      label: copy("Approach", "Approach"),
      title: copy("Detail Oriented", "Detail Oriented"),
      body: copy(
        "Berorientasi pada detail, adaptif terhadap teknologi baru, dan fokus pada hasil akhir yang rapi baik di frontend maupun backend.",
        "Detail oriented, adaptive to new technologies, and focused on polished outcomes across both frontend and backend.",
      ),
    },
  ],
  about: {
    eyebrow: copy("About", "About"),
    title: copy(
      "AI driven full stack developer dengan fokus pada efisiensi, akurasi, dan inovasi.",
      "AI driven full stack developer focused on efficiency, accuracy, and innovation.",
    ),
    description: copy(
      "Saya adalah Muhammad Agha Prabaswara, seorang AI Driven Full Stack Developer berusia 16 tahun dengan dedikasi tinggi pada efisiensi dan inovasi teknologi. Saya teliti dalam menganalisis serta memahami arsitektur proyek, lalu menerjemahkan ide kompleks menjadi solusi yang fungsional, terstruktur, dan siap dipakai.",
      "I am Muhammad Agha Prabaswara, a 16-year-old AI Driven Full Stack Developer with strong dedication to efficiency and technology innovation. I am careful in analyzing and understanding project architecture, then turning complex ideas into functional, structured, and production-ready solutions.",
    ),
    metrics: [
      {
        label: copy("01", "01"),
        value: copy(
          "AI assisted development workflow",
          "AI assisted development workflow",
        ),
      },
      {
        label: copy("02", "02"),
        value: copy(
          "Strong project understanding",
          "Strong project understanding",
        ),
      },
      {
        label: copy("03", "03"),
        value: copy("High detail orientation", "High detail orientation"),
      },
    ],
  },
  profileBoard: {
    eyebrow: copy("Professional Summary", "Professional Summary"),
    title: copy(
      "Membangun produk digital modern dengan bantuan AI, analisis tajam, dan eksekusi yang rapi.",
      "Building modern digital products through AI-assisted workflow, sharp analysis, and clean execution.",
    ),
    summary: copy(
      "Nilai jual utama saya terletak pada kemampuan mengintegrasikan kecerdasan buatan premium secara langsung ke dalam workflow pengembangan. Pendekatan ini membantu saya mempercepat coding, melakukan debugging dengan akurasi tinggi, dan mengoptimalkan performa aplikasi web modern yang dibangun menggunakan React.js, Tailwind CSS, dan Vite.",
      "My main value lies in integrating premium artificial intelligence directly into the development workflow. This approach helps me accelerate coding, perform debugging with high accuracy, and optimize the performance of modern web applications built with React.js, Tailwind CSS, and Vite.",
    ),
    facts: [
      {
        label: copy("Role", "Role"),
        value: copy(
          "AI Driven, Full Stack Developer, Data Analyst",
          "AI Driven, Full Stack Developer, Data Analyst",
        ),
      },
      {
        label: copy("Age", "Age"),
        value: copy("16 years old", "16 years old"),
      },
      {
        label: copy("Focus", "Focus"),
        value: copy(
          "Frontend, Backend, AI Workflow, Data Insight",
          "Frontend, Backend, AI Workflow, Data Insight",
        ),
      },
      {
        label: copy("Strength", "Strength"),
        value: copy(
          "Detail oriented and adaptive",
          "Detail oriented and adaptive",
        ),
      },
    ],
    bullets: [
      copy(
        "Menggabungkan kemampuan coding dengan pemanfaatan premium AI untuk mempercepat delivery.",
        "Combining coding skill with premium AI usage to accelerate delivery.",
      ),
      copy(
        "Memiliki kemampuan analitis tajam dalam memahami kebutuhan proyek dari UI hingga backend.",
        "Possessing sharp analytical ability to understand project needs from UI to backend.",
      ),
      copy(
        "Berkomitmen membangun produk digital yang cepat, responsif, dan inovatif.",
        "Committed to building digital products that are fast, responsive, and innovative.",
      ),
      copy(
        "Adaptif terhadap teknologi baru dan fokus pada kualitas hasil akhir.",
        "Adaptive to new technologies and focused on final quality.",
      ),
    ],
  },
  typography: {
    eyebrow: copy("Typography", "Typography"),
    title: copy(
      "A contrast-driven type system with quiet supporting blocks.",
      "A contrast-driven type system with quiet supporting blocks.",
    ),
    cards: [
      {
        id: "typo-a",
        label: copy("Heading", "Heading"),
        note: copy(
          "Bold display scale for hero statements.",
          "Bold display scale for hero statements.",
        ),
      },
      {
        id: "typo-b",
        label: copy("Body", "Body"),
        note: copy(
          "Readable paragraphs with long-form rhythm.",
          "Readable paragraphs with long-form rhythm.",
        ),
      },
      {
        id: "typo-c",
        label: copy("Label", "Label"),
        note: copy(
          "Compact metadata and panel captions.",
          "Compact metadata and panel captions.",
        ),
      },
      {
        id: "typo-d",
        label: copy("Mono", "Mono"),
        note: copy(
          "System-like accents for structure cues.",
          "System-like accents for structure cues.",
        ),
      },
    ],
  },
  experience: {
    eyebrow: copy("Learning Journey", "Learning Journey"),
    intro: copy(
      "Perjalanan saat ini berfokus pada pembelajaran mandiri, eksplorasi teknologi modern, dan penguatan kemampuan dalam membangun produk digital end-to-end.",
      "The current journey focuses on self-driven learning, modern technology exploration, and strengthening the ability to build end-to-end digital products.",
    ),
    items: [
      {
        year: "2024",
        title: copy(
          "Frontend Foundation / Web Interface Focus",
          "Frontend Foundation / Web Interface Focus",
        ),
        body: copy(
          "Memperdalam fondasi frontend modern, responsive layout, dan pengembangan antarmuka yang interaktif.",
          "Deepening modern frontend fundamentals, responsive layout, and interactive interface development.",
        ),
      },
      {
        year: "2025",
        title: copy(
          "AI Workflow + Full Stack Exploration",
          "AI Workflow + Full Stack Exploration",
        ),
        body: copy(
          "Mulai menggabungkan workflow AI premium, debugging, integrasi API, dan eksplorasi data analysis dalam project digital.",
          "Started combining premium AI workflow, debugging, API integration, and data analysis exploration in digital projects.",
        ),
      },
    ],
    workJourney: {
      eyebrow: copy("Work Journey", "Work Journey"),
      title: copy(
        "Belum memiliki pengalaman kerja formal.",
        "No formal work experience yet.",
      ),
      description: copy(
        "Saat ini saya masih berfokus pada pembelajaran, eksplorasi project, dan penguatan skill teknis. Bagian ini akan diperbarui ketika sudah ada pengalaman kerja, freelance, organisasi, atau kolaborasi profesional yang relevan.",
        "I am currently focused on learning, project exploration, and strengthening technical skills. This section will be updated once there is relevant work, freelance, organization, or professional collaboration experience.",
      ),
    },
  },
  aiPremiumSection: {
    eyebrow: copy("AI Premium Value", "AI Premium Value"),
    title: copy(
      "Workflow AI premium yang mempercepat analisis, coding, dan debugging.",
      "A premium AI workflow that accelerates analysis, coding, and debugging.",
    ),
    intro: copy(
      "Saya menggunakan AI premium sebagai bagian langsung dari workflow kerja untuk membaca kebutuhan proyek lebih cepat, menyusun pendekatan yang lebih rapi, dan menjaga kualitas implementasi tetap presisi dari awal sampai delivery.",
      "I use premium AI as a direct part of the workflow to understand project requirements faster, shape cleaner approaches, and keep implementation quality precise from the first step through delivery.",
    ),
    valuePoints: [
      {
        label: copy("01", "01"),
        title: copy(
          "AI assisted project analysis",
          "AI assisted project analysis",
        ),
        body: copy(
          "Membantu membaca struktur masalah, kebutuhan fitur, dan prioritas implementasi dengan lebih cepat sebelum masuk ke tahap build.",
          "Helps read problem structure, feature requirements, and implementation priorities faster before moving into the build stage.",
        ),
      },
      {
        label: copy("02", "02"),
        title: copy(
          "Faster coding and refactoring",
          "Faster coding and refactoring",
        ),
        body: copy(
          "Mempercepat penulisan kode, perbaikan struktur, serta eksplorasi solusi tanpa melepas kontrol kualitas dan detail teknis.",
          "Speeds up coding, structural refactoring, and solution exploration without losing quality control or technical detail.",
        ),
      },
      {
        label: copy("03", "03"),
        title: copy("More accurate debugging", "More accurate debugging"),
        body: copy(
          "Memperkuat proses debugging, evaluasi logic flow, dan validasi implementasi agar hasil akhir lebih stabil dan relevan.",
          "Strengthens debugging, logic-flow review, and implementation validation so the final result is more stable and relevant.",
        ),
      },
    ],
    brands: [
      { name: "OpenAI", tilt: -11, offsetX: -10, offsetY: 0, depth: 28 },
      { name: "Gemini", tilt: 9, offsetX: 30, offsetY: -14, depth: 18 },
      { name: "Grok", tilt: -8, offsetX: 0, offsetY: 22, depth: 12 },
      { name: "Claude", tilt: 12, offsetX: 26, offsetY: 26, depth: 24 },
    ],
    footer: copy(
      "Menggunakan premium AI sebagai alat bantu berpikir, mempercepat, dan menjaga akurasi, bukan sekadar shortcut.",
      "Using premium AI as a thinking, acceleration, and accuracy tool, not merely as a shortcut.",
    ),
  },
  services: {
    eyebrow: copy("Expanded Skills", "Expanded Skills"),
    intro: copy(
      "Keahlian saya dibagi ke dalam tiga kelompok utama: pengembangan inti, workflow berbasis AI, serta kemampuan analitis dan project thinking.",
      "My skills are grouped into three main areas: core development, AI-driven workflow, and analytical plus project thinking capability.",
    ),
    items: [
      {
        id: "service-a",
        title: copy("Core Development", "Core Development"),
        body: copy(
          "Full Stack Web Development, React.js, Vite, responsive and interactive UI, API integration, database management, serta Git/GitHub workflow.",
          "Full Stack Web Development, React.js, Vite, responsive and interactive UI, API integration, database management, and Git/GitHub workflow.",
        ),
      },
      {
        id: "service-b",
        title: copy("AI Driven Workflow", "AI Driven Workflow"),
        body: copy(
          "AI assisted development, advanced prompt engineering, automated debugging, code refactoring, dan AI integration untuk fitur produk.",
          "AI assisted development, advanced prompt engineering, automated debugging, code refactoring, and AI integration for product features.",
        ),
      },
      {
        id: "service-c",
        title: copy("Project Thinking", "Project Thinking"),
        body: copy(
          "Project scoping, requirement analysis, problem solving, analytical thinking, ketelitian ekstra, dan adaptabilitas tinggi terhadap teknologi baru.",
          "Project scoping, requirement analysis, problem solving, analytical thinking, extra detail orientation, and high adaptability to new technology.",
        ),
      },
    ],
    capabilities: [
      copy("Full Stack Web Development", "Full Stack Web Development"),
      copy("React.js and Vite", "React.js and Vite"),
      copy("Tailwind CSS", "Tailwind CSS"),
      copy("AI Assisted Development", "AI Assisted Development"),
      copy("Advanced Prompt Engineering", "Advanced Prompt Engineering"),
      copy("Automated Debugging", "Automated Debugging"),
    ],
  },
  projects: [
    {
      id: "project-one",
      title: copy("Lorem Dashboard", "Lorem Dashboard"),
      tag: copy("Chosen Project", "Chosen Project"),
      role: copy("Full Stack Developer", "Full Stack Developer"),
      summary: copy(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit.",
      ),
      problem: copy(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quisque id diam vel quam elementum pulvinar etiam.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quisque id diam vel quam elementum pulvinar etiam.",
      ),
      solution: copy(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet facilisis magna etiam tempor orci eu lobortis elementum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet facilisis magna etiam tempor orci eu lobortis elementum.",
      ),
      impact: [
        copy("Lorem result one", "Lorem result one"),
        copy("Lorem result two", "Lorem result two"),
        copy("Lorem result three", "Lorem result three"),
      ],
      stack: ["React", "Tailwind", "Node.js", "SQL"],
      repoUrl: "https://github.com/yourhandle/project-one",
      demoUrl: "https://example.com/project-one",
      accent: "from-white/16 to-white/[0.03]",
      detail: {
        challenge: copy(
          "Lorem ipsum challenge statement placed here for temporary content.",
          "Lorem ipsum challenge statement placed here for temporary content.",
        ),
        architecture: [
          copy("Lorem architecture note one", "Lorem architecture note one"),
          copy("Lorem architecture note two", "Lorem architecture note two"),
          copy(
            "Lorem architecture note three",
            "Lorem architecture note three",
          ),
        ],
        outcome: [
          copy("Lorem outcome one", "Lorem outcome one"),
          copy("Lorem outcome two", "Lorem outcome two"),
          copy("Lorem outcome three", "Lorem outcome three"),
        ],
      },
    },
    {
      id: "project-two",
      title: copy("Ipsum Interface", "Ipsum Interface"),
      tag: copy("Prototype", "Prototype"),
      role: copy("AI Driven Designer", "AI Driven Designer"),
      summary: copy(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis nunc sed augue lacus viverra vitae congue eu consequat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis nunc sed augue lacus viverra vitae congue eu consequat.",
      ),
      problem: copy(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet risus nullam eget felis eget nunc lobortis.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet risus nullam eget felis eget nunc lobortis.",
      ),
      solution: copy(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae suscipit tellus mauris a diam maecenas sed enim ut.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae suscipit tellus mauris a diam maecenas sed enim ut.",
      ),
      impact: [
        copy("Ipsum result one", "Ipsum result one"),
        copy("Ipsum result two", "Ipsum result two"),
        copy("Ipsum result three", "Ipsum result three"),
      ],
      stack: ["Vite", "React", "Tailwind", "Motion"],
      repoUrl: "https://github.com/yourhandle/project-two",
      demoUrl: "https://example.com/project-two",
      accent: "from-zinc-200/14 to-white/[0.03]",
      detail: {
        challenge: copy(
          "Ipsum challenge statement placed here for temporary content.",
          "Ipsum challenge statement placed here for temporary content.",
        ),
        architecture: [
          copy("Ipsum architecture note one", "Ipsum architecture note one"),
          copy("Ipsum architecture note two", "Ipsum architecture note two"),
          copy(
            "Ipsum architecture note three",
            "Ipsum architecture note three",
          ),
        ],
        outcome: [
          copy("Ipsum outcome one", "Ipsum outcome one"),
          copy("Ipsum outcome two", "Ipsum outcome two"),
          copy("Ipsum outcome three", "Ipsum outcome three"),
        ],
      },
    },
    {
      id: "project-three",
      title: copy("Dolor System", "Dolor System"),
      tag: copy("Published", "Published"),
      role: copy("Data Analyst", "Data Analyst"),
      summary: copy(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat.",
      ),
      problem: copy(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dignissim sodales ut eu sem integer vitae justo.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dignissim sodales ut eu sem integer vitae justo.",
      ),
      solution: copy(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium.",
      ),
      impact: [
        copy("Dolor result one", "Dolor result one"),
        copy("Dolor result two", "Dolor result two"),
        copy("Dolor result three", "Dolor result three"),
      ],
      stack: ["SQL", "Python", "Dashboard", "Insights"],
      repoUrl: "https://github.com/yourhandle/project-three",
      demoUrl: "https://example.com/project-three",
      accent: "from-white/12 to-zinc-200/[0.04]",
      detail: {
        challenge: copy(
          "Dolor challenge statement placed here for temporary content.",
          "Dolor challenge statement placed here for temporary content.",
        ),
        architecture: [
          copy("Dolor architecture note one", "Dolor architecture note one"),
          copy("Dolor architecture note two", "Dolor architecture note two"),
          copy(
            "Dolor architecture note three",
            "Dolor architecture note three",
          ),
        ],
        outcome: [
          copy("Dolor outcome one", "Dolor outcome one"),
          copy("Dolor outcome two", "Dolor outcome two"),
          copy("Dolor outcome three", "Dolor outcome three"),
        ],
      },
    },
  ],
  bulletin: {
    eyebrow: copy("Bulletin Board", "Bulletin Board"),
    title: copy(
      "A quiet board for notes, labels, and structured fragments.",
      "A quiet board for notes, labels, and structured fragments.",
    ),
    code: `// ============================================
// Muhammad Agha Prabaswara - Portfolio Config
// AI Driven Full Stack Developer | Data Analyst
// ============================================

const profile = {
  name: "Muhammad Agha Prabaswara",
  role: "AI Driven Full Stack Developer",
  location: "Klaten, Indonesia",
  age: 16,
  email: "hello@placeholder.dev",
  availability: "Open to Build and Learn"
};

// Tech Stack & Skills
const techStack = {
  frontend: {
    core: ["React.js", "Vite", "TypeScript", "JavaScript"],
    styling: ["Tailwind CSS", "Framer Motion", "Three.js"],
    visualization: ["D3.js", "Chart.js", "Recharts"]
  },
  backend: {
    runtime: ["Node.js", "Express", "Python"],
    database: ["PostgreSQL", "Supabase", "MongoDB"],
    api: ["REST API", "GraphQL", "WebSocket"]
  },
  ai: {
    integration: ["OpenAI API", "LangChain", "Hugging Face"],
    workflow: ["Prompt Engineering", "RAG Pipeline", "AI Automation"]
  },
  analytics: {
    tools: ["Python", "Pandas", "NumPy", "SQL"],
    visualization: ["Power BI", "Looker Studio", "Matplotlib"]
  }
};

// Featured Projects
const projects = [
  {
    id: "smart-ops-dashboard",
    title: "Smart Ops Dashboard",
    description: "Dashboard operasional untuk monitoring KPI harian",
    role: "Full Stack Developer",
    stack: ["React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    impact: [
      "Mengurangi waktu laporan mingguan hingga 70%",
      "Deteksi anomaly operasional lebih cepat",
      "Visibilitas KPI lintas tim meningkat"
    ]
  },
  {
    id: "ai-support-workflow",
    title: "AI Support Workflow",
    description: "Workflow bantuan internal berbasis AI untuk support team",
    role: "AI Developer",
    stack: ["React", "OpenAI API", "Supabase", "Webhook"],
    impact: [
      "Memotong waktu triage tiket hingga 45%",
      "Konsistensi klasifikasi isu meningkat",
      "Beban manual tim support berkurang"
    ]
  },
  {
    id: "edu-data-platform",
    title: "Education Data Platform",
    description: "Platform manajemen data pendidikan terpusat",
    role: "Full Stack Developer",
    stack: ["React", "Vite", "Tailwind CSS", "Supabase"],
    impact: [
      "Query manual data berkurang signifikan",
      "Akses informasi lebih cepat",
      "Akurasi pelaporan internal meningkat"
    ]
  }
];

// Development Workflow
const workflow = {
  discovery: "Requirement analysis & project scoping",
  architecture: "System design & tech stack selection",
  development: "AI-assisted coding with debugging",
  testing: "Unit tests, integration tests, E2E",
  deployment: "CI/CD pipeline & monitoring setup"
};

// Core Principles
const principles = [
  "Build with clarity and purpose",
  "Design for performance & accessibility",
  "Use AI with intention, not dependency",
  "Turn data into actionable insights",
  "Continuous learning & adaptation"
];

// Export Builder Function
export default function buildPortfolio() {
  const portfolio = {
    profile,
    techStack,
    projects,
    workflow,
    principles,
    status: "open-to-build-and-learn",
    lastUpdated: new Date().toISOString()
  };

  console.log("Portfolio initialized:", portfolio);

  return portfolio;
}`,
    codeLines: [
      copy("// Profile Configuration", "// Profile Configuration"),
      copy("const profile = {", "const profile = {"),
      copy(
        '  name: "Muhammad Agha Prabaswara",',
        '  name: "Muhammad Agha Prabaswara",',
      ),
      copy(
        '  role: "AI Driven Full Stack Developer",',
        '  role: "AI Driven Full Stack Developer",',
      ),
      copy(
        '  location: "Klaten, Indonesia",',
        '  location: "Klaten, Indonesia",',
      ),
      copy("  age: 16,", "  age: 16,"),
      copy("};", "};"),
      copy("", ""),
      copy("// Skills & Technologies", "// Skills & Technologies"),
      copy("const skills = {", "const skills = {"),
      copy(
        '  frontend: ["React.js", "Vite", "Tailwind CSS", "Three.js"],',
        '  frontend: ["React.js", "Vite", "Tailwind CSS", "Three.js"],',
      ),
      copy(
        '  backend: ["Node.js", "Express", "Supabase", "PostgreSQL"],',
        '  backend: ["Node.js", "Express", "Supabase", "PostgreSQL"],',
      ),
      copy(
        '  ai: ["OpenAI API", "Prompt Engineering", "AI Workflow"],',
        '  ai: ["OpenAI API", "Prompt Engineering", "AI Workflow"],',
      ),
      copy(
        '  analytics: ["Python", "Pandas", "SQL", "Data Visualization"],',
        '  analytics: ["Python", "Pandas", "SQL", "Data Visualization"],',
      ),
      copy("};", "};"),
      copy("", ""),
      copy("// Projects Portfolio", "// Projects Portfolio"),
      copy("const projects = [", "const projects = ["),
      copy("  {", "  {"),
      copy('    id: "smart-ops-dashboard",', '    id: "smart-ops-dashboard",'),
      copy(
        '    title: "Smart Ops Dashboard",',
        '    title: "Smart Ops Dashboard",',
      ),
      copy(
        '    role: "Full Stack Developer",',
        '    role: "Full Stack Developer",',
      ),
      copy(
        '    stack: ["React", "Tailwind", "Node.js", "PostgreSQL"],',
        '    stack: ["React", "Tailwind", "Node.js", "PostgreSQL"],',
      ),
      copy("  },", "  },"),
      copy("  {", "  {"),
      copy('    id: "ai-support-workflow",', '    id: "ai-support-workflow",'),
      copy(
        '    title: "AI Support Workflow",',
        '    title: "AI Support Workflow",',
      ),
      copy('    role: "AI Developer",', '    role: "AI Developer",'),
      copy(
        '    stack: ["React", "OpenAI API", "Supabase"],',
        '    stack: ["React", "OpenAI API", "Supabase"],',
      ),
      copy("  },", "  },"),
      copy("];", "];"),
      copy("", ""),
      copy("// Export Main Function", "// Export Main Function"),
      copy(
        "export default function buildPortfolio() {",
        "export default function buildPortfolio() {",
      ),
      copy("  return {", "  return {"),
      copy("    profile,", "    profile,"),
      copy("    skills,", "    skills,"),
      copy("    projects,", "    projects,"),
      copy(
        '    status: "open-to-build-and-learn",',
        '    status: "open-to-build-and-learn",',
      ),
      copy("  };", "  };"),
      copy("}", "};"),
    ],
    badges: [
      copy("Readable", "Readable"),
      copy("Minimal", "Minimal"),
      copy("Structured", "Structured"),
      copy("Placeholder Ready", "Placeholder Ready"),
    ],
  },
  closing: {
    eyebrow: copy("Thank You", "Thank You"),
    title: copy("Thank you for watching.", "Thank you for watching."),
    meta: copy(
      "Project: Published Placeholder / April 2026",
      "Project: Published Placeholder / April 2026",
    ),
  },
  contact: {
    headline: copy(
      "Open for future placeholder collaborations.",
      "Open for future placeholder collaborations.",
    ),
    supportingText: copy(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Send a short note and the email will open automatically.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Send a short note and the email will open automatically.",
    ),
    channels: [
      {
        type: "email",
        label: copy("Email", "Email"),
        value: "hello@placeholder.dev",
        href: "mailto:hello@placeholder.dev",
      },
      {
        type: "github",
        label: copy("GitHub", "GitHub"),
        value: "github.com/placeholder",
        href: "https://github.com/placeholder",
      },
      {
        type: "linkedin",
        label: copy("LinkedIn", "LinkedIn"),
        value: "linkedin.com/in/placeholder",
        href: "https://linkedin.com/in/placeholder",
      },
    ],
  },
  ui: {
    nav: {
      about: copy("About", "About"),
      services: copy("Services", "Services"),
      projects: copy("Projects", "Projects"),
      contact: copy("Contact", "Contact"),
    },
    headerTag: copy("", ""),
    startConversation: copy("Contact", "Contact"),
    roleSignature: copy("Role Signature", "Role Signature"),
    identityFile: copy("identity.exe", "identity.exe"),
    positioning: copy("Positioning", "Positioning"),
    metricsLabel: copy("Quick Notes", "Quick Notes"),
    exploreLabel: copy("Explore Layout", "Explore Layout"),
    typographyLabel: copy("Typography", "Typography"),
    openCaseStudy: copy("Open Project Panel", "Open Project Panel"),
    quickMessage: copy("Quick Message", "Quick Message"),
    quickMessageTitle: copy(
      "Send a short placeholder brief.",
      "Send a short placeholder brief.",
    ),
    quickMessageDescription: copy(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This form prepares an email.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This form prepares an email.",
    ),
    form: {
      name: copy("Name", "Name"),
      email: copy("Email", "Email"),
      message: copy("Message", "Message"),
      namePlaceholder: copy("Lorem Ipsum", "Lorem Ipsum"),
      emailPlaceholder: copy("lorem@ipsum.dev", "lorem@ipsum.dev"),
      messagePlaceholder: copy(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ),
      error: copy(
        "Lengkapi nama, email, dan pesan terlebih dahulu.",
        "Please complete your name, email, and message first.",
      ),
      submit: copy("Send Email", "Send Email"),
      inquirySubject: copy("Inquiry dari", "Inquiry from"),
    },
    footer: {
      byline: copy(
        "Placeholder identity and content ready for replacement.",
        "Placeholder identity and content ready for replacement.",
      ),
      backToTop: copy("Back to top", "Back to top"),
      resume: copy("Resume", "Resume"),
    },
    modal: {
      close: copy("Close project details", "Close project details"),
      problem: copy("Problem", "Problem"),
      solution: copy("Solution", "Solution"),
      challenge: copy("Challenge", "Challenge"),
      architecture: copy("Architecture Notes", "Architecture Notes"),
      outcome: copy("Outcome", "Outcome"),
      repository: copy("Repository", "Repository"),
      livePreview: copy("Live Preview", "Live Preview"),
    },
    language: {
      id: "ID",
      en: "EN",
    },
  },
};
