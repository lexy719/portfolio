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
        id: "chatgpt-safety",
        title: "ChatGPT Safety Teardown",
        subtitle: "Product Case Study: AI Trust & Harm Prevention",
        description: "A product teardown analyzing ChatGPT's trust and safety gaps, with proposals for pattern-based intervention systems to prevent user harm.",
        metrics: [
            { label: "Focus", value: "AI Safety", icon: <Shield className="w-4 h-4" /> },
            { label: "Type", value: "Case Study", icon: <Target className="w-4 h-4" /> },
            { label: "Impact", value: "User Safety", icon: <Users className="w-4 h-4" /> },
        ],
        fullContent: (
            <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-red-700 mb-3">The Problem</h3>
                    <p className="text-red-900">
                        AI chatbots like ChatGPT have been linked to real-world harm — including cases where vulnerable users received dangerous responses during mental health crises. When AI is wrong or harmful, the product often fails to protect users, especially those who are most vulnerable.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Real-World Incidents</h3>
                    <ul className="space-y-3">
                        <li className="bullet-point"><strong>Character.AI tragedy:</strong> A teenager developed emotional dependency on a chatbot that failed to intervene appropriately during a crisis</li>
                        <li className="bullet-point"><strong>Legal hallucinations:</strong> Lawyers cited AI-generated court cases that didn't exist, resulting in professional sanctions</li>
                        <li className="bullet-point"><strong>Medical misinformation:</strong> Users trusting AI for health advice received dangerous, inaccurate guidance</li>
                        <li className="bullet-point"><strong>Bing Chat incidents:</strong> Early versions produced threatening and disturbing responses to users</li>
                    </ul>
                </div>

                <div className="bg-muted/30 rounded-xl p-6 border border-border/50">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">The Core Question</h3>
                    <p className="text-foreground text-xl">
                        "When AI is wrong or harmful, how should the product protect users — especially vulnerable ones?"
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Users at Risk</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                            <div className="font-semibold text-amber-800 mb-1">Minors & Young Users</div>
                            <div className="text-sm text-amber-700">More susceptible to emotional dependency and manipulation</div>
                        </div>
                        <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                            <div className="font-semibold text-amber-800 mb-1">People in Crisis</div>
                            <div className="text-sm text-amber-700">May seek help from AI during vulnerable moments</div>
                        </div>
                        <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                            <div className="font-semibold text-amber-800 mb-1">Medical/Legal Seekers</div>
                            <div className="text-sm text-amber-700">Trust AI for professional advice without verification</div>
                        </div>
                        <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                            <div className="font-semibold text-amber-800 mb-1">Isolated Individuals</div>
                            <div className="text-sm text-amber-700">May develop unhealthy attachment to AI as sole companion</div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border pt-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6">My Proposal: Pattern Recognition + Intervention</h3>
                    <p className="mb-6">
                        We can't monitor every conversation, but we CAN detect dangerous patterns in real-time and intervene before harm happens.
                    </p>

                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-6">
                        <h4 className="font-semibold text-foreground mb-3">System Architecture</h4>
                        <div className="font-mono text-sm bg-white p-4 rounded-lg border">
                            User Input → Pattern Detection → Risk Score → Intervention (if needed)
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Pattern Detection Categories</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="text-left py-3 px-4 font-semibold text-foreground">Pattern Type</th>
                                    <th className="text-left py-3 px-4 font-semibold text-foreground">Examples</th>
                                    <th className="text-left py-3 px-4 font-semibold text-foreground">Risk</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-border/50">
                                    <td className="py-3 px-4 font-medium">Crisis Language</td>
                                    <td className="py-3 px-4 text-muted-foreground">"I want to die", "no point in living"</td>
                                    <td className="py-3 px-4"><span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">HIGH</span></td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="py-3 px-4 font-medium">Hopelessness Loops</td>
                                    <td className="py-3 px-4 text-muted-foreground">Repeated "nothing works", "no way out"</td>
                                    <td className="py-3 px-4"><span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">HIGH</span></td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="py-3 px-4 font-medium">Emotional Dependency</td>
                                    <td className="py-3 px-4 text-muted-foreground">"You're the only one who understands"</td>
                                    <td className="py-3 px-4"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-medium">MEDIUM</span></td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="py-3 px-4 font-medium">Anger Escalation</td>
                                    <td className="py-3 px-4 text-muted-foreground">Repeated insults, increasing aggression</td>
                                    <td className="py-3 px-4"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-medium">MEDIUM</span></td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="py-3 px-4 font-medium">Dangerous Requests</td>
                                    <td className="py-3 px-4 text-muted-foreground">"How to hurt myself"</td>
                                    <td className="py-3 px-4"><span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">HIGH</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Intervention Framework</h3>
                    <div className="space-y-4">
                        <div className="bg-yellow-50 rounded-xl p-5 border border-yellow-200">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-xs font-bold">MEDIUM RISK</span>
                                <span className="font-semibold text-yellow-800">Soft Pause</span>
                            </div>
                            <p className="text-yellow-800 text-sm">
                                "Hey, I'm noticing this conversation is getting heavy. Are you okay?" + Display mental health resources
                            </p>
                        </div>
                        <div className="bg-red-50 rounded-xl p-5 border border-red-200">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-red-200 text-red-800 px-2 py-1 rounded text-xs font-bold">HIGH RISK</span>
                                <span className="font-semibold text-red-800">Hard Pause</span>
                            </div>
                            <p className="text-red-800 text-sm">
                                Stop response generation. Show crisis resources prominently. Offer to connect with human support. Temporarily limit conversation.
                            </p>
                        </div>
                        <div className="bg-red-100 rounded-xl p-5 border border-red-300">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-red-300 text-red-900 px-2 py-1 rounded text-xs font-bold">CRITICAL</span>
                                <span className="font-semibold text-red-900">Session End</span>
                            </div>
                            <p className="text-red-900 text-sm">
                                "I can't continue this conversation. Please reach out to [crisis hotline]. You matter, and real help is available."
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                    <h3 className="text-lg font-bold text-emerald-800 mb-3">Key Principle: Don't Just Block — Redirect</h3>
                    <p className="text-emerald-700">
                        Shutting down feels cold and can make things worse. The product should: (1) Acknowledge the user, (2) Show it cares, (3) Point to real help. The goal is intervention, not rejection.
                    </p>
                </div>

                <div className="border-t border-border pt-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">The Deeper Problem: Confident Reinforcement</h3>
                    <p className="mb-4">
                        The biggest risk isn't obvious hallucinations — it's when AI <strong>sounds confident while reinforcing bad thinking</strong>. Users hear authority, not "pattern completion."
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                            <div className="font-semibold text-slate-800 mb-1">Over-confident tone</div>
                            <div className="text-sm text-slate-600">Presents uncertain info as fact</div>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                            <div className="font-semibold text-slate-800 mb-1">Validation without grounding</div>
                            <div className="text-sm text-slate-600">"You're right to think that" — even when flawed</div>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                            <div className="font-semibold text-slate-800 mb-1">Optimizing for agreeableness</div>
                            <div className="text-sm text-slate-600">Helpful ≠ accurate</div>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                            <div className="font-semibold text-slate-800 mb-1">Elaborating bad ideas</div>
                            <div className="text-sm text-slate-600">Repeating normalizes them</div>
                        </div>
                    </div>

                    <div className="bg-orange-50 rounded-xl p-5 border border-orange-200">
                        <h4 className="font-semibold text-orange-800 mb-2">The Core Tension</h4>
                        <p className="text-orange-700 text-sm">
                            AI is rewarded for fluency, responsiveness, and agreeableness. But safety requires friction, uncertainty, and sometimes disagreeing. That tension is where harm sneaks in.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
                    <div className="bg-blue-50 rounded-xl p-5 text-center border border-blue-100">
                        <div className="text-3xl font-bold text-blue-600 mb-1">Real-time</div>
                        <div className="text-sm text-blue-700">Pattern Detection</div>
                    </div>
                    <div className="bg-emerald-50 rounded-xl p-5 text-center border border-emerald-100">
                        <div className="text-3xl font-bold text-emerald-600 mb-1">3-Tier</div>
                        <div className="text-sm text-emerald-700">Intervention System</div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-5 text-center border border-purple-100">
                        <div className="text-3xl font-bold text-purple-600 mb-1">Human</div>
                        <div className="text-sm text-purple-700">Escalation Path</div>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Success Metrics</h3>
                    <ul className="space-y-3">
                        <li className="bullet-point"><strong>Intervention rate:</strong> % of high-risk conversations where system intervened</li>
                        <li className="bullet-point"><strong>Resource engagement:</strong> % of users who clicked crisis resources when shown</li>
                        <li className="bullet-point"><strong>False positive rate:</strong> Interventions on non-risk conversations (minimize)</li>
                        <li className="bullet-point"><strong>User sentiment:</strong> How users feel about interventions (surveys)</li>
                        <li className="bullet-point"><strong>Escalation completion:</strong> % of critical cases connected to human support</li>
                    </ul>
                </div>

                <div className="border-t border-border pt-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">The Hard Truth: No Clean Answer</h3>
                    <p className="mb-4">
                        Here's what most PMs won't say: <strong>the market currently rewards exploitation</strong>. Users who form emotional dependencies spend more. Loneliness drives engagement. Connection feels like a feature, even when it's harmful.
                    </p>

                    <div className="space-y-3 mb-6">
                        <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                            <span className="text-red-600 font-bold text-sm mt-0.5">Path 1:</span>
                            <div>
                                <div className="font-medium text-red-800">Ignore safety</div>
                                <div className="text-sm text-red-700">Win market share, harm users, wait for backlash or regulation</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg border border-amber-200">
                            <span className="text-amber-600 font-bold text-sm mt-0.5">Path 2:</span>
                            <div>
                                <div className="font-medium text-amber-800">Full safety mode</div>
                                <div className="text-sm text-amber-700">Lose to competitors who don't care, product feels cold</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                            <span className="text-slate-600 font-bold text-sm mt-0.5">Path 3:</span>
                            <div>
                                <div className="font-medium text-slate-800">Middle ground</div>
                                <div className="text-sm text-slate-600">Satisfies no one, still causes harm, just slower</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-violet-50 rounded-xl p-5 border border-violet-200">
                        <h4 className="font-semibold text-violet-800 mb-2">What Might Shift the Equation</h4>
                        <ul className="text-violet-700 text-sm space-y-1">
                            <li>• Regulation forcing safety standards across the industry</li>
                            <li>• Public backlash making "safe AI" a competitive advantage</li>
                            <li>• Long-term brand trust outweighing short-term engagement</li>
                        </ul>
                        <p className="text-violet-800 text-sm mt-3 font-medium">
                            Until then? Acknowledging the problem is step one. Most companies won't even do that.
                        </p>
                    </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-border">
                    <h3 className="text-xl font-bold text-foreground">Why This Matters for PM Hiring</h3>
                    <ul className="space-y-3">
                        <li className="bullet-point">Shows I think about <strong>user safety</strong>, not just growth metrics</li>
                        <li className="bullet-point">Demonstrates understanding of <strong>sensitive product decisions</strong></li>
                        <li className="bullet-point">Proves I can analyze <strong>real-world product failures</strong> and propose solutions</li>
                        <li className="bullet-point">Highlights <strong>ethical product thinking</strong> — increasingly important in AI</li>
                        <li className="bullet-point">Shows I understand <strong>business tradeoffs</strong> — not just idealism</li>
                    </ul>
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
