export const LANGUAGE_DETAILS = {
  python: {
    id: "python",
    name: "Python",
    icon: "🐍",
    color: "#3b82f6",
    tagline: "The language of Data Science and AI.",
    description: "Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace.",
    history: "Python was conceived in the late 1980s as a successor to the ABC language. Python 2.0 was released in 2000, introducing features like list comprehensions and a garbage collection system with reference counting. Python 3.0, released in 2008, was a major revision of the language that is not completely backward-compatible.",
    keyFeatures: ["Easy to Learn and Use", "Expressive Language", "Interpreted Language", "Cross-platform Language", "Free and Open Source", "Object-Oriented Language", "Large Standard Library", "GUI Programming Support", "Dynamically Typed"],
    useCases: ["Data Science", "Machine Learning", "Web Development (Django/Flask)", "Automation/Scripting", "Web Scraping", "Game Development"],
    codeSnippet: `def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

print(list(fibonacci(10)))`,
    stats: [
      { label: "Avg Salary", value: "$125k" },
      { label: "Difficulty", value: "Beginner Friendly" },
      { label: "Community", value: "Massive" }
    ],
    relatedProductId: "prog-py-1"
  },
  java: {
    id: "java",
    name: "Java",
    icon: "☕",
    color: "#ef4444",
    tagline: "Write Once, Run Anywhere.",
    description: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA).",
    history: "James Gosling, Mike Sheridan, and Patrick Naughton initiated the Java language project in June 1991. The language was initially called Oak after an oak tree that stood outside Gosling's office.",
    keyFeatures: ["Object-Oriented", "Platform Independent", "Simple", "Secure", "Architecture-neutral", "Portable", "Robust", "Multithreaded", "High Performance"],
    useCases: ["Enterprise Applications", "Android App Development", "Web Applications", "Big Data Technologies", "Cloud-based Applications", "Embedded Systems"],
    codeSnippet: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Enterprise World!");
    }
}`,
    stats: [
      { label: "Avg Salary", value: "$115k" },
      { label: "Difficulty", value: "Moderate" },
      { label: "Enterprise", value: "Standard" }
    ],
    relatedProductId: "prog-backend-1"
  },
  javascript: {
    id: "javascript",
    name: "JavaScript",
    icon: "⚡",
    color: "#eab308",
    tagline: "The language of the Web.",
    description: "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.",
    history: "JavaScript was invented by Brendan Eich in 1995. It was developed for Netscape 2, and became the ECMA-262 standard in 1997. After Netscape handed JavaScript over to ECMA, the Mozilla foundation continued to develop JavaScript for the Firefox browser.",
    keyFeatures: ["Light Weight", "Interpreted", "Object-Oriented capability", "First Class Functions", "Client-side and Server-side execution", "Dynamic Typing", "Event Handling"],
    useCases: ["Web Development", "Server Applications", "Mobile Apps (React Native)", "Game Development", "Presentations", "Smartwatch Apps"],
    codeSnippet: `const fetchUserData = async (id) => {
    try {
        const response = await fetch(\`/api/users/\${id}\`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
    }
};`,
    stats: [
      { label: "Avg Salary", value: "$110k" },
      { label: "Difficulty", value: "Beginner Friendly" },
      { label: "Popularity", value: "#1 Worldwide" }
    ],
    relatedProductId: "prog-js-1"
  },
  c: {
    id: "c",
    name: "C Language",
    icon: "💻",
    color: "#2563eb",
    tagline: "The mother of all modern languages.",
    description: "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.",
    history: "C was originally developed at Bell Labs by Dennis Ritchie between 1972 and 1973 to make utilities running on Unix. Later, it was applied to re-implementing the kernel of the Unix operating system.",
    keyFeatures: ["Procedural Language", "Fast and Efficient", "Statically Typed", "Extensibility", "Rich Library", "Pointers", "Memory Management"],
    useCases: ["Operating Systems", "Embedded Systems", "GUI Applications", "Compilers", "Databases", "Gaming Animation"],
    codeSnippet: `#include <stdio.h>
int main() {
   printf("Hello, World!");
   return 0;
}`,
    stats: [
      { label: "Avg Salary", value: "$105k" },
      { label: "Difficulty", value: "Hard" },
      { label: "Performance", value: "Ultra Fast" }
    ],
    relatedProductId: null
  },
  cpp: {
    id: "cpp",
    name: "C++",
    icon: "⚙️",
    color: "#a855f7",
    tagline: "Performance meets Object-Oriented power.",
    description: "C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or 'C with Classes'.",
    history: "Bjarne Stroustrup began working on C with Classes in 1979. The language was renamed to C++ in 1983. New features were added including virtual functions, function name and operator overloading, references, constants, user-controlled free-store memory control, improved type checking, and BCPL style single-line comments.",
    keyFeatures: ["Object-Oriented", "Machine Independent", "Simple", "High Level", "Popular", "Case-sensitive", "Compiler Based", "Dynamic Memory Allocation", "Memory Management"],
    useCases: ["Game Development", "Advanced Computations", "Graphics", "Operating Systems", "Enterprise Software", "Browsers"],
    codeSnippet: `#include <iostream>
using namespace std;

class MyClass {
  public:
    void myMethod() {
      cout << "Hello World!";
    }
};`,
    stats: [
      { label: "Avg Salary", value: "$120k" },
      { label: "Difficulty", value: "Hard" },
      { label: "Usage", value: "Games & Systems" }
    ],
    relatedProductId: "btech-dsa-1"
  },
  r: {
    id: "r",
    name: "R",
    icon: "📊",
    color: "#10b981",
    tagline: "Statistical computing and graphics.",
    description: "R is a programming language for statistical computing and graphics supported by the R Core Team and the R Foundation for Statistical Computing.",
    history: "R was created by Ross Ihaka and Robert Gentleman at the University of Auckland, New Zealand, and is currently developed by the R Development Core Team. R made its first appearance in 1993.",
    keyFeatures: ["Comprehensive Statistical Analysis", "Powerful Graphics", "Open Source", "Cross-Platform", "Highly Extensible", "Data Handling", "Machine Learning Capabilities"],
    useCases: ["Data Analysis", "Statistical Modeling", "Data Visualization", "Machine Learning", "Bioinformatics", "Quantitative Finance"],
    codeSnippet: `x <- c(1, 2, 3, 4, 5, 6)
y <- x^2
plot(x, y, main="Plot of x vs x^2", xlab="x", ylab="y", col="red")`,
    stats: [
      { label: "Avg Salary", value: "$118k" },
      { label: "Difficulty", value: "Moderate" },
      { label: "Niche", value: "Data Science" }
    ],
    relatedProductId: null
  },
  typescript: {
    id: "typescript",
    name: "TypeScript",
    icon: "📘",
    color: "#3178c6",
    tagline: "JavaScript that scales.",
    description: "TypeScript is a free and open-source high-level programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.",
    history: "TypeScript was made public in October 2012, after two years of internal development at Microsoft. Anders Hejlsberg, lead architect of C# and creator of Delphi and Turbo Pascal, worked on the development of TypeScript.",
    keyFeatures: ["Static Typing", "Object-Oriented Features", "Compile-time Errors", "Excellent Tooling Support", "Cross-Platform", "ECMAScript Compatibility", "Optional Typing"],
    useCases: ["Large Scale Web Apps", "Angular Development", "React/Next.js Projects", "Node.js Backends", "Library Development"],
    codeSnippet: `interface User {
  id: number;
  name: string;
}
const user: User = { id: 1, name: "Nitesh" };
console.log(user.name);`,
    stats: [
      { label: "Avg Salary", value: "$125k" },
      { label: "Difficulty", value: "Moderate" },
      { label: "Adoption", value: "Rapidly Growing" }
    ],
    relatedProductId: null
  },
  csharp: {
    id: "csharp",
    name: "C#",
    icon: "🟣",
    color: "#9333ea",
    tagline: "Modern, object-oriented, and type-safe.",
    description: "C# (pronounced 'C sharp') is a general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.",
    history: "C# was developed around 2000 by Microsoft as part of its .NET initiative and later approved as an international standard by Ecma and ISO. Anders Hejlsberg led the development team.",
    keyFeatures: ["Object-Oriented", "Type-safe", "Interoperability", "Scalable and Updateable", "Component Oriented", "Structured Language", "Rich Library"],
    useCases: ["Windows Desktop Apps", "Web Development (.NET)", "Game Development (Unity)", "Mobile Apps (Xamarin)", "Cloud Services", "Enterprise Software"],
    codeSnippet: `using System;
namespace HelloWorld {
  class Program {
    static void Main(string[] args) {
      Console.WriteLine("Hello World!");
    }
  }
}`,
    stats: [
      { label: "Avg Salary", value: "$112k" },
      { label: "Difficulty", value: "Moderate" },
      { label: "Ecosystem", value: "Microsoft .NET" }
    ],
    relatedProductId: null
  },
  swift: {
    id: "swift",
    name: "Swift",
    icon: "🐦",
    color: "#f97316",
    tagline: "The modern language for Apple ecosystems.",
    description: "Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. and the open-source community, first released in 2014. Swift was developed as a replacement for Apple's earlier programming language Objective-C.",
    history: "Development of Swift started in July 2010 by Chris Lattner, with the eventual collaboration of many other programmers at Apple. Swift was introduced at Apple's 2014 Worldwide Developers Conference.",
    keyFeatures: ["Fast and Powerful", "Modern Syntax", "Safe by Design", "Open Source", "Interactive Playgrounds", "Objective-C Interoperability", "Memory Management (ARC)"],
    useCases: ["iOS App Development", "macOS Applications", "watchOS Development", "tvOS Apps", "Server-side Swift (Vapor)"],
    codeSnippet: `struct Player {
    var name: String
    var score: Int
}
var p1 = Player(name: "Nitesh", score: 100)
print("Score: \\(p1.score)")`,
    stats: [
      { label: "Avg Salary", value: "$130k" },
      { label: "Difficulty", value: "Moderate" },
      { label: "Platform", value: "Apple Exclusive" }
    ],
    relatedProductId: null
  },
  php: {
    id: "php",
    name: "PHP",
    icon: "🐘",
    color: "#6366f1",
    tagline: "Powering the vast majority of the web.",
    description: "PHP is a general-purpose scripting language geared towards web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994.",
    history: "PHP development began in 1994 when Rasmus Lerdorf wrote several Common Gateway Interface (CGI) programs in C, which he used to maintain his personal homepage. The PHP reference implementation is now produced by The PHP Group.",
    keyFeatures: ["Server-side Scripting", "Open Source", "Easy to Learn", "Cross-Platform Compatibility", "Database Integration", "Large Community", "Frameworks (Laravel, Symfony)"],
    useCases: ["Web Applications", "Content Management Systems (WordPress)", "E-commerce Platforms", "REST APIs", "Command Line Scripting"],
    codeSnippet: `<?php
class Car {
  public $color;
  public function __construct($color) {
    $this->color = $color;
  }
}
$myCar = new Car("red");
echo $myCar->color;
?>`,
    stats: [
      { label: "Avg Salary", value: "$95k" },
      { label: "Difficulty", value: "Beginner Friendly" },
      { label: "Usage", value: "70% of Web" }
    ],
    relatedProductId: null
  },
  rust: {
    id: "rust",
    name: "Rust",
    icon: "🦀",
    color: "#ea580c",
    tagline: "Empowering everyone to build reliable and efficient software.",
    description: "Rust is a multi-paradigm, general-purpose programming language designed for performance and safety, especially safe concurrency. Rust is syntactically similar to C++, but can guarantee memory safety by using a borrow checker to validate references.",
    history: "Rust grew out of a personal project begun in 2006 by Mozilla employee Graydon Hoare. Mozilla began sponsoring the project in 2009 and announced it in 2010.",
    keyFeatures: ["Memory Safety", "Fearless Concurrency", "Zero-cost Abstractions", "Pattern Matching", "Type Inference", "Minimal Runtime", "Cargo Package Manager"],
    useCases: ["System Programming", "WebAssembly", "Network Services", "Embedded Systems", "Blockchain Development", "Game Engines"],
    codeSnippet: `fn main() {
    let mut vec = Vec::new();
    vec.push(1);
    vec.push(2);
    println!("Vector: {:?}", vec);
}`,
    stats: [
      { label: "Avg Salary", value: "$140k" },
      { label: "Difficulty", value: "Hard" },
      { label: "Loved", value: "#1 on StackOverflow" }
    ],
    relatedProductId: null
  },
  ruby: {
    id: "ruby",
    name: "Ruby",
    icon: "♦️",
    color: "#dc2626",
    tagline: "A programmer's best friend.",
    description: "Ruby is an interpreted, high-level, general-purpose programming language which encompasses multiple programming paradigms. It was designed with an emphasis on programming productivity and simplicity.",
    history: "Ruby was conceived and developed in the mid-1990s by Yukihiro 'Matz' Matsumoto in Japan. It was designed to have a syntax that is easy to read and write for humans, while remaining powerful and flexible.",
    keyFeatures: ["Pure Object-Oriented", "Dynamic Typing", "Duck Typing", "Garbage Collection", "Mixins", "Expressive Syntax", "Metaprogramming"],
    useCases: ["Web Development (Ruby on Rails)", "Automation", "DevOps Tools (Chef, Puppet)", "Web Scraping", "Data Processing"],
    codeSnippet: `class Greeter
  def initialize(name)
    @name = name
  end
  def salute
    puts "Hello #{@name}!"
  end
end
g = Greeter.new("World")
g.salute`,
    stats: [
      { label: "Avg Salary", value: "$120k" },
      { label: "Difficulty", value: "Beginner Friendly" },
      { label: "Framework", value: "Rails" }
    ],
    relatedProductId: null
  },
  dart: {
    id: "dart",
    name: "Dart",
    icon: "🎯",
    color: "#0284c7",
    tagline: "Client-optimized language for fast apps on any platform.",
    description: "Dart is a programming language designed for client development, such as for the web and mobile apps. It is developed by Google and can also be used to build server and desktop applications.",
    history: "Dart was unveiled at the GOTO conference in Aarhus, Denmark, October 10–12, 2011. The project was founded by Lars Bak and Kasper Lund.",
    keyFeatures: ["Optimized for UI", "Productive Development", "Fast on all Platforms", "Sound Null Safety", "JIT and AOT Compilation", "Object-Oriented", "C-style Syntax"],
    useCases: ["Mobile Apps (Flutter)", "Web Applications", "Desktop Apps", "Server-side Applications"],
    codeSnippet: `void main() {
  for (int i = 0; i < 5; i++) {
    print('hello \${i + 1}');
  }
}`,
    stats: [
      { label: "Avg Salary", value: "$110k" },
      { label: "Difficulty", value: "Moderate" },
      { label: "Framework", value: "Flutter" }
    ],
    relatedProductId: null
  },
  "html-css": {
    id: "html-css",
    name: "HTML & CSS",
    icon: "🌐",
    color: "#f97316",
    tagline: "The building blocks of the Web.",
    description: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML.",
    history: "HTML was created by Tim Berners-Lee in 1991. CSS was proposed by Håkon Wium Lie on October 10, 1994. Together, they have evolved through numerous versions to become the modern foundation of the World Wide Web.",
    keyFeatures: ["Semantic Structure", "Responsive Design (Media Queries)", "Flexbox & Grid Layouts", "Animations & Transitions", "Accessibility (a11y)", "Cross-Browser Support"],
    useCases: ["Web Page Structure", "UI Design", "Email Templates", "Static Websites", "Frontend Architecture"],
    codeSnippet: `<div class="card">
  <h1>Hello Web</h1>
  <style>
    .card { color: blue; }
  </style>
</div>`,
    stats: [
      { label: "Avg Salary", value: "$85k" },
      { label: "Difficulty", value: "Beginner Friendly" },
      { label: "Necessity", value: "Absolute Must" }
    ],
    relatedProductId: "prog-html-css"
  },
  reactjs: {
    id: "reactjs",
    name: "React JS",
    icon: "⚛️",
    color: "#06b6d4",
    tagline: "A JavaScript library for building user interfaces.",
    description: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.",
    history: "React was created by Jordan Walke, a software engineer at Facebook, who released an early prototype called 'FaxJS'. It was first deployed on Facebook's News Feed in 2011 and later on Instagram in 2012. It was open-sourced at JSConf US in May 2013.",
    keyFeatures: ["Virtual DOM", "Component-Based Architecture", "JSX Syntax", "Unidirectional Data Flow", "React Hooks", "High Performance", "Massive Ecosystem"],
    useCases: ["Single Page Applications (SPAs)", "Complex UI Dashboards", "Mobile Apps (React Native)", "Static Site Generation (Gatsby)", "Server-Side Rendering (Next.js)"],
    codeSnippet: `import { useState } from 'react';
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Clicked {count} times
    </button>
  );
}`,
    stats: [
      { label: "Avg Salary", value: "$120k" },
      { label: "Difficulty", value: "Moderate" },
      { label: "Popularity", value: "Leading UI Lib" }
    ],
    relatedProductId: "prog-react-1"
  }
};
