import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Linkedin, Github, ArrowDown, Briefcase, TrendingUp, Users } from "lucide-react";

const PortfolioHeader = () => {
    return (
        <div className="flex flex-col items-center text-center space-y-8">
            {/* Status Badge */}
            <Badge variant="peach" className="px-5 py-2 text-xs font-bold tracking-wider uppercase bg-emerald-100 text-emerald-700 border border-emerald-200 animate-fade-in">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse inline-block"></span>
                Open to Product Manager Opportunities
            </Badge>

            {/* Name and Title */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[0.95]">
                    Manuel Gonçalves
                </h1>
                <p className="text-xl md:text-2xl text-primary font-semibold tracking-wide">
                    Product Manager
                </p>
            </div>

            {/* Value Proposition - ATS Keywords Rich */}
            <div className="max-w-3xl space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                    Product Manager with hands-on experience building and shipping
                    <span className="text-foreground font-medium"> AI-powered products</span>.
                    I bridge the gap between technical teams and business goals,
                    turning user research into product strategies that drive measurable outcomes.
                </p>

                {/* Key Highlights - Scannable for Recruiters */}
                <div className="flex flex-wrap justify-center gap-3 pt-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 border border-primary/10">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">3x User Growth</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 border border-primary/10">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">4 Products Shipped</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 border border-primary/10">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">B2B & B2C</span>
                    </div>
                </div>
            </div>

            {/* Contact Links */}
            <div className="flex flex-wrap justify-center gap-3 pt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <a
                    href="#"
                    className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-muted/80 hover:bg-muted backdrop-blur-sm transition-all text-sm font-medium text-muted-foreground hover:text-foreground border border-border/50 hover:border-primary/30"
                >
                    <MapPin className="w-4 h-4" />
                    Portugal, EU
                </a>
                <a
                    href="mailto:email@example.com"
                    className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-muted/80 hover:bg-muted backdrop-blur-sm transition-all text-sm font-medium text-muted-foreground hover:text-foreground border border-border/50 hover:border-primary/30"
                >
                    <Mail className="w-4 h-4" />
                    Contact Me
                </a>
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-muted/80 hover:bg-muted backdrop-blur-sm transition-all text-sm font-medium text-muted-foreground hover:text-foreground border border-border/50 hover:border-primary/30"
                >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                </a>
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-muted/80 hover:bg-muted backdrop-blur-sm transition-all text-sm font-medium text-muted-foreground hover:text-foreground border border-border/50 hover:border-primary/30"
                >
                    <Github className="w-4 h-4" />
                    GitHub
                </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <a
                    href="#projects"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-semibold rounded-full hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95 shadow-lg"
                >
                    View My Work
                    <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </a>
                <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-transparent text-foreground font-semibold rounded-full border-2 border-foreground/20 hover:border-foreground/40 transition-all hover:scale-105 active:scale-95"
                >
                    Get in Touch
                </a>
            </div>
        </div>
    );
};

export default PortfolioHeader;
