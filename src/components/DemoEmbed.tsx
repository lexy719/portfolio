import { useState } from "react";
import { ExternalLink, Maximize2, Minimize2, Monitor } from "lucide-react";

interface DemoEmbedProps {
    url: string;
    title: string;
}

const DemoEmbed = ({ url, title }: DemoEmbedProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`relative rounded-xl overflow-hidden border border-border/50 bg-card shadow-lg transition-all duration-300 ${isExpanded ? 'fixed inset-4 z-50' : ''}`}>
            {/* Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border/50">
                <div className="flex items-center gap-3">
                    {/* Traffic lights */}
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Monitor className="w-4 h-4" />
                        <span className="font-medium">{title}</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 font-medium">LIVE DEMO</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="p-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                        title={isExpanded ? "Minimize" : "Expand"}
                    >
                        {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                    </button>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                        title="Open in new tab"
                    >
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* iframe */}
            <div className={`relative bg-white ${isExpanded ? 'h-[calc(100%-52px)]' : 'h-[500px]'}`}>
                <iframe
                    src={url}
                    title={title}
                    className="w-full h-full"
                    loading="lazy"
                    allow="fullscreen"
                />
            </div>

            {/* Overlay for expanded mode background */}
            {isExpanded && (
                <div
                    className="fixed inset-0 bg-black/50 -z-10"
                    onClick={() => setIsExpanded(false)}
                />
            )}
        </div>
    );
};

export default DemoEmbed;
