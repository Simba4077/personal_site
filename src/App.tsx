import React, { useEffect, useMemo, useState } from "react";
import { Heart, Star, Sparkles, Rocket, Briefcase, Code, Moon, Sun, FileDown, Mail, Linkedin } from "lucide-react";

/**
 * Portfolio App — production-ready single-file React component
 * - Dark mode toggle (persisted in localStorage)
 * - Resume button (placeholder link)
 * - Contact section (email + LinkedIn placeholders)
 * - Projects w/ link placeholders
 * - Experience with company name fields
 */

export default function App() {
    const [dark, setDark] = useState<boolean>(() => {
        try {
            const saved = localStorage.getItem("prefers-dark");
            return saved ? JSON.parse(saved) : false;
        } catch {
            return false;
        }
    });

    // Persist & apply class to <html> so Tailwind `dark:` variants work
    useEffect(() => {
        const root = document.documentElement;
        if (dark) root.classList.add("dark");
        else root.classList.remove("dark");
        try { localStorage.setItem("prefers-dark", JSON.stringify(dark)); } catch { }
    }, [dark]);

    const toggleDark = () => setDark((d) => !d);

    // ---- Lightweight runtime checks (acting as test cases) ----
    useEffect(() => {
        // Test 1: toggle function exists
        console.assert(typeof toggleDark === "function", "[Test] toggleDark should be a function");
        // Test 2: resume button should exist after first paint
        setTimeout(() => {
            const btn = document.getElementById("resume-btn");
            console.assert(!!btn, "[Test] Resume button should render with id=resume-btn");
        }, 0);
    }, []);

    // Utility: class helpers
    const container = "max-w-5xl mx-auto px-4 sm:px-6";
    const sectionTitle = "text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100";
    const card =
        "bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-emerald-100 dark:border-gray-800";
    const pill = "px-3 py-1 rounded-full text-sm font-medium";

    // Data (feel free to update URLs)
    const projects = useMemo(
        () => [
            {
                title: "Multi-Genre Music Classification Dataset",
                summary: "A large-scale audio dataset and machine learning pipeline for multi-genre music classification. Includes feature extraction, dataset curation, and baseline models to support reproducible ML experimentation and analysis.",
                featuredColor: "emerald",
                tags: [
                    "Machine Learning",
                    "Data Engineering",
                    "Audio ML",
                    "Feature Extraction",
                    "Model Evaluation"
                ],
                links: {
                    repo: "https://github.com/s1mpl6nam6/final-neur-research-proj"
                }
                }
                ,
            {
                title: "AddIt: Poster to Google Calendar",
                summary:
                    "A lightweight tool that helps students turn event posters into Google Calendar events in just a few seconds. Instead of manually typing details from flyers, AddIt extracts the title, date, time, and location, then drafts an event for quick review + save. Built originally in Streamlit with Gemini; helped reduce the typical “poster → calendar” workflow from about a minute to under 10 seconds.",
                tags: ["LLMs", "Python", "Streamlit", "Google Calendar API"],
                links: {
                    demo: "DEMO_LINK_HERE",
                    repo: "https://github.com/Simba4077/Add-It",
                    doc: "DOC_LINK_HERE",
                },
                featuredColor: "emerald",
            },
            {
                title: "ATS Resume Optimizer",
                summary: "An AI-powered system that analyzes resumes against job descriptions to provide structured feedback, keyword alignment, and targeted rewrites. Designed to help users improve ATS compatibility while preserving clarity and authenticity.",
                featuredColor: "emerald",
                tags: [
                    "Applied ML",
                    "LLMs",
                    "NLP",
                    "AI Products",
                    "System Design"
                ],
                links: {
                    repo: "https://github.com/Simba4077/ATS-Resume-Optimizer"
                }
                }
                ,
            {
                title: "NumPy CNN — CIFAR-10 Image Classifier",
                summary:
                    "A simple experiments-driven project where I implemented core CNN operations (convolution, pooling, activations, fully-connected layers) from scratch in NumPy. I wanted to better understand how image classifiers work under the hood — not just call a library. The model reached ~50–60% accuracy on CIFAR-10.",
                tags: ["Python", "CNN", "NumPy", "ML"],
                links: { demo: "DEMO_LINK_HERE", repo: "https://github.com/Simba4077/Convolutional-Neural-Network", doc: "DOC_LINK_HERE" },
                featuredColor: "lime",
            },
            {
                title: "MLP MNIST Classifier — Training Pipeline",
                summary:
                    "A minimal handwritten-digit classifier trained on MNIST using a custom MLP training loop. Focused on understanding data prep, batching, accuracy + loss tracking, and model evaluation. Achieved >97% accuracy.",
                tags: ["MLP", "NumPy", "MNIST"],
                links: { demo: "DEMO_LINK_HERE", repo: "https://github.com/Simba4077/MLP-MNIST-Classifier", doc: "DOC_LINK_HERE" },
                featuredColor: "lime",
            },
            {
                title: "English–Dutch Language Classifier",
                summary:
                    "A small language-classification project comparing three traditional ML models — logistic regression, SVM, and perceptron — on translated text samples. It was a fun way to explore feature extraction + evaluation. Models reached 100% accuracy on a held-out dataset.",
                tags: ["Feature Extraction", "SVM", "Logistic Regression", "Perceptron"],
                links: { demo: "DEMO_LINK_HERE", repo: "https://github.com/Simba4077/English-Dutch-Classification", doc: "DOC_LINK_HERE" },
                featuredColor: "lime",
            },
        ],
        []
    );

    const experiences = [
    {
        role: "Generative AI Research Lead",
        company: "Tech4Good Lab — UC Santa Cruz",
        range: "Dec 2025 – Present",
        bullets: [
    // FALL 2025 — UCSC Community Bot
                (
                    <>
                        <div className="flex gap-2 items-start">
                            <span className="mt-1 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200">
                                Fall 2025
                            </span>
                            <span className="font-semibold">UCSC Community Bot</span>
                        </div>
                        <div className="ml-2 mt-1 text-sm opacity-90 border-l-2 border-emerald-400 pl-4">
                            Evolved our summer RAG prototype into a campus assistant used by 300+ students. Directed a 6-person
                            engineering team, improved retrieval + routing, and built an LLM-driven auto-invite flow that places
                            students into topic channels for more relevant support. Analyzed 1,000+ logs to reduce hallucinations
                            and strengthen grounding.{" "}
                            <a
                                href="https://drive.google.com/file/d/1FqvDF3aC3a-GJtuVDR3YyWkuZmup6CzL/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                                className="underline text-sky-700 dark:text-sky-300"
                            >
                                Check out our current demo
                            </a>.
                        </div>
                    </>
                ),

                // SUMMER 2025 — Community RAG
                (
                    <>
                        <div className="flex gap-2 items-start mt-4">
                            <span className="mt-1 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200">
                                Summer 2025
                            </span>
                            <span className="font-semibold">Community RAG Platform (prototype)</span>
                        </div>
                        <div className="ml-2 mt-1 text-sm opacity-90 border-l-2 border-emerald-400 pl-4">
                            Built an early career-guidance platform integrating 200+ professional transcripts to help students
                            explore career paths with less guesswork. Led design + data structuring, produced multiple storyboard
                            iterations, and coordinated 5 design cycles with feedback from PhD researchers + PI.
                        </div>
                    </>
                ),

                // WINTER 2025 — GenAI Education Study
                (
                    <>
                        <div className="flex gap-2 items-start mt-4">
                            <span className="mt-1 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200">
                                Winter 2025
                            </span>
                            <span className="font-semibold">Generative AI Education Study</span>
                        </div>
                        <div className="ml-2 mt-1 text-sm opacity-90 border-l-2 border-emerald-400 pl-4">
                            Helped run a 140-student “Generative AI in Business Strategy” course. Co-designed labs + rubrics,
                            mentored 23 students, and analyzed interviews + 28 transcripts (300+ annotations) to study how
                            students use AI to plan, debug, and problem-solve, contributing to a research paper in progress.
                        </div>
                    </>
                ),

                // SHARED RESOURCE LINK — for Summer + Winter
                (
                    <div className="mt-4 ml-2 text-xs opacity-80 italic">
                        Demo from <span className="font-medium">Summer 2025 + Winter 2025</span>:{" "}
                        <a
                            href="https://drive.google.com/file/d/1pBwsUrdlKbTBuNPEtYMIVTroYwHWxSfP/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                            className="underline text-sky-700 dark:text-sky-300"
                        >
                            Video
                        </a>
                    </div>
                ),
            ],


        links: {
        demo: "https://drive.google.com/file/d/1FqvDF3aC3a-GJtuVDR3YyWkuZmup6CzL/view?usp=sharing",
        },
        accent: "emerald",
        demo: "https://drive.google.com/file/d/1FqvDF3aC3a-GJtuVDR3YyWkuZmup6CzL/view?usp=sharing",
    },
    ];



    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-sky-50 to-emerald-50 dark:from-gray-950 dark:via-gray-950 dark:to-gray-950">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/80 backdrop-blur-md shadow-sm border-b border-emerald-100 dark:border-gray-800">
                <nav className={`${container} py-4 flex justify-between items-center`}>
                    <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
                        ML/AI Engineer
                    </h1>
                    <div className="hidden sm:flex gap-3 items-center text-sm font-medium">
                        <a href="#bio" className="text-gray-700 dark:text-gray-200 hover:text-emerald-600 transition">About</a>
                        <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-sky-600 transition">Projects</a>
                        <a href="#experience" className="text-gray-700 dark:text-gray-200 hover:text-emerald-600 transition">Experience</a>
                        <a href="#future" className="text-gray-700 dark:text-gray-200 hover:text-sky-600 transition">Future</a>
                        <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-emerald-600 transition">Contact</a>
                        <a
                            id="resume-btn"
                            href="./Mira_Saini_Resume_2025.pdf" // Replace with your file path
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-emerald-300 dark:border-emerald-700 px-3 py-1.5 text-emerald-700 dark:text-emerald-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/40 transition"
                        >
                            <FileDown className="w-4 h-4" /> View Resume
                        </a>

                    </div>
                </nav>
            </header>

            <main className={`${container} py-8 sm:py-16`}>
                {/* Hero */}
                <section className="text-center mb-16 sm:mb-24">
                    <div className="inline-block mb-6 animate-bounce">
                        <Heart className="w-16 h-16 sm:w-20 sm:h-20 text-emerald-500 fill-emerald-500" />
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">Welcome!</h2>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Building intelligent systems that empower humans
                    </p>
                    {/* Mobile buttons */}
                    <div className="mt-6 flex sm:hidden justify-center gap-3">
                        <a
                            id="resume-btn-mobile"
                            href="./Mira_Saini_Resume_2025.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-emerald-300 px-4 py-2 text-emerald-700 hover:bg-emerald-50"
                        >
                            <FileDown className="w-4 h-4" /> Resume
                        </a>
                        <button
                            onClick={toggleDark}
                            className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
                        >
                            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />} {dark ? "Light" : "Dark"}
                        </button>
                    </div>
                </section>

                {/* About */}
                <section id="bio" className="mb-16 sm:mb-24">
                    <div className="bg-gradient-to-br from-emerald-100 to-sky-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 sm:p-12 shadow-lg hover:shadow-xl transition-shadow border border-emerald-100 dark:border-gray-700">
                        <div className="flex items-center gap-3 mb-6">
                            <Sparkles className="w-8 h-8 text-emerald-600" />
                            <h3 className={sectionTitle}>About Me</h3>
                        </div>
                        <div className="text-gray-800 dark:text-gray-200 space-y-4 text-base sm:text-lg leading-relaxed">
                           <p>
                            Hi, I’m Mira. I'm a Computer Science student at UC Santa Cruz and a Generative AI Lead at the Tech4Good Lab.
                            I build applied AI and machine learning systems that help people navigate information, make better decisions, and access opportunities more easily.
                            </p>

                            <p>
                            My work focuses on retrieval-driven and agentic AI systems, where models are combined with strong data pipelines, evaluation, and thoughtful product design.
                            I’ve led and contributed to end-to-end AI applications involving retrieval-augmented generation, workflow orchestration, and real-world deployment.
                            </p>

                            <p>
                            I care deeply about building AI that is reliable, human-centered, and useful in practice.
                            I’m especially interested in problems where machine learning meets product and systems design.
                            </p>

                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section id="projects" className="mb-16 sm:mb-24">
                    <div className="flex items-center gap-3 mb-8 sm:mb-12">
                        <Code className="w-8 h-8 text-sky-600" />
                        <h3 className={sectionTitle}>My Projects</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {projects.map((p, idx) => (
                            <article key={idx} className={`${card} border-${p.featuredColor}-100`}>
                                <div className="flex items-start justify-between mb-4">
                                    <Star className={`w-6 h-6 text-${p.featuredColor}-500 fill-${p.featuredColor}-500`} />
                                    <span className={`${pill} bg-${p.featuredColor}-100 text-${p.featuredColor}-700 dark:bg-${p.featuredColor}-900/30 dark:text-${p.featuredColor}-300`}>
                                        Featured
                                    </span>
                                </div>
                                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">{p.title}</h4>
                                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm sm:text-base">{p.summary}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {p.tags.map((t) => (
                                        <span key={t} className={`${pill} bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300`}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-3 text-sm">

                                    <a className="underline text-sky-700 dark:text-sky-300" href={p.links.repo} target="_blank" rel="noreferrer">
                                        Repo
                                    </a>

                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Experience */}
                <section id="experience" className="mb-16 sm:mb-24">
                    <div className="flex items-center gap-3 mb-8 sm:mb-12">
                        <Briefcase className="w-8 h-8 text-emerald-600" />
                        <h3 className={sectionTitle}>My Experience</h3>
                    </div>
                    <div className="space-y-4 sm:space-y-6">
                        {experiences.map((x, i) => (
                            <article
                                key={i}
                                className={`${card} border-l-4 border-${x.accent}-500`}
                            >
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
                                        {x.role}
                                        <span className="block text-sm font-normal text-gray-600 dark:text-gray-400">{x.company}</span>
                                    </h4>
                                    <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-300">{x.range}</span>
                                </div>
                                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2 text-sm sm:text-base">
                                    {x.bullets.map((b, idx) => (
                                        <li key={idx}>{b}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Future */}
                <section id="future" className="mb-16">
                <div className="bg-gradient-to-br from-emerald-500 via-sky-500 to-emerald-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">

                    {/* floating glow */}
                    <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_top_left,white,transparent_60%)]" />

                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                    <Rocket className="w-8 h-8 animate-pulse" />
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                        What’s Next?
                    </h3>
                    </div>

                    {/* Content */}
                    <div className="space-y-6 text-base sm:text-lg leading-relaxed">
                        <p>
                        I’m excited to continue building real-world software and machine learning systems in industry settings.
                        While much of my experience has been in academic and research-driven environments, I’m actively seeking opportunities where I can contribute as a software engineer, AI engineer, or applied ML engineer while learning from experienced teams.
                        </p>

                        <p>
                        I enjoy working across the stack, from core software and data pipelines to machine learning models and user-facing applications.
                        I’m especially interested in roles where engineering rigor, thoughtful system design, and practical AI come together to create reliable, scalable products.
                        </p>

                        <p>
                        I’m open to a wide range of SWE, AI, and ML roles, and I’m motivated by opportunities that prioritize learning, impact, and responsible technology.
                        </p>

                    </div>

                    {/* subtle divider */}
                    <div className="my-8 h-px bg-white/20" />

                    {/* Highlight chips */}
                    <div className="flex flex-wrap gap-2 text-sm font-medium opacity-90">
                    <span className="bg-white/20 px-3 py-1 rounded-full">ML</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">AI</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">SWE</span>
                    </div>

                </div>
                </section>

{/* Contact */}
<section id="contact" className="mb-14">
    <div className="relative rounded-3xl p-6 sm:p-10 shadow-lg border border-emerald-100/60 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md overflow-hidden">

        {/* soft background glow */}
        <div className="absolute inset-0 opacity-25 pointer-events-none bg-gradient-to-br from-emerald-200/20 via-sky-200/10 to-transparent dark:from-emerald-700/10 dark:via-sky-700/10" />

        {/* Header Chip */}
        <div className="relative inline-flex mb-4">
            <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 text-white text-sm font-semibold">
                Let’s Connect
            </div>
        </div>

        <h3 className={sectionTitle}>Contact</h3>

        <p className="mt-1 text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed">
            Happy to talk about AI, research, building tools, or anything fun.
        </p>

        {/* Contact Buttons */}
        <div className="mt-6 flex flex-wrap gap-4 items-center relative">
            {/* Email */}
            <button
                onClick={() => {
                    navigator.clipboard.writeText("misaini@ucsc.edu");
                    const toast = document.createElement("div");
                    toast.innerText = "Copied!";
                    toast.className =
                        "fixed bottom-6 right-6 bg-emerald-600 text-white text-sm px-3 py-1.5 rounded-lg shadow-md animate-fade-out";
                    document.body.appendChild(toast);
                    setTimeout(() => toast.remove(), 1200);
                }}
                className="group inline-flex items-center gap-2 rounded-full border border-emerald-400/60 dark:border-emerald-700/60 px-4 py-2 text-emerald-700 dark:text-emerald-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/40 transition"
            >
                <Mail className="w-4 h-4 group-hover:scale-110 transition" />
                misaini@ucsc.edu
                <span className="text-[11px] opacity-60 ml-1 group-hover:opacity-100 transition">
                    (copy)
                </span>
            </button>

            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/in/mira-saini-464938362/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-sky-400/60 dark:border-sky-700/60 px-4 py-2 text-sky-700 dark:text-sky-200 hover:bg-sky-50 dark:hover:bg-sky-900/40 transition"
            >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition" />
                LinkedIn
            </a>
        </div>

        {/* Little detail footer */}
        <div className="relative mt-6 text-sm text-gray-500 dark:text-gray-400 italic">
            Pls connect  :-)
        </div>
    </div>

    {/* fade-out animation */}
    <style>{`
        @keyframes fadeOut {
            0% { opacity: 1; }
            70% { opacity: 1; }
            100% { opacity: 0; }
        }
        .animate-fade-out {
            animation: fadeOut 1.2s forwards;
        }
    `}</style>
</section>

            </main>

            <footer className="border-t border-emerald-100 dark:border-gray-800 bg-white/50 dark:bg-gray-900/60 backdrop-blur-sm py-8">
                <div className={`${container} text-center`}>
                    <div className="flex justify-center gap-2 items-center">
                        <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500 fill-rose-500 animate-pulse" />
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Thanks for visiting!</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
