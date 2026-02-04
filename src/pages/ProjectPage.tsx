import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { ArrowLeft, ExternalLink, Github, Maximize2, Minimize2, Monitor, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

const ProjectPage = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);
    const [isDemoExpanded, setIsDemoExpanded] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-muted-foreground">
                Project not found.
            </div>
        );
    }

    const getStatusStyle = (status: string) => {
        switch (status) {
            case "BUILT":
                return "bg-blue-100 text-blue-700 border-blue-200";
            case "SHIPPED":
                return "bg-emerald-100 text-emerald-700 border-emerald-200";
            case "IN DEV":
                return "bg-amber-100 text-amber-700 border-amber-200";
            case "CONCEPT":
                return "bg-slate-100 text-slate-600 border-slate-200";
            default:
                return "bg-primary/10 text-primary border-primary/20";
        }
    };

    // Check if this is Fleet Tracker (has demo)
    const hasDemo = project.demoUrl;

    return (
        <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
            {/* Subtle background gradient */}
            <div className="fixed inset-0 bg-gradient-to-b from-background via-background to-muted/20 pointer-events-none" />

            {/* Navigation Bar */}
            <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Portfolio
                        </Link>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>Projects</span>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-foreground font-medium">{project.title}</span>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="relative">
                {/* Hero Section */}
                <section className="border-b border-border/50 bg-muted/20">
                    <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
                        <div className="grid lg:grid-cols-2 gap-8 items-start">
                            {/* Left: Project Info */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 flex-wrap">
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                        {project.icon}
                                    </div>
                                    <Badge
                                        variant="outline"
                                        className={`uppercase text-xs tracking-wider font-semibold border ${getStatusStyle(project.status)}`}
                                    >
                                        {project.status}
                                    </Badge>
                                    {hasDemo && (
                                        <Badge
                                            variant="outline"
                                            className="uppercase text-xs tracking-wider font-semibold border bg-emerald-100 text-emerald-700 border-emerald-200"
                                        >
                                            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                                            Live Demo
                                        </Badge>
                                    )}
                                </div>

                                <div>
                                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="text-lg text-muted-foreground">
                                        {project.subtitle}
                                    </p>
                                </div>

                                <p className="text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="secondary"
                                            className="text-xs tracking-wide bg-muted/60 text-muted-foreground"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                {(hasDemo || project.githubUrl) && (
                                    <div className="flex flex-wrap gap-3 pt-2">
                                        {hasDemo && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background font-semibold rounded-lg hover:bg-foreground/90 transition-all"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Open Live Demo
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-muted text-foreground font-semibold rounded-lg hover:bg-muted/80 transition-all border border-border/50"
                                            >
                                                <Github className="w-4 h-4" />
                                                View Source
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Right: Metrics */}
                            {project.metrics && project.metrics.length > 0 && (
                                <div className="grid grid-cols-3 gap-4">
                                    {project.metrics.map((metric) => (
                                        <div
                                            key={metric.label}
                                            className="bg-card rounded-xl p-5 border border-border/50 text-center"
                                        >
                                            <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                                                {metric.value}
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                {metric.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Demo Section - Only for projects with demoUrl */}
                {hasDemo && (
                    <section className="border-b border-border/50">
                        <div className="max-w-6xl mx-auto px-6 py-12">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold text-foreground mb-2">
                                            Interactive Demo
                                        </h2>
                                        <p className="text-muted-foreground">
                                            Explore the live application below. Try the AI assistant, view the fleet dashboard, and navigate through different sections.
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setIsDemoExpanded(!isDemoExpanded)}
                                        className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted rounded-lg transition-colors"
                                    >
                                        {isDemoExpanded ? (
                                            <>
                                                <Minimize2 className="w-4 h-4" />
                                                Minimize
                                            </>
                                        ) : (
                                            <>
                                                <Maximize2 className="w-4 h-4" />
                                                Expand
                                            </>
                                        )}
                                    </button>
                                </div>

                                {/* Demo Embed */}
                                <div className={`relative rounded-xl overflow-hidden border border-border/50 bg-card shadow-lg transition-all duration-300 ${isDemoExpanded ? 'fixed inset-4 z-50' : ''}`}>
                                    {/* Browser Header */}
                                    <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border/50">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-1.5">
                                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Monitor className="w-4 h-4" />
                                                <span className="font-medium">{project.title}</span>
                                                <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 font-medium">LIVE</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => setIsDemoExpanded(!isDemoExpanded)}
                                                className="p-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                                            >
                                                {isDemoExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                                            </button>
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* iframe */}
                                    <div className={`relative bg-white ${isDemoExpanded ? 'h-[calc(100%-52px)]' : 'h-[600px]'}`}>
                                        <iframe
                                            src={project.demoUrl}
                                            title={project.title}
                                            className="w-full h-full"
                                            loading="lazy"
                                            allow="fullscreen"
                                        />
                                    </div>
                                </div>

                                {/* Demo overlay for expanded mode */}
                                {isDemoExpanded && (
                                    <div
                                        className="fixed inset-0 bg-black/60 -z-10"
                                        onClick={() => setIsDemoExpanded(false)}
                                    />
                                )}

                                {/* Demo Tips */}
                                {project.demoTips && project.demoTips.length > 0 && (
                                    <div className="grid md:grid-cols-3 gap-4 pt-4">
                                        {project.demoTips.map((tip, index) => (
                                            <div key={index} className="p-4 rounded-lg bg-muted/30 border border-border/50">
                                                <h3 className="font-semibold text-foreground mb-1 text-sm">{tip.title}</h3>
                                                <p className="text-xs text-muted-foreground">{tip.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {/* Case Study Content */}
                <section className="py-12 md:py-16">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
                            {project.fullContent}
                        </div>
                    </div>
                </section>

                {/* Footer CTA */}
                <section className="border-t border-border/50 bg-muted/20">
                    <div className="max-w-4xl mx-auto px-6 py-12 text-center">
                        <h2 className="text-2xl font-bold text-foreground mb-4">
                            Interested in working together?
                        </h2>
                        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                            I'm currently open to Product Manager opportunities. Let's talk about how I can help build your next great product.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="mailto:email@example.com"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-semibold rounded-lg hover:bg-foreground/90 transition-all"
                            >
                                Get in Touch
                            </a>
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-muted text-foreground font-semibold rounded-lg hover:bg-muted/80 transition-all border border-border/50"
                            >
                                View All Projects
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ProjectPage;
