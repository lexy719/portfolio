import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
    // Separate built, case studies, and other projects for better hierarchy
    const builtProjects = projects.filter(p => p.status === "BUILT");
    const caseStudies = projects.filter(p => p.status === "CASE STUDY");
    const otherProjects = projects.filter(p => p.status !== "BUILT" && p.status !== "CASE STUDY");

    return (
        <section className="space-y-16 animate-on-scroll">
            {/* Section Header */}
            <div className="text-center space-y-4">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary/70">
                    Product Portfolio
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                    Products I've Built
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
                    End-to-end product work from discovery to delivery — each project showcases
                    my approach to solving real problems for real users.
                </p>
            </div>

            {/* Built Products - Primary Focus */}
            <div className="space-y-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-px flex-1 bg-border/50"></div>
                    <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 px-3 py-1 bg-blue-50 rounded-full border border-blue-100">
                        Built & Working
                    </span>
                    <div className="h-px flex-1 bg-border/50"></div>
                </div>

                <div className="grid gap-6">
                    {builtProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="animate-on-scroll"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <Link to={`/project/${project.id}`}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    description={project.description}
                                    tags={project.tags}
                                    status={project.status}
                                    icon={project.icon}
                                    metrics={project.metrics}
                                    demoUrl={project.demoUrl}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Case Studies - Product Thinking */}
            {caseStudies.length > 0 && (
                <div className="space-y-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px flex-1 bg-border/50"></div>
                        <span className="text-sm font-semibold uppercase tracking-wider text-purple-600 px-3 py-1 bg-purple-50 rounded-full border border-purple-100">
                            Product Case Studies
                        </span>
                        <div className="h-px flex-1 bg-border/50"></div>
                    </div>

                    <div className="grid gap-6">
                        {caseStudies.map((project, index) => (
                            <div
                                key={project.id}
                                className="animate-on-scroll"
                                style={{ animationDelay: `${(builtProjects.length + index) * 0.1}s` }}
                            >
                                <Link to={`/project/${project.id}`}>
                                    <ProjectCard
                                        title={project.title}
                                        subtitle={project.subtitle}
                                        description={project.description}
                                        tags={project.tags}
                                        status={project.status}
                                        icon={project.icon}
                                        metrics={project.metrics}
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Other Projects - Secondary Focus */}
            {otherProjects.length > 0 && (
                <div className="space-y-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px flex-1 bg-border/50"></div>
                        <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground px-3 py-1 bg-muted/50 rounded-full border border-border/50">
                            In Progress & Concepts
                        </span>
                        <div className="h-px flex-1 bg-border/50"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {otherProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="animate-on-scroll"
                                style={{ animationDelay: `${(builtProjects.length + caseStudies.length + index) * 0.1}s` }}
                            >
                                <Link to={`/project/${project.id}`}>
                                    <ProjectCard
                                        title={project.title}
                                        subtitle={project.subtitle}
                                        description={project.description}
                                        tags={project.tags}
                                        status={project.status}
                                        icon={project.icon}
                                        metrics={project.metrics}
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProjectsSection;
