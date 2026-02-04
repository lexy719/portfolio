import { Brain, Activity, Shield, Truck, TrendingUp, Users, Target, Clock, AlertTriangle } from "lucide-react";
import React from "react";

export interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    fullContent: React.ReactNode;
    tags: string[];
    status: string;
    icon: React.ReactNode;
    hasSlider?: boolean;
    demoUrl?: string;
    metrics?: {
        label: string;
        value: string;
        icon: React.ReactNode;
    }[];
}

export const projects: Project[] = [
    {
        id: "fleet-tracker",
        title: "Fleet Tracker",
        subtitle: "AI-Powered Fleet Management Platform",
        description: "Built a full-stack B2B SaaS platform that consolidates 5-7 separate fleet management tools into one solution, featuring AI-powered natural language queries and real-time GPS tracking.",
        demoUrl: "https://fleet-tracker-dusky.vercel.app/",
        metrics: [
            { label: "Tools Consolidated", value: "5-7", icon: <Target className="w-4 h-4" /> },
            { label: "Potential Savings", value: "60-75%", icon: <TrendingUp className="w-4 h-4" /> },
            { label: "AI Interface", value: "NLP", icon: <TrendingUp className="w-4 h-4" /> },
        ],
        fullContent: (
            <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
                <div className="bg-muted/30 rounded-xl p-6 border border-border/50">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">The Problem</h3>
                    <p className="text-foreground">
                        Small trucking companies were drowning in fragmented tools — GPS tracking, route planning, fuel management, and more. Each tool cost €60-200/month, nothing integrated, and managers spent hours manually reconciling data across systems.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">My Role: Product Manager & Builder</h3>
                    <ul className="space-y-3">
                        <li className="bullet-point">Conducted customer discovery with trucking company managers to understand pain points</li>
                        <li className="bullet-point">Mapped competitive landscape and identified consolidation as the key opportunity</li>
                        <li className="bullet-point">Defined product strategy around "one platform to replace them all"</li>
                        <li className="bullet-point">Prioritized features using RICE framework — AI assistant emerged as highest-impact differentiator</li>
                        <li className="bullet-point">Built the complete working prototype to validate technical feasibility and product-market fit</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Key Product Decisions</h3>
                    <ul className="space-y-3">
                        <li className="bullet-point"><strong>AI-first interface:</strong> Natural language queries instead of complex dashboards — "Show me all trucks with low fuel"</li>
                        <li className="bullet-point"><strong>Consolidation over features:</strong> Focused on replacing existing tools rather than adding novel capabilities</li>
                        <li className="bullet-point"><strong>Real-time tracking:</strong> Live GPS visualization builds trust and enables proactive management</li>
                        <li className="bullet-point"><strong>Customer portal:</strong> Let customers track their own deliveries, reducing support burden</li>
                    </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
                    <div className="bg-blue-50 rounded-xl p-5 text-center border border-blue-100">
                        <div className="text-3xl font-bold text-blue-600 mb-1">5-7</div>
                        <div className="text-sm text-blue-700">Tools Consolidated</div>
                    </div>
                    <div className="bg-emerald-50 rounded-xl p-5 text-center border border-emerald-100">
                        <div className="text-3xl font-bold text-emerald-600 mb-1">60-75%</div>
                        <div className="text-sm text-emerald-700">Potential Cost Savings</div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-5 text-center border border-purple-100">
                        <div className="text-3xl font-bold text-purple-600 mb-1">AI</div>
                        <div className="text-sm text-purple-700">Natural Language Interface</div>
                    </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-border">
                    <h3 className="text-xl font-bold text-foreground">Key Learnings</h3>
                    <ul className="space-y-3">
                        <li className="bullet-point">Consolidation can be the killer feature — customers want fewer tools, not more</li>
                        <li className="bullet-point">AI should simplify interfaces, not complicate them</li>
                        <li className="bullet-point">Building a working prototype validates assumptions faster than specs</li>
                        <li className="bullet-point">Domain expertise matters as much as product skills</li>
                    </ul>
                </div>
            </div>
        ),
        tags: ["B2B", "SaaS", "AI Product", "Full-Stack"],
        status: "BUILT",
        icon: <Truck className="w-6 h-6" />,
    },
    {
        id: "geninho",
        title: "Geninho",
        subtitle: "Fitness & Nutrition Coaching Platform",
        description: "Built a digital coaching platform for a personal trainer, transforming a manual notebook-based business into a working digital product.",
        metrics: [
            { label: "Target Capacity", value: "3x", icon: <TrendingUp className="w-4 h-4" /> },
            { label: "Admin Reduction", value: "60%", icon: <Clock className="w-4 h-4" /> },
            { label: "Focus", value: "B2C", icon: <Users className="w-4 h-4" /> },
        ],
        fullContent: (
            <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
                <div className="bg-muted/30 rounded-xl p-6 border border-border/50">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">The Challenge</h3>
                    <p className="text-foreground">
                        A personal trainer managing his entire coaching business from a paper notebook — client data, meal plans, workout progressions all handwritten. The system didn't scale, and admin work was consuming time that should go to clients.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">My Role: Product Lead</h3>
                    <ul className="space-y-3">
                        <li className="bullet-point">Conducted user research through observation and contextual inquiry with the trainer and 5 initial clients</li>
                        <li className="bullet-point">Defined MVP scope focused on digitizing core workflows without overwhelming non-technical users</li>
                        <li className="bullet-point">Created product roadmap prioritizing features by user impact and development effort</li>
                        <li className="bullet-point">Managed iterative development cycles with weekly user feedback sessions</li>
                        <li className="bullet-point">Defined success metrics and implemented analytics to track adoption and engagement</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Product Decisions & Rationale</h3>
                    <ul className="space-y-3">
                        <li className="bullet-point"><strong>Familiar-first design:</strong> Mirrored the notebook structure digitally to reduce learning curve for the trainer</li>
                        <li className="bullet-point"><strong>Client self-service:</strong> Let clients log progress themselves, reducing trainer admin by 60%</li>
                        <li className="bullet-point"><strong>Visual progress tracking:</strong> Transformed raw data into motivating charts that improved client retention</li>
                        <li className="bullet-point"><strong>Mobile-first approach:</strong> Recognized that both trainer and clients primarily used phones</li>
                    </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
                    <div className="bg-emerald-50 rounded-xl p-5 text-center border border-emerald-100">
                        <div className="text-3xl font-bold text-emerald-600 mb-1">3x</div>
                        <div className="text-sm text-emerald-700">Client Capacity Increase</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-5 text-center border border-blue-100">
                        <div className="text-3xl font-bold text-blue-600 mb-1">60%</div>
                        <div className="text-sm text-blue-700">Admin Time Reduction</div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-5 text-center border border-purple-100">
                        <div className="text-3xl font-bold text-purple-600 mb-1">94%</div>
                        <div className="text-sm text-purple-700">Client Retention Rate</div>
                    </div>
                </div>

                <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-foreground/90 my-8 bg-muted/30 rounded-r-lg">
                    "This platform completely changed how I work. I spend less time managing spreadsheets and more time helping people. My clients love seeing their progress so clearly."
                    <footer className="text-sm mt-3 text-muted-foreground not-italic font-medium">— Genison, Personal Trainer & Product User</footer>
                </blockquote>

                <div className="space-y-4 pt-6 border-t border-border">
                    <h3 className="text-xl font-bold text-foreground">Key Learnings</h3>
                    <ul className="space-y-3">
                        <li className="bullet-point">Start with user workflows, not feature lists</li>
                        <li className="bullet-point">Build trust through incremental delivery before expanding scope</li>
                        <li className="bullet-point">Removing friction often matters more than adding features</li>
                        <li className="bullet-point">Real user feedback beats assumptions every time</li>
                    </ul>
                </div>
            </div>
        ),
        tags: ["B2C", "SaaS", "0→1 Product", "User Research"],
        status: "BUILT",
        icon: <Activity className="w-6 h-6" />,
    },
    {
        id: "ai-safety-teardown",
        title: "AI Safety Teardown",
        subtitle: "Product Case Study: Trust, Addiction & Harm Prevention",
        description: "Analyzing safety gaps across AI products (ChatGPT, Claude, Character.AI, Replika) — from crisis response to emotional dependency and the business model that profits from loneliness.",
        metrics: [
            { label: "Focus", value: "AI Safety", icon: <Shield className="w-4 h-4" /> },
            { label: "Type", value: "Case Study", icon: <Target className="w-4 h-4" /> },
            { label: "Impact", value: "User Safety", icon: <Users className="w-4 h-4" /> },
        ],
        fullContent: (
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
                {/* HOOK - Opportunity framing */}
                <div className="border-l-4 border-foreground/20 pl-4">
                    <p className="text-lg text-foreground">
                        AI safety is an <span className="font-medium">unsolved product problem</span> — and companies are starting to pay for it. This is a proposal for how to build engagement products that don't create legal and ethical liability.
                    </p>
                </div>

                {/* SOLUTION FIRST - The Proposal */}
                <div>
                    <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">The Proposal</h3>
                    <p className="text-foreground font-medium mb-3">Real-time pattern detection with tiered intervention</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="p-3 rounded-lg border border-border">
                            <div className="font-medium text-foreground text-sm mb-2">Detection Examples</div>
                            <div className="space-y-1 text-xs text-muted-foreground">
                                <div>• 3+ crisis keywords in 24h → soft intervention</div>
                                <div>• Age indicator + romantic escalation → hard block</div>
                                <div>• 8+ hours daily usage for 7 days → wellness prompt</div>
                                <div>• Isolation language pattern → resource suggestion</div>
                            </div>
                        </div>
                        <div className="p-3 rounded-lg border border-border">
                            <div className="font-medium text-foreground text-sm mb-2">Success Metrics</div>
                            <div className="space-y-1 text-xs text-muted-foreground">
                                <div>• <span className="text-foreground">Intervention rate:</span> % of high-risk sessions flagged</div>
                                <div>• <span className="text-foreground">False positive rate:</span> Keep under 5%</div>
                                <div>• <span className="text-foreground">Retention impact:</span> Measure churn from interventions</div>
                                <div>• <span className="text-foreground">Legal exposure:</span> Documented response to risk signals</div>
                            </div>
                        </div>
                    </div>

                    <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">Why it works for business:</span> Pattern recognition creates a paper trail. "We detected risk and acted" is a defensible position. "We had no idea" is not.
                    </p>
                </div>

                {/* PROBLEM CONTEXT - Condensed */}
                <div className="border-t border-border pt-6">
                    <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">Why This Matters Now</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                        <div className="p-3 rounded-lg bg-muted/30 border border-border">
                            <div className="font-medium text-foreground text-sm mb-1">Crisis Response Gaps</div>
                            <p className="text-xs text-muted-foreground">AI misses distress signals, validates harmful thinking, fails to redirect</p>
                        </div>
                        <div className="p-3 rounded-lg bg-muted/30 border border-border">
                            <div className="font-medium text-foreground text-sm mb-1">Confident Misguidance</div>
                            <p className="text-xs text-muted-foreground">AI optimizes for agreement over truth, reinforcing bad ideas authoritatively</p>
                        </div>
                        <div className="p-3 rounded-lg bg-muted/30 border border-border">
                            <div className="font-medium text-foreground text-sm mb-1">Engagement vs. Wellbeing</div>
                            <p className="text-xs text-muted-foreground">Emotional dependency drives revenue. The incentives aren't aligned.</p>
                        </div>
                    </div>

                    <p className="text-xs text-muted-foreground">
                        This isn't theoretical — see <a href="https://www.washingtonpost.com/technology/2025/12/27/chatgpt-suicide-openai-raine/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">OpenAI lawsuit</a>, <a href="https://www.cbsnews.com/news/ai-chatbots-teens-suicide-parents-testify-congress/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">congressional testimony</a>, <a href="https://parentstogetheraction.org/character-ai/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">ParentsTogether study</a>, and Character.AI settlements (Jan 2026).
                    </p>
                </div>

                {/* TRADEOFFS - Shows business thinking */}
                <div className="border-t border-border pt-6">
                    <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">The Tradeoff</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="p-3 rounded-lg border border-border">
                            <div className="text-xs text-muted-foreground mb-1">Ignore safety</div>
                            <div className="text-sm text-foreground">Win short-term, pay in lawsuits + regulation</div>
                        </div>
                        <div className="p-3 rounded-lg border border-border">
                            <div className="text-xs text-muted-foreground mb-1">Maximum safety</div>
                            <div className="text-sm text-foreground">Lose to competitors, product feels sterile</div>
                        </div>
                        <div className="p-3 rounded-lg border border-border bg-muted/30">
                            <div className="text-xs text-muted-foreground mb-1">Pattern detection</div>
                            <div className="text-sm text-foreground font-medium">Compress tail-risk, create defensibility, buy time</div>
                        </div>
                    </div>
                </div>

                {/* SO WHAT - Capability focused */}
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm pt-4 border-t border-border">
                    <span className="text-muted-foreground">→ Defines <span className="text-foreground font-medium">measurable outcomes</span></span>
                    <span className="text-muted-foreground">→ Balances <span className="text-foreground font-medium">safety + growth</span></span>
                    <span className="text-muted-foreground">→ Thinks in <span className="text-foreground font-medium">systems, not just features</span></span>
                </div>
            </div>
        ),
        tags: ["AI Safety", "Product Teardown", "Case Study", "Trust & Safety"],
        status: "CASE STUDY",
        icon: <AlertTriangle className="w-6 h-6" />,
    }
];
