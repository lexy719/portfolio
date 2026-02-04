import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { ReactNode } from "react";

interface ProjectMetric {
    label: string;
    value: string;
    icon: ReactNode;
}

interface ProjectCardProps {
    icon: ReactNode;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    status?: string;
    metrics?: ProjectMetric[];
    demoUrl?: string;
}

const ProjectCard = ({ icon, title, subtitle, description, tags, status, metrics, demoUrl }: ProjectCardProps) => {
    // Determine status badge color based on status
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

    return (
        <div
            className="group relative block p-6 md:p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 hover:border-primary/30 cursor-pointer overflow-hidden"
        >
            {/* Hover gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
                {/* Header Row */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                            {icon}
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-1 flex-wrap">
                                <h3 className="font-bold text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                                    {title}
                                </h3>
                                {status && (
                                    <Badge
                                        variant="outline"
                                        className={`uppercase text-[10px] tracking-wider px-2.5 py-0.5 font-semibold border ${getStatusStyle(status)}`}
                                    >
                                        {status}
                                    </Badge>
                                )}
                                {demoUrl && (
                                    <Badge
                                        variant="outline"
                                        className="uppercase text-[10px] tracking-wider px-2.5 py-0.5 font-semibold border bg-emerald-100 text-emerald-700 border-emerald-200"
                                    >
                                        <ExternalLink className="w-3 h-3 mr-1" />
                                        Live Demo
                                    </Badge>
                                )}
                            </div>
                            <p className="text-xs font-medium text-muted-foreground tracking-wide">
                                {subtitle}
                            </p>
                        </div>
                    </div>
                    <div className="p-2.5 rounded-full bg-muted/50 group-hover:bg-primary/10 transition-colors duration-300 hidden md:block">
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-base mb-5 leading-relaxed max-w-3xl">
                    {description}
                </p>

                {/* Metrics Row - Show for BUILT and SHIPPED products */}
                {metrics && metrics.length > 0 && (status === "SHIPPED" || status === "BUILT") && (
                    <div className="flex flex-wrap gap-3 mb-5">
                        {metrics.map((metric) => (
                            <div
                                key={metric.label}
                                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border/50"
                            >
                                <span className="text-primary">{metric.icon}</span>
                                <div className="flex items-baseline gap-1.5">
                                    <span className="font-bold text-foreground text-sm">{metric.value}</span>
                                    <span className="text-xs text-muted-foreground">{metric.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Tags Row */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Badge
                            key={tag}
                            variant="secondary"
                            className="text-[10px] tracking-wide bg-muted/60 text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 border border-border/50 transition-all duration-200 px-2.5 py-1"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
