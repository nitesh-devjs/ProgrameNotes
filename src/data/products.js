export const PRODUCTS = [
  // BACKEND
  {
    id: "prog-backend-1",
    title: "Backend Fullcourse Masterclass",
    description: "Complete premium notes covering everything from Java Basics, Node.js, Multithreading, APIs, and JVM internals.",
    price: 399, usdPrice: 4.99, originalPrice: 699, usdOriginalPrice: 8.99,
    rating: 4.9, reviews: 145, sales: 500,
    category: "backend", subcategory: "Java", tags: ["java", "oop", "backend"],
    extension: "PDF",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    features: ["Professional", "Code Snippets", "Interview Qs"],
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
  // FRONTEND
  {
    id: "prog-html-css",
    title: "HTML5 & CSS3 Modern UI Mastery",
    description: "Learn to build stunning, responsive websites. Covers Flexbox, Grid, Animations, and professional UI/UX principles.",
    price: 299, usdPrice: 3.99, originalPrice: 599, usdOriginalPrice: 7.99,
    rating: 4.8, reviews: 156, sales: 620,
    category: "frontend", subcategory: "HTML/CSS", tags: ["html", "css", "frontend", "ui"],
    extension: "PDF",
    thumbnail: "https://images.unsplash.com/photo-1507721999580-f1f440d43702?auto=format&fit=crop&q=80&w=800",
    features: ["CSS Animations", "Flexbox & Grid", "Responsive Design"],
    lineCount: "180+ Pages", fileCount: 1,
    previewCode: ".container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n}",
    included: ["PDF UI Guide", "Code Snippets", "Figma Templates"],
    syllabus: ["1. Semantic HTML5", "2. CSS Fundamentals", "3. Flexbox & CSS Grid", "4. Animations & Keyframes", "5. Responsive Media Queries"],
    previewImages: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
    ],
    featured: true
  },
  {
    id: "prog-react-1",
    title: "React 19 Hooks & Architecture",
    description: "Deep dive into modern React. Covers Server Components, Suspense, Custom Hooks, and state management.",
    price: 499, usdPrice: 5.99, originalPrice: 999, usdOriginalPrice: 12.99,
    rating: 4.8, reviews: 210, sales: 850,
    category: "frontend", subcategory: "React", tags: ["react", "frontend", "hooks"],
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
    category: "frontend", subcategory: "JavaScript", tags: ["javascript", "frontend", "web"],
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
  // DATA SCIENCE
  {
    id: "prog-py-1",
    title: "Python Pro: From Basics to Data Science",
    description: "Comprehensive Python notes covering syntax, OOP, Pandas, NumPy, and basic machine learning implementations.",
    price: 449, usdPrice: 4.99, originalPrice: 799, usdOriginalPrice: 10.99,
    rating: 4.8, reviews: 290, sales: 1500,
    category: "data_science", subcategory: "Python", tags: ["python", "backend", "data science"],
    extension: "PDF",
    thumbnail: "/images/python_pro.jpg",
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
  // DSA
  {
    id: "btech-dsa-1",
    title: "Data Structures & Algorithms in C++",
    description: "Ultimate placement preparation notes for DSA. Covers trees, graphs, DP, and standard interview problems.",
    price: 599, usdPrice: 7.99, originalPrice: 1299, usdOriginalPrice: 15.99,
    rating: 5.0, reviews: 512, sales: 2300,
    category: "dsa", subcategory: "Data Structures", tags: ["dsa", "placements", "c++"],
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
