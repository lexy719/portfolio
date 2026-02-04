import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    subtitle: string;
    content: React.ReactNode;
}

const ProjectModal = ({ isOpen, onClose, title, subtitle, content }: ProjectModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div
                className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in"
                onClick={onClose}
            />

            <div
                ref={modalRef}
                className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-card border border-border rounded-xl shadow-2xl animate-fade-in"
            >
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 p-2 rounded-full hover:bg-muted transition-colors z-10"
                >
                    <X className="w-5 h-5 text-muted-foreground" />
                </button>

                <div className="p-8 space-y-6">
                    <div className="space-y-2 pr-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
                            {title}
                        </h2>
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            {subtitle}
                        </p>
                    </div>

                    <div className="prose prose-invert prose-p:text-muted-foreground prose-headings:text-foreground max-w-none">
                        {content}
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ProjectModal;
