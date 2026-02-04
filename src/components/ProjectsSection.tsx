import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
    const builtProjects = projects.filter(p => p.status === "BUILT");
    const caseStudies = projects.filter(p => p.status === "CASE STUDY");

    return (
        <section className="space-y-12 animate-on-scroll">
            {/* Section Header */}
            <div className="text-center space-y-4">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary/70">
                    Portfolio
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                    Work
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
                    Products I've shipped and problems I've analyzed.
                </p>
            </div>

            {/* Built Products */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Shipped
                    </span>
                    <div className="h-px flex-1 bg-border"></div>
                </div>

                <div className="grid gap-4">
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

            {/* Case Studies */}
            {caseStudies.length > 0 && (
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            Case Studies
                        </span>
                        <div className="h-px flex-1 bg-border"></div>
                    </div>

                    <div className="grid gap-4">
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
        </section>
    );
};

export default ProjectsSection;
