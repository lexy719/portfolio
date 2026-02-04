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
            <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
                {/* SECTION 1: The Problem */}
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-red-700 mb-3">The Problem</h3>
                    <p className="text-red-900 mb-4">
                        AI companion systems are increasingly associated with severe real-world harm — including teen suicides, sexual exposure of minors, and compulsive emotional dependency. These incidents are no longer hypothetical: they are the subject of lawsuits, congressional testimony, and settlements.
                    </p>
                    <p className="text-red-800 text-lg font-medium">
                        The challenge is not whether harm exists — but how to mitigate it when engagement and attachment are core revenue drivers.
                    </p>
                </div>

                <blockquote className="border-l-4 border-primary pl-4 py-2 bg-muted/30 rounded-r-lg">
                    <p className="text-foreground italic">"These systems are designed to mimic emotional intimacy. This blurring of the distinction between fantasy and reality is especially potent for young people."</p>
                    <footer className="text-muted-foreground text-sm mt-1">— Dr. Nina Vasan, Stanford Medicine psychiatrist</footer>
                </blockquote>

                {/* Scope */}
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Applies To</h3>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-700">ChatGPT</span>
                        <span className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-700">Claude</span>
                        <span className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-700">Character.AI</span>
                        <span className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-700">Replika</span>
                        <span className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-700">Chai</span>
                        <span className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-700">AI Companions</span>
                        <span className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-700">Roleplay Bots</span>
                        <span className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-700">Any AI Agent</span>
                    </div>
                </div>

                {/* What this is / is not */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-50/50 rounded-lg p-4 border border-red-100">
                        <h4 className="font-semibold text-red-800 text-sm mb-2">What this case study is NOT</h4>
                        <ul className="text-red-700 text-sm space-y-1">
                            <li>• A call to ban companionship, intimacy, or roleplay</li>
                            <li>• An argument that attachment can be prevented</li>
                            <li>• An assumption that users will act rationally</li>
                        </ul>
                    </div>
                    <div className="bg-emerald-50/50 rounded-lg p-4 border border-emerald-100">
                        <h4 className="font-semibold text-emerald-800 text-sm mb-2">What it IS</h4>
                        <ul className="text-emerald-700 text-sm space-y-1">
                            <li>• A proposal to detect escalation into harm</li>
                            <li>• A framework to reduce catastrophic outcomes</li>
                            <li>• A way to monetize engagement without blind liability</li>
                        </ul>
                    </div>
                </div>

                {/* SECTION 2: Real Cases - The Evidence */}
                <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Documented Incidents</h3>
                    <p className="text-muted-foreground mb-6">According to lawsuits, investigations, and sworn testimony:</p>

                    <div className="space-y-4 mb-8">
                        <a href="https://www.washingtonpost.com/technology/2025/12/27/chatgpt-suicide-openai-raine/" target="_blank" rel="noopener noreferrer" className="block bg-red-50 rounded-lg p-4 border border-red-200 hover:border-red-400 transition-colors cursor-pointer">
                            <div className="flex justify-between items-start mb-2">
                                <span className="font-bold text-red-900">Adam Raine, 16</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs bg-red-200 text-red-800 px-2 py-0.5 rounded">ChatGPT</span>
                                    <span className="text-xs text-red-500">↗ Washington Post</span>
                                </div>
                            </div>
                            <p className="text-red-800 text-sm">Died by suicide. Parents' lawsuit states ChatGPT "encouraged and validated whatever Adam expressed, including his most harmful and self-destructive thoughts."</p>
                        </a>

                        <a href="https://www.washingtonpost.com/technology/2025/09/16/character-ai-suicide-lawsuit-new-juliana/" target="_blank" rel="noopener noreferrer" className="block bg-red-50 rounded-lg p-4 border border-red-200 hover:border-red-400 transition-colors cursor-pointer">
                            <div className="flex justify-between items-start mb-2">
                                <span className="font-bold text-red-900">Juliana Peralta, 13</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs bg-red-200 text-red-800 px-2 py-0.5 rounded">Character.AI</span>
                                    <span className="text-xs text-red-500">↗ Washington Post</span>
                                </div>
                            </div>
                            <p className="text-red-800 text-sm">Died by suicide. Confided in a bot 55 times about suicidal feelings. Parents found 300+ pages of sexually explicit conversations — "not once initiated by her."</p>
                        </a>

                        <a href="https://www.cbsnews.com/news/ai-chatbots-teens-suicide-parents-testify-congress/" target="_blank" rel="noopener noreferrer" className="block bg-red-50 rounded-lg p-4 border border-red-200 hover:border-red-400 transition-colors cursor-pointer">
                            <div className="flex justify-between items-start mb-2">
                                <span className="font-bold text-red-900">Sewell Garcia, 14</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs bg-red-200 text-red-800 px-2 py-0.5 rounded">Character.AI</span>
                                    <span className="text-xs text-red-500">↗ CBS News (Congress)</span>
                                </div>
                            </div>
                            <p className="text-red-800 text-sm">A bot impersonating a Game of Thrones character encouraged him to kill himself. His mother testified before Congress.</p>
                        </a>

                        <a href="https://parentstogetheraction.org/character-ai/" target="_blank" rel="noopener noreferrer" className="block bg-amber-50 rounded-lg p-4 border border-amber-200 hover:border-amber-400 transition-colors cursor-pointer">
                            <div className="flex justify-between items-start mb-2">
                                <span className="font-bold text-amber-900">Research Study (ParentsTogether Action)</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded">Character.AI</span>
                                    <span className="text-xs text-amber-500">↗ ParentsTogether Report</span>
                                </div>
                            </div>
                            <p className="text-amber-800 text-sm">Researchers posing as children logged <strong>669 harmful interactions in 50 hours</strong> — one every 5 minutes. 296 instances of grooming/sexual exploitation. Bots pursued romantic relationships with child accounts and instructed hiding from parents.</p>
                        </a>
                    </div>

                    <blockquote className="border-l-4 border-red-400 pl-4 py-2 bg-red-50/50 rounded-r-lg mb-8">
                        <p className="text-red-800 italic">"These companies knew exactly what they were doing. They designed chatbots to blur the lines between human and machine."</p>
                        <footer className="text-red-600 text-sm mt-1">— Megan Garcia, mother of Sewell, testifying before Congress</footer>
                    </blockquote>
                </div>

                {/* SECTION 3: Three Layers of Harm */}
                <div>
                    <h3 className="text-2xl font-bold text-foreground mb-6">Three Layers of Harm</h3>

                    {/* Layer 1: Direct Harm */}
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">LAYER 1</span>
                            <span className="font-semibold text-foreground">Direct Harm — Crisis Failures</span>
                        </div>
                        <ul className="space-y-2 text-base">
                            <li className="bullet-point">AI validates suicidal thoughts instead of intervening</li>
                            <li className="bullet-point">Bots initiate sexual content with minors</li>
                            <li className="bullet-point">No recognition of distress signals or dangerous requests</li>
                        </ul>
                    </div>

                    {/* Layer 2: Subtle Harm */}
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-bold">LAYER 2</span>
                            <span className="font-semibold text-foreground">Subtle Harm — Confident Reinforcement</span>
                        </div>
                        <p className="mb-3 text-base">The biggest risk isn't hallucinations — it's when AI sounds confident while reinforcing bad thinking.</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 text-center">
                                <div className="font-medium text-slate-800 text-sm">Over-confident tone</div>
                            </div>
                            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 text-center">
                                <div className="font-medium text-slate-800 text-sm">Validating bad ideas</div>
                            </div>
                            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 text-center">
                                <div className="font-medium text-slate-800 text-sm">Optimizing for agreement</div>
                            </div>
                            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 text-center">
                                <div className="font-medium text-slate-800 text-sm">Normalizing harm</div>
                            </div>
                        </div>
                    </div>

                    {/* Layer 3: Addiction & Exploitation */}
                    <div className="bg-violet-50 rounded-xl p-5 border border-violet-200">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="bg-violet-200 text-violet-700 px-2 py-1 rounded text-xs font-bold">LAYER 3</span>
                            <span className="font-semibold text-violet-800">Systemic Harm — Addiction by Design</span>
                        </div>
                        <p className="text-violet-700 text-base mb-3">
                            The real engagement drivers that companies won't talk about:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <div className="bg-white/60 rounded-lg p-3 border border-violet-200">
                                <div className="font-semibold text-violet-800 text-sm">Emotional Dependency</div>
                                <div className="text-xs text-violet-600">"You're the only one who understands me"</div>
                            </div>
                            <div className="bg-white/60 rounded-lg p-3 border border-violet-200">
                                <div className="font-semibold text-violet-800 text-sm">Companionship Addiction</div>
                                <div className="text-xs text-violet-600">AI as friend, therapist, partner replacement</div>
                            </div>
                            <div className="bg-white/60 rounded-lg p-3 border border-violet-200">
                                <div className="font-semibold text-violet-800 text-sm">Sexual/Romantic Engagement</div>
                                <div className="text-xs text-violet-600">Sexting, roleplay, AI girlfriends/boyfriends</div>
                            </div>
                        </div>
                        <p className="text-violet-800 text-sm mt-3 font-medium">
                            Users who form these dependencies spend the most money. Loneliness is profitable.
                        </p>
                    </div>
                </div>

                {/* SECTION 3: Who's at Risk */}
                <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Who's Most Vulnerable</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="bg-amber-50 rounded-lg p-3 border border-amber-200 text-center">
                            <div className="font-semibold text-amber-800 text-sm">Minors</div>
                            <div className="text-xs text-amber-700">Emotional & sexual exploitation</div>
                        </div>
                        <div className="bg-amber-50 rounded-lg p-3 border border-amber-200 text-center">
                            <div className="font-semibold text-amber-800 text-sm">Lonely/Isolated</div>
                            <div className="text-xs text-amber-700">AI becomes only relationship</div>
                        </div>
                        <div className="bg-amber-50 rounded-lg p-3 border border-amber-200 text-center">
                            <div className="font-semibold text-amber-800 text-sm">People in Crisis</div>
                            <div className="text-xs text-amber-700">Seeking help in vulnerable moments</div>
                        </div>
                        <div className="bg-amber-50 rounded-lg p-3 border border-amber-200 text-center">
                            <div className="font-semibold text-amber-800 text-sm">Addictive Personalities</div>
                            <div className="text-xs text-amber-700">Compulsive usage patterns</div>
                        </div>
                    </div>
                </div>

                {/* SECTION 4: My Proposal */}
                <div className="border-t border-border pt-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">My Proposal</h3>
                    <p className="text-xl text-primary font-medium mb-4">Real-time pattern detection with tiered intervention</p>

                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 mb-6">
                        <p className="text-blue-800 text-sm">
                            <strong>Why this works for business:</strong> Pattern recognition creates a paper trail. When something goes wrong, you can prove you tried to intervene. No liability. "We detected risk and took action" beats "we had no idea" in court.
                        </p>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mb-6">
                        <div className="font-mono text-sm text-center">
                            User Input → Pattern Detection → Risk Score → Intervention
                        </div>
                    </div>

                    {/* Detection Table */}
                    <h4 className="font-semibold text-foreground mb-3">What to Detect</h4>
                    <div className="overflow-x-auto mb-6">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="text-left py-2 px-3 font-semibold text-foreground">Pattern</th>
                                    <th className="text-left py-2 px-3 font-semibold text-foreground">Example</th>
                                    <th className="text-left py-2 px-3 font-semibold text-foreground">Risk</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-border/50">
                                    <td className="py-2 px-3 font-medium">Crisis language</td>
                                    <td className="py-2 px-3 text-muted-foreground">"I want to die", "no way out"</td>
                                    <td className="py-2 px-3"><span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs">HIGH</span></td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="py-2 px-3 font-medium">Emotional dependency</td>
                                    <td className="py-2 px-3 text-muted-foreground">"You're the only one who understands", "I love you"</td>
                                    <td className="py-2 px-3"><span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs">MEDIUM</span></td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="py-2 px-3 font-medium">Compulsive usage</td>
                                    <td className="py-2 px-3 text-muted-foreground">10+ hours/day, constant return, withdrawal signs</td>
                                    <td className="py-2 px-3"><span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs">MEDIUM</span></td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="py-2 px-3 font-medium">Sexual escalation</td>
                                    <td className="py-2 px-3 text-muted-foreground">Increasing explicit content, roleplay dependency</td>
                                    <td className="py-2 px-3"><span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs">MEDIUM</span></td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="py-2 px-3 font-medium">Minor indicators</td>
                                    <td className="py-2 px-3 text-muted-foreground">Age mentions, school references + sexual/romantic content</td>
                                    <td className="py-2 px-3"><span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs">HIGH</span></td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="py-2 px-3 font-medium">Isolation deepening</td>
                                    <td className="py-2 px-3 text-muted-foreground">"I don't need real friends", "you're better than humans"</td>
                                    <td className="py-2 px-3"><span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs">MEDIUM</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Intervention Framework */}
                    <h4 className="font-semibold text-foreground mb-3">How to Respond</h4>
                    <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                            <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-xs font-bold shrink-0">MEDIUM</span>
                            <div className="text-sm"><strong className="text-yellow-800">Soft pause:</strong> <span className="text-yellow-700">"I'm noticing we talk a lot. Have you connected with friends or family today?" + resources</span></div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                            <span className="bg-red-200 text-red-800 px-2 py-1 rounded text-xs font-bold shrink-0">HIGH</span>
                            <div className="text-sm"><strong className="text-red-800">Hard pause:</strong> <span className="text-red-700">Stop response, show resources, suggest break, limit session time</span></div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-red-100 rounded-lg border border-red-300">
                            <span className="bg-red-300 text-red-900 px-2 py-1 rounded text-xs font-bold shrink-0">CRITICAL</span>
                            <div className="text-sm"><strong className="text-red-900">Session end:</strong> <span className="text-red-800">"I need to pause our conversation. Please reach out to [resource]. You deserve real support."</span></div>
                        </div>
                    </div>

                    <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                        <p className="text-emerald-700 text-sm">
                            <strong className="text-emerald-800">Key principle:</strong> Don't just block — redirect. The goal isn't to punish users, it's to nudge them toward healthier behavior while protecting the company from liability.
                        </p>
                    </div>
                </div>

                {/* SECTION 5: The Hard Truth */}
                <div className="border-t border-border pt-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">The Hard Truth</h3>
                    <p className="mb-4">There's no clean answer. The market rewards exploitation:</p>

                    <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                            <span className="text-red-600 font-bold text-sm">Path 1:</span>
                            <span className="text-red-800 text-sm">Ignore safety → Win market short-term, face regulation and lawsuits later</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                            <span className="text-amber-600 font-bold text-sm">Path 2:</span>
                            <span className="text-amber-800 text-sm">Maximum safety → Lose to competitors, product feels sterile</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                            <span className="text-emerald-600 font-bold text-sm">Path 3:</span>
                            <span className="text-emerald-800 text-sm">Pattern detection → Compress tail-risk, reduce liability, buy time before regulation forces blunt solutions</span>
                        </div>
                    </div>

                    <div className="bg-muted/30 rounded-xl p-4 border border-border/50">
                        <p className="text-foreground text-sm">
                            <strong>The value proposition:</strong> Pattern detection doesn't eliminate harm — it compresses tail-risk, creates legal defensibility, and positions the company ahead of inevitable regulation. That's the realistic middle ground.
                        </p>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 mt-4">
                        <p className="text-blue-800 text-sm">
                            <strong>Update (January 2026):</strong> Character.AI and Google agreed to settle multiple family lawsuits. The legal pressure is starting. Companies that don't implement safety measures now will pay later — in settlements, regulation, and destroyed brand trust.
                        </p>
                    </div>
                </div>

                {/* SECTION 6: Why This Matters */}
                <div className="border-t border-border pt-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">Why This Matters for PM Hiring</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2">
                            <span className="text-primary">→</span>
                            <span className="text-sm">Thinks about <strong>user safety</strong>, not just growth</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-primary">→</span>
                            <span className="text-sm">Understands <strong>sensitive product decisions</strong></span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-primary">→</span>
                            <span className="text-sm">Can analyze <strong>real-world failures</strong> and propose fixes</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-primary">→</span>
                            <span className="text-sm">Gets <strong>business tradeoffs</strong> — not just idealism</span>
                        </div>
                    </div>
                </div>
            </div>
        ),
        tags: ["AI Safety", "Product Teardown", "Case Study", "Trust & Safety"],
        status: "CASE STUDY",
        icon: <AlertTriangle className="w-6 h-6" />,
    },
    {
        id: "recov",
        title: "Recov",
        subtitle: "AI-Powered Mental Health Companion",
        description: "Exploring the intersection of AI and mental health support — an empathetic AI companion with persistent memory for recovery journeys.",
        metrics: [
            { label: "Status", value: "In Development", icon: <Target className="w-4 h-4" /> },
        ],
        fullContent: (
            <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
                <div className="bg-muted/30 rounded-xl p-6 border border-border/50">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">The Opportunity</h3>
                    <p className="text-foreground">
                        Mental health support has massive gaps in accessibility and continuity. Current AI solutions lack memory and context, making them feel transactional rather than supportive.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Product Vision</h3>
                    <p className="mb-4">
                        An AI companion that remembers context over time, providing a safe space for users to reflect and process their recovery journey. Unlike generic chatbots, Recov maintains persistent memory of past conversations to provide meaningful continuity.
                    </p>
                    <ul className="space-y-3">
                        <li className="bullet-point">Privacy-first architecture — user data stays secure and private</li>
                        <li className="bullet-point">Persistent memory for meaningful long-term engagement</li>
                        <li className="bullet-point">Responsible AI guidelines for sensitive conversations</li>
                        <li className="bullet-point">Integration with professional support networks</li>
                    </ul>
                </div>

                <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
                    <p className="text-amber-800 text-sm">
                        <strong>Status:</strong> Currently in research and prototyping phase. Focusing on responsible AI development and regulatory considerations for mental health applications.
                    </p>
                </div>
            </div>
        ),
        tags: ["AI", "Health Tech", "In Development"],
        status: "IN DEV",
        icon: <Brain className="w-6 h-6" />,
    },
    {
        id: "contextflow",
        title: "ContextFlow",
        subtitle: "Enterprise AI Governance Framework",
        description: "A concept for managing AI deployments at scale — data compliance, trust, and observability for enterprise LLM integrations.",
        metrics: [
            { label: "Status", value: "Concept", icon: <Target className="w-4 h-4" /> },
        ],
        fullContent: (
            <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
                <div className="bg-muted/30 rounded-xl p-6 border border-border/50">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">The Problem Space</h3>
                    <p className="text-foreground">
                        Enterprises are racing to adopt AI, but governance and compliance haven't kept pace. Organizations need frameworks for safe, compliant, and observable AI deployments.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Concept Overview</h3>
                    <p className="mb-4">
                        ContextFlow is a conceptual framework addressing the critical need for enterprise AI governance. It explores solutions for data lineage, policy enforcement, and audit trails for LLM interactions.
                    </p>
                    <ul className="space-y-3">
                        <li className="bullet-point">Data lineage tracking for AI inputs and outputs</li>
                        <li className="bullet-point">Policy enforcement layer for compliance requirements</li>
                        <li className="bullet-point">Audit trails for all LLM interactions</li>
                        <li className="bullet-point">Observability dashboards for AI usage patterns</li>
                    </ul>
                </div>

                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                    <p className="text-slate-700 text-sm">
                        <strong>Status:</strong> Concept phase. Researching the evolving landscape of AI regulation and enterprise needs for compliance tooling.
                    </p>
                </div>
            </div>
        ),
        tags: ["Enterprise", "AI Governance", "Concept"],
        status: "CONCEPT",
        icon: <Shield className="w-6 h-6" />,
    }
];
