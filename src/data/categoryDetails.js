export const CATEGORY_DETAILS = {
  frontend: {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Master the art of building beautiful, interactive user interfaces. Cover everything from HTML/CSS to advanced React hooks and Next.js.",
    coverImage: "/images/cat_programming.jpg",
    accentColor: "var(--accent-light)",
    syllabus: [
      {
        title: "HTML & CSS",
        topics: ["Semantic HTML5 Structure", "CSS3 Flexbox & Grid", "Responsive Web Design", "Animations & Keyframes"]
      },
      {
        title: "JavaScript",
        topics: ["ES6+ Modern Syntax", "DOM Manipulation", "Promises & Async/Await", "Closures & Event Loop"]
      },
      {
        title: "React JS",
        topics: ["Component Architecture", "React Hooks (useState, useEffect)", "State Management", "Next.js Basics"]
      }
    ]
  },
  backend: {
    id: "backend",
    title: "Backend Development",
    description: "Build robust, scalable server-side applications. Learn Java, Node.js, API design, and database management for enterprise systems.",
    coverImage: "/images/cat_science.jpg",
    accentColor: "var(--cyan)",
    syllabus: [
      {
        title: "Java",
        topics: ["Core Java & OOPs", "Multithreading & Concurrency", "Spring Boot Framework", "JVM Architecture"]
      },
      {
        title: "Python",
        topics: ["Python Fundamentals", "Django & FastAPI", "Data Processing", "Scripting & Automation"]
      },
      {
        title: "Node.js & Databases",
        topics: ["Express.js APIs", "MongoDB & Mongoose", "PostgreSQL", "JWT Authentication"]
      }
    ]
  },
  data_science: {
    id: "data_science",
    title: "Data Science & AI",
    description: "Dive into the world of data processing, machine learning, and artificial intelligence using Python and its powerful libraries.",
    coverImage: "/images/cat_math.jpg",
    accentColor: "var(--amber)",
    syllabus: [
      {
        title: "Data Manipulation",
        topics: ["Python Fundamentals", "Numpy Arrays", "Pandas DataFrames", "Data Cleaning Techniques"]
      },
      {
        title: "Data Visualization",
        topics: ["Matplotlib", "Seaborn", "Interactive Dashboards", "Statistical Analysis"]
      },
      {
        title: "Machine Learning Basics",
        topics: ["Scikit-Learn", "Linear Regression", "Classification Algorithms", "Model Evaluation"]
      }
    ]
  },
  dsa: {
    id: "dsa",
    title: "Data Structures & Algorithms",
    description: "Crack top tech interviews with comprehensive DSA notes. Learn optimization techniques, graph algorithms, and dynamic programming.",
    coverImage: "/images/cat_commerce.jpg",
    accentColor: "var(--green)",
    syllabus: [
      {
        title: "Basic Data Structures",
        topics: ["Arrays & Strings", "Linked Lists", "Stacks & Queues", "Hash Tables"]
      },
      {
        title: "Advanced Structures",
        topics: ["Trees & Binary Search Trees", "Heaps & Priority Queues", "Graphs (BFS/DFS)", "Tries"]
      },
      {
        title: "Algorithms",
        topics: ["Sorting & Searching", "Dynamic Programming", "Greedy Algorithms", "Backtracking"]
      }
    ]
  }
};
