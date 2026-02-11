import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import PortfolioHeader from "@/components/PortfolioHeader";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

const Home = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fade-in");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const sections = document.querySelectorAll("section, .animate-on-scroll");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-background relative overflow-hidden font-sans text-foreground selection:bg-primary/20 selection:text-primary">
            {/* Subtle background */}
            <div className="fixed inset-0 bg-gradient-to-b from-background via-background to-muted/20 pointer-events-none" />
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute top-[40%] -left-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

            {/* Navigation */}
            <Navigation />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 py-20 lg:py-24">
                <div className="max-w-5xl mx-auto text-center animate-fade-in">
                    <PortfolioHeader />
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="relative px-4 sm:px-6 lg:px-10 bg-muted/20 scroll-mt-24">
                <div className="max-w-7xl mx-auto">
                    <AboutSection />
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-10 scroll-mt-24">
                <div className="max-w-6xl mx-auto">
                    <ProjectsSection />
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-10 bg-muted/20 scroll-mt-24">
                <div className="max-w-7xl mx-auto">
                    <SkillsSection />
                </div>
            </section>

            {/* Footer / Contact */}
            <footer id="contact" className="relative py-24 px-4 sm:px-6 lg:px-10 scroll-mt-24">
                <div className="max-w-3xl mx-auto text-center space-y-10">
                    <div className="space-y-6">
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary/70">
                            Let's Connect
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Looking for a Product Manager who ships?
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                            I'm currently open to Product Manager roles where I can drive meaningful impact.
                            Let's talk about how I can help build your next great product.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 pt-4">
                            <a
                                href="mailto:manueljosigoncalves01@gmail.com"
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                            >
                                Get in Touch
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a
                                href="https://github.com/lexy719"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent text-foreground font-semibold rounded-full border-2 border-foreground/20 hover:border-foreground/40 transition-all hover:scale-105 active:scale-95"
                            >
                                GitHub Profile
                            </a>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-border/50 space-y-4">
                        {/* ATS-friendly text keywords */}
                        <p className="text-xs text-muted-foreground/40 max-w-2xl mx-auto leading-relaxed">
                            Product Manager | Product Management | AI Products | B2B SaaS | B2C | User Research |
                            Agile | Scrum | Roadmapping | Product Strategy | Data-Driven | Technical PM
                        </p>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground/60">
                            Manuel Gonçalves — Product Manager Portfolio
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
