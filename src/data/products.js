export const PRODUCTS = [
  // PROGRAMMING
  {
    id: "prog-java-1",
    title: "Java Core to Advanced Masterclass",
    description: "Complete handwritten notes covering everything from Java Basics to Multithreading, Collections, and JVM internals.",
    price: 399, usdPrice: 4.99, originalPrice: 699, usdOriginalPrice: 8.99,
    rating: 4.9, reviews: 145, sales: 500,
    category: "programming", subcategory: "Java", tags: ["java", "oop", "backend"],
    extension: "PDF",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    features: ["Handwritten", "Code Snippets", "Interview Qs"],
    lineCount: "250+ Pages", fileCount: 1,
    previewCode: "class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println(\"Hello\");\n  }\n}",
    included: ["High-Res PDF Notes", "Source Code Zip", "Interview Cheat Sheet"],
    syllabus: ["1. Introduction to JVM & Memory", "2. Object Oriented Programming (OOP)", "3. Exception Handling", "4. Java Collections Framework", "5. Multithreading & Concurrency"],
    previewImages: [
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800"
    ],
    featured: true
  },
  {
    id: "prog-react-1",
    title: "React 19 Hooks & Architecture",
    description: "Deep dive into modern React. Covers Server Components, Suspense, Custom Hooks, and state management.",
    price: 499, usdPrice: 5.99, originalPrice: 999, usdOriginalPrice: 12.99,
    rating: 4.8, reviews: 210, sales: 850,
    category: "programming", subcategory: "React", tags: ["react", "frontend", "hooks"],
    extension: "PDF",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    features: ["React 19 Ready", "Project Architecture", "Performance"],
    lineCount: "120+ Pages", fileCount: 2,
    previewCode: "export default function App() {\n  return <h1>Hello React</h1>;\n}",
    included: ["PDF Guide", "Starter Template", "Cheat Sheet"],
    syllabus: ["1. React Fundamentals & Virtual DOM", "2. Built-in Hooks (useState, useEffect, etc)", "3. Custom Hooks Design Patterns", "4. Server Components (RSC)", "5. Advanced State Management"],
    previewImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800"
    ],
    featured: true
  },
  {
    id: "prog-js-1",
    title: "JavaScript Advanced Concepts & DOM",
    description: "Master modern ES6+ JavaScript. Includes closures, promises, async/await, and deep DOM manipulation tricks.",
    price: 349, usdPrice: 3.99, originalPrice: 699, usdOriginalPrice: 8.99,
    rating: 4.9, reviews: 312, sales: 1100,
    category: "programming", subcategory: "JavaScript", tags: ["javascript", "frontend", "web"],
    extension: "PDF",
    thumbnail: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800",
    features: ["ES6+ Syntax", "Async Programming", "DOM Tricks"],
    lineCount: "150+ Pages", fileCount: 1,
    previewCode: "const fetchData = async () => {\n  const res = await fetch('/api');\n  return res.json();\n};",
    included: ["JS Concepts PDF", "Cheatsheet", "Project Source Code"],
    syllabus: ["1. ES6+ Features", "2. Execution Context & Closures", "3. Asynchronous JS & Promises", "4. DOM Manipulation", "5. Object Oriented JS"],
    previewImages: [
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800"
    ],
    featured: true
  },
  {
    id: "prog-py-1",
    title: "Python Pro: From Basics to Data Science",
    description: "Comprehensive Python notes covering syntax, OOP, Pandas, NumPy, and basic machine learning implementations.",
    price: 449, usdPrice: 4.99, originalPrice: 799, usdOriginalPrice: 10.99,
    rating: 4.8, reviews: 290, sales: 1500,
    category: "programming", subcategory: "Python", tags: ["python", "backend", "data science"],
    extension: "PDF",
    thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?auto=format&fit=crop&q=80&w=800",
    features: ["Pandas & NumPy", "ML Basics", "Scripts"],
    lineCount: "220+ Pages", fileCount: 2,
    previewCode: "import pandas as pd\ndf = pd.read_csv('data.csv')\nprint(df.head())",
    included: ["Python Guide PDF", "Jupyter Notebooks Zip", "Data Files"],
    syllabus: ["1. Python Basics & Data Structures", "2. OOP in Python", "3. Working with APIs", "4. Data Analysis with Pandas", "5. Intro to Scikit-Learn"],
    previewImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    ],
    featured: true
  },

  // SCIENCE (10th to 12th)
  {
    id: "sci-phys-12",
    title: "12th Physics Board Mastery Notes",
    description: "Complete handwritten notes for 12th Board Physics. Covers Electrostatics to Modern Physics with diagrams and derivations.",
    price: 299, usdPrice: 3.99, originalPrice: 599, usdOriginalPrice: 7.99,
    rating: 4.9, reviews: 340, sales: 1200,
    category: "science", subcategory: "Physics", tags: ["physics", "12th", "boards"],
    extension: "PDF",
    thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800",
    features: ["Handwritten", "Board Pattern", "All Derivations"],
    lineCount: "300+ Pages", fileCount: 1,
    previewCode: "F = G * (m1 * m2) / r^2\nE = mc^2",
    included: ["Complete PDF Notes", "Formula Sheet", "10 Years PYQs"],
    syllabus: ["1. Electrostatics & Capacitance", "2. Current Electricity", "3. Magnetic Effects of Current", "4. Electromagnetic Induction", "5. Optics (Ray & Wave)", "6. Modern Physics"],
    previewImages: [
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1603126857599-f6e15782afa5?auto=format&fit=crop&q=80&w=800"
    ],
    featured: true
  },
  {
    id: "sci-chem-10",
    title: "10th Chemistry Complete Revision",
    description: "Quick revision notes for 10th standard Chemistry. Includes reaction balancing, acids bases, and carbon compounds.",
    price: 149, usdPrice: 1.99, originalPrice: 299, usdOriginalPrice: 3.99,
    rating: 4.7, reviews: 89, sales: 400,
    category: "science", subcategory: "Chemistry", tags: ["chemistry", "10th", "boards"],
    extension: "PDF",
    thumbnail: "https://images.unsplash.com/photo-1603126857599-f6e15782afa5?auto=format&fit=crop&q=80&w=800",
    features: ["Mind Maps", "Reaction Charts", "To the Point"],
    lineCount: "80+ Pages", fileCount: 1,
    previewCode: "2H2 + O2 -> 2H2O",
    included: ["PDF Notes", "Reaction Cheat Sheet"],
    syllabus: ["1. Chemical Reactions and Equations", "2. Acids, Bases and Salts", "3. Metals and Non-Metals", "4. Carbon and its Compounds", "5. Periodic Classification"],
    previewImages: [
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800"
    ],
    featured: false
  },

  // B-TECH
  {
    id: "btech-dsa-1",
    title: "Data Structures & Algorithms in C++",
    description: "Ultimate placement preparation notes for DSA. Covers trees, graphs, DP, and standard interview problems.",
    price: 599, usdPrice: 7.99, originalPrice: 1299, usdOriginalPrice: 15.99,
    rating: 5.0, reviews: 512, sales: 2300,
    category: "btech", subcategory: "Data Structures", tags: ["btech", "dsa", "placements", "c++"],
    extension: "PDF",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    features: ["Placement Ready", "Visualizations", "C++ Code"],
    lineCount: "400+ Pages", fileCount: 3,
    previewCode: "void dfs(int v) {\n  visited[v] = true;\n  for(int u : adj[v])\n    if(!visited[u]) dfs(u);\n}",
    included: ["DSA Theory PDF", "Top 100 Codes PDF", "Time Complexity Chart"],
    syllabus: ["1. Array & String Manipulation", "2. Linked Lists, Stacks, Queues", "3. Trees & Binary Search Trees", "4. Graph Algorithms (BFS, DFS, Dijkstra)", "5. Dynamic Programming"],
    previewImages: [
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?auto=format&fit=crop&q=80&w=800"
    ],
    featured: true
  },

  // COMMERCE
  {
    id: "comm-acc-12",
    title: "12th Accountancy Full Course",
    description: "Detailed ledger formats, partnership accounts, company accounts, and cash flow statements.",
    price: 349, usdPrice: 4.99, originalPrice: 699, usdOriginalPrice: 8.99,
    rating: 4.8, reviews: 150, sales: 620,
    category: "commerce", subcategory: "Accountancy", tags: ["commerce", "accounts", "12th"],
    extension: "PDF",
    thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    features: ["Format Tables", "Step-by-step solutions", "Board Qs"],
    lineCount: "280+ Pages", fileCount: 1,
    previewCode: "Assets = Liabilities + Equity",
    included: ["Main Theory PDF", "Numerical Workbook"],
    syllabus: ["1. Partnership Accounts (Fundamentals to Dissolution)", "2. Company Accounts (Issue of Shares/Debentures)", "3. Financial Statements Analysis", "4. Cash Flow Statement"],
    previewImages: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
    ],
    featured: false
  },

  // MBA
  {
    id: "mba-strat-1",
    title: "Strategic Management Case Studies",
    description: "Premium notes covering Porter's Five Forces, SWOT, Blue Ocean strategy with real-world case studies.",
    price: 499, usdPrice: 6.99, originalPrice: 899, usdOriginalPrice: 11.99,
    rating: 4.7, reviews: 90, sales: 300,
    category: "mba", subcategory: "Strategic Management", tags: ["mba", "strategy", "management"],
    extension: "PDF",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    features: ["Case Studies", "Frameworks", "Exam Ready"],
    lineCount: "150+ Pages", fileCount: 1,
    previewCode: "SWOT: Strengths, Weaknesses, Opportunities, Threats",
    included: ["Strategic Frameworks PDF", "15 Case Studies Pack"],
    syllabus: ["1. Introduction to Strategic Management", "2. Environmental Scanning & Industry Analysis", "3. Strategy Formulation (Corporate & Business level)", "4. Strategy Implementation", "5. Strategic Evaluation & Control"],
    previewImages: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
    ],
    featured: false
  },

  // LLB
  {
    id: "llb-crim-1",
    title: "Criminal Law (IPC & CrPC) Summary",
    description: "Comprehensive notes on Indian Penal Code and Criminal Procedure Code with landmark judgments.",
    price: 399, usdPrice: 5.99, originalPrice: 799, usdOriginalPrice: 10.99,
    rating: 4.9, reviews: 110, sales: 420,
    category: "llb", subcategory: "Criminal Law", tags: ["llb", "law", "criminal"],
    extension: "PDF",
    thumbnail: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
    features: ["Landmark Cases", "Section-wise Breakdown", "Bare Act Summaries"],
    lineCount: "350+ Pages", fileCount: 1,
    previewCode: "Actus non facit reum nisi mens sit rea",
    included: ["IPC Notes", "CrPC Notes", "Important Judgments Sheet"],
    syllabus: ["1. Fundamentals of Criminal Liability", "2. General Exceptions (Sec 76-106)", "3. Offences against Human Body", "4. Offences against Property", "5. Basics of Criminal Procedure"],
    previewImages: [
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800"
    ],
    featured: false
  },
  
  // B.Sc
  {
    id: "bsc-math-1",
    title: "B.Sc Mathematics - Real Analysis",
    description: "In-depth notes on Real Analysis covering sequences, series, continuity, and differentiability.",
    price: 299, usdPrice: 3.99, originalPrice: 599, usdOriginalPrice: 7.99,
    rating: 4.8, reviews: 75, sales: 210,
    category: "bsc", subcategory: "Mathematics", tags: ["bsc", "maths", "real analysis"],
    extension: "PDF",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    features: ["Theorems Proofs", "Solved Examples", "University Pattern"],
    lineCount: "180+ Pages", fileCount: 1,
    previewCode: "lim(n->inf) (1 + 1/n)^n = e",
    included: ["Real Analysis Notes PDF", "Theorem Proofs Guide"],
    syllabus: ["1. Real Number System & Topology", "2. Sequences and Series", "3. Limits & Continuity", "4. Differentiability", "5. Riemann Integration"],
    previewImages: [
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800"
    ],
    featured: false
  },

  // PHARMACY
  {
    id: "bpharma-pharm-1",
    title: "Pharmacology I Complete Notes",
    description: "Detailed pharmacology notes covering pharmacokinetics, pharmacodynamics, and drugs acting on ANS.",
    price: 349, usdPrice: 4.49, originalPrice: 699, usdOriginalPrice: 8.99,
    rating: 4.9, reviews: 88, sales: 250,
    category: "bpharma", subcategory: "Pharmacology", tags: ["bpharma", "pharmacology", "drugs"],
    extension: "PDF",
    thumbnail: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=800",
    features: ["Mechanism of Action", "Classification Tables", "Flowcharts"],
    lineCount: "210+ Pages", fileCount: 1,
    previewCode: "ADME: Absorption, Distribution, Metabolism, Excretion",
    included: ["Main Notes PDF", "Drug Classification Charts"],
    syllabus: ["1. General Pharmacology", "2. Pharmacokinetics", "3. Pharmacodynamics", "4. Pharmacology of Peripheral Nervous System", "5. Drugs acting on Central Nervous System"],
    previewImages: [
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800"
    ],
    featured: false
  },

  // ARTS
  {
    id: "arts-hist-1",
    title: "Modern Indian History Exhaustive Notes",
    description: "From the advent of Europeans to Independence. Covers all major movements, governor generals, and acts.",
    price: 199, usdPrice: 2.99, originalPrice: 399, usdOriginalPrice: 5.99,
    rating: 4.8, reviews: 142, sales: 480,
    category: "arts", subcategory: "History", tags: ["arts", "history", "modern india"],
    extension: "PDF",
    thumbnail: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=800",
    features: ["Timeline Charts", "Key Personalities", "Mains Ready"],
    lineCount: "250+ Pages", fileCount: 1,
    previewCode: "1857: The First War of Independence",
    included: ["Modern History PDF", "Timeline Cheat Sheet"],
    syllabus: ["1. Advent of Europeans & Consolidation of British Power", "2. Rising Resentment & Revolt of 1857", "3. Socio-Religious Reform Movements", "4. Indian National Congress & Moderate Phase", "5. Extremist Phase & Gandhian Era", "6. Towards Independence & Partition"],
    previewImages: [
      "https://images.unsplash.com/photo-1447069387366-2a45656113b2?auto=format&fit=crop&q=80&w=800"
    ],
    featured: false
  }
];

export const SERVICES_LIST = [
  {
    id: "landing-page",
    title: "Custom Landing Page / Portfolio",
    timeline: "3–5 Days",
    idealFor: "Educators, Creators, Freelancers & Small Businesses",
    features: [
      "Custom responsive design (No generic templates)",
      "High performance & fast loading speed",
      "SEO optimized structure & meta tags",
      "Contact form & social integration"
    ]
  },
  {
    id: "full-website",
    title: "Multi-Page Corporate / Business Site",
    timeline: "1–2 Weeks",
    idealFor: "Startups, Agencies & Local Businesses",
    features: [
      "Custom multi-page navigation architecture",
      "Interactive UI components & subtle animations",
      "Content management integration",
      "Full mobile & desktop responsiveness"
    ]
  },
  {
    id: "web-app",
    title: "Custom React Web Application",
    timeline: "2–4 Weeks",
    idealFor: "SaaS Products, Dashboards & Platforms",
    features: [
      "React + Vite modern component architecture",
      "API integrations & state management",
      "Authentication & payment gateway setup",
      "Clean, modular codebase handoff"
    ]
  }
];
