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
                title: "AddIt — Event Poster → Google Calendar (Streamlit + Gemini)",
                summary:
                    "AI workflow to parse event posters → extract title/time/location → auto-create Google Calendar events. ~80% time reduction (≈30–60s → under 10s). ~95%+ field-extraction accuracy across ~50 posters; Streamlit UI for verify/edit; robust parsing+error handling.",
                tags: ["LLMs", "Python", "Streamlit", "Google Calendar API"],
                links: {
                    demo: "DEMO_LINK_HERE",
                    repo: "REPO_LINK_HERE",
                    doc: "DOC_LINK_HERE",
                },
                featuredColor: "emerald",
            },
            {
                title: "NumPy CNN — CIFAR-10 Image Classifier",
                summary:
                    "Built CNN from first principles (conv/pool/activations/FC) using NumPy with full train/val/test pipeline + metrics. Achieved ~50–60% on CIFAR-10.",
                tags: ["Python", "CNN", "NumPy", "ML"],
                links: { demo: "DEMO_LINK_HERE", repo: "REPO_LINK_HERE", doc: "DOC_LINK_HERE" },
                featuredColor: "sky",
            },
            {
                title: "MLP MNIST Classifier — Training Pipeline",
                summary:
                    "Minimal MLP training loop (split, batching, accuracy/loss) + preprocessing (normalization/reshape). >97% accuracy on MNIST.",
                tags: ["MLP", "NumPy", "MNIST"],
                links: { demo: "DEMO_LINK_HERE", repo: "REPO_LINK_HERE", doc: "DOC_LINK_HERE" },
                featuredColor: "emerald",
            },
            {
                title: "English–Dutch Language Classifier",
                summary:
                    "Three training pipelines (Log Reg, SVM, Perceptron) with custom feature extraction on translated texts; achieved 100% accuracy on held-out test set.",
                tags: ["Feature Extraction", "SVM", "Logistic Regression", "Perceptron"],
                links: { demo: "DEMO_LINK_HERE", repo: "REPO_LINK_HERE", doc: "DOC_LINK_HERE" },
                featuredColor: "sky",
            },
        ],
        []
    );

    const experiences = [
        {
            role: "Generative AI Research Lead",
            company: "Tech4Good Lab — UC Santa Cruz",
            range: "Dec 2024 – Present",
            bullets: [
                "Generative AI Education Paper (Journal Submission Pending): Co-designed and TA’d UCSC Generative AI in Business Strategy course (140 students); mentored 23+ students; authored 50% of lab assignments + all grading rubrics; conducted 3 interviews + 300+ transcript annotations for research.",
                "Community RAG Platform — Summer 2025: Led scalable career-guidance prototype integrating 200+ professional transcripts; produced 3+ Figma storyboards; managed 10 undergraduates across 5 design cycles.",
                "Community UCSC Bot — Fall 2025 (Demo: DEMO_LINK_HERE): Directed 6-member team; used Pinecone + custom schemas; added tool-calling + contextual routing; built LLM auto-invite workflow; analyzed 1,000+ logs to reduce hallucination.",
            ],
            accent: "emerald",
            demo: "DEMO_LINK_HERE",
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
                            href="/Mira_Saini_Resume.pdf" // Replace with your file path
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
                            href="/Mira_Saini_Resume.pdf"
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
                                I’m Mira — an AI/ML engineer focused on building human-centered systems. I care about AI that supports rather than replaces people,
                                and I bring strong ethics into every design decision.
                            </p>
                            <p>
                                Recently, I’ve shipped retrieval-driven assistants, model training pipelines, and classroom-ready demos that reduce friction and expand access.
                                Across projects, I focus on practical, responsible tools that genuinely help people.
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
                                    {x.bullets.map((b) => (
                                        <li key={b}>{b}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Future */}
                <section id="future" className="mb-16">
                    <div className="bg-gradient-to-br from-emerald-500 via-sky-500 to-emerald-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
                        <div className="flex items-center gap-3 mb-6">
                            <Rocket className="w-8 h-8" />
                            <h3 className="text-2xl sm:text-3xl font-bold">What's Next?</h3>
                        </div>
                        <div className="space-y-4 text-base sm:text-lg leading-relaxed">
                            <p>
                                My vision is to build AI systems that genuinely empower people while addressing real-world problems. I’m focused on multimodal models,
                                interpretability, and robust safeguards for responsible deployment.
                            </p>
                            <p>
                                I’m excited to contribute to efficient ML, agentic systems, and human-in-the-loop AI. Goals: publish impactful papers, ship useful open-source,
                                and mentor the next wave of engineers.
                            </p>
                            <p>Most importantly, I want AI aligned with human values and positive impact.</p>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="mb-20">
                    <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-12 shadow-md border border-emerald-100 dark:border-gray-800">
                        <h3 className={sectionTitle}>Contact</h3>
                        <p className="mt-2 text-gray-700 dark:text-gray-300">Feel free to reach out — I’m always happy to connect.</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href="mailto:misaini@ucsc.edu"
                                className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                                <Mail className="w-4 h-4" /> misaini@ucsc.edu
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mira-saini-464938362/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                                <Linkedin className="w-4 h-4" /> LinkedIn
                            </a>
                        </div>
                    </div>
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
