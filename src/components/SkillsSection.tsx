import { useRef, useState } from "react";
import {
    Target,
    BarChart3,
    Users,
    Lightbulb,
    Workflow,
    MessageSquare,
    Rocket,
    Brain
} from "lucide-react";

const SkillsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    const skills = [
        {
            title: "Product Strategy",
            description: "Vision to execution",
            icon: <Target className="w-6 h-6" />,
            tags: ["Product Roadmapping", "OKRs & KPIs", "Go-to-Market", "Competitive Analysis", "Prioritization Frameworks", "Product Vision"],
        },
        {
            title: "User Research",
            description: "Data-driven insights",
            icon: <Users className="w-6 h-6" />,
            tags: ["User Interviews", "Surveys", "Usability Testing", "Customer Discovery", "Jobs-to-be-Done", "Persona Development"],
        },
        {
            title: "Data & Analytics",
            description: "Metrics that matter",
            icon: <BarChart3 className="w-6 h-6" />,
            tags: ["A/B Testing", "Funnel Analysis", "Cohort Analysis", "SQL", "Product Analytics", "Experimentation"],
        },
        {
            title: "Agile & Delivery",
            description: "Ship with confidence",
            icon: <Workflow className="w-6 h-6" />,
            tags: ["Scrum", "Kanban", "Sprint Planning", "Backlog Management", "Story Mapping", "Release Planning"],
        },
        {
            title: "Stakeholder Management",
            description: "Alignment & influence",
            icon: <MessageSquare className="w-6 h-6" />,
            tags: ["Executive Communication", "Cross-functional Leadership", "Roadmap Presentations", "Technical Translation", "Negotiation"],
        },
        {
            title: "AI & Technical Fluency",
            description: "Bridge business & tech",
            icon: <Brain className="w-6 h-6" />,
            tags: ["AI/ML Products", "LLM Integration", "API Design", "Technical Requirements", "System Architecture"],
        },
        {
            title: "Product Discovery",
            description: "Find what to build",
            icon: <Lightbulb className="w-6 h-6" />,
            tags: ["Opportunity Assessment", "Problem Framing", "Solution Validation", "MVP Definition", "Hypothesis Testing"],
        },
        {
            title: "Growth & Optimization",
            description: "Scale what works",
            icon: <Rocket className="w-6 h-6" />,
            tags: ["Activation & Retention", "Feature Adoption", "User Onboarding", "Conversion Optimization", "Growth Loops"],
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden animate-on-scroll">
            <div className="text-center mb-16 space-y-4">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary/70">
                    Core Competencies
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                    Product Management Skills
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                    A comprehensive toolkit for building products that users love and businesses need.
                </p>
            </div>

            <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto px-4 relative group"
            >
                {skills.map((skill) => (
                    <div
                        key={skill.title}
                        className="relative rounded-2xl p-px overflow-hidden transition-transform duration-300 ease-linear hover:scale-[1.02]"
                    >
                        {/* Spotlight Border Effect */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-linear"
                            style={{
                                background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3), transparent 40%)`
                            }}
                        />

                        {/* Card Content */}
                        <div className="relative h-full bg-card rounded-[15px] p-6 border border-border/50 flex flex-col justify-between gap-5 transition-colors duration-300 ease-linear hover:border-primary/30">
                            <div className="space-y-3">
                                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    {skill.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-foreground mb-1 font-display tracking-tight">
                                        {skill.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {skill.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-1.5">
                                {skill.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2.5 py-1 rounded-md bg-secondary/60 text-xs font-medium text-muted-foreground transition-colors duration-200 ease-linear hover:bg-primary hover:text-white"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Technical Background Note */}
            <div className="mt-16 max-w-3xl mx-auto text-center px-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50">
                    <Brain className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">Technical Background:</span> React, TypeScript, Node.js, Python, SQL — I speak both product and engineering.
                    </span>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
