import { CheckCircle2, Zap, Heart } from "lucide-react";

const AboutSection = () => {
    const highlights = [
        {
            icon: <Zap className="w-5 h-5" />,
            title: "Technical Product Manager",
            description: "I can read code, write specs, and speak both languages. This means faster communication with engineering and more realistic roadmaps."
        },
        {
            icon: <Heart className="w-5 h-5" />,
            title: "User-Obsessed",
            description: "Every product decision starts with user research. I've conducted 50+ user interviews and believe that assumptions are the enemy of good products."
        },
        {
            icon: <CheckCircle2 className="w-5 h-5" />,
            title: "Outcomes Over Output",
            description: "I measure success by business impact, not features shipped. My products have driven 3x user growth and 60%+ operational efficiency gains."
        }
    ];

    return (
        <section className="py-24 animate-on-scroll">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary/70">
                        About Me
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                        How I Work
                    </h2>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Summary Text */}
                    <div className="space-y-6">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I'm a <span className="text-foreground font-medium">Product Manager</span> who started
                            as a builder. My path into product came through shipping my own software — learning
                            what users actually need by watching them struggle, iterate, and succeed.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            This hands-on background means I don't just write requirements — I understand the
                            technical constraints, can prototype solutions, and know when a "simple" feature
                            isn't simple at all.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I'm particularly excited about <span className="text-foreground font-medium">AI products</span>.
                            The technology is evolving fast, and the product thinking around it is still being
                            invented. I want to be part of defining how AI creates real value for users.
                        </p>

                        {/* Quick Facts */}
                        <div className="pt-6 border-t border-border/50">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                                Quick Facts
                            </h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    Based in Portugal, EU (GMT+0/+1)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    Fluent in English and Portuguese
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    Open to remote and hybrid roles
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    Available for full-time opportunities
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right: Key Highlights */}
                    <div className="space-y-4">
                        {highlights.map((item) => (
                            <div
                                key={item.title}
                                className="p-6 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 transition-colors duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
