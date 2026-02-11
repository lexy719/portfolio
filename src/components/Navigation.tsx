import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#skills", label: "Skills" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-background/90 backdrop-blur-md border-b border-border/50 shadow-sm"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo / Name */}
                    <a
                        href="/"
                        className="group flex items-center gap-2"
                    >
                        <span className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                            Manuel Gonçalves
                        </span>
                        <span className="hidden sm:inline text-xs font-medium text-muted-foreground px-2 py-0.5 rounded bg-muted/50">
                            PM
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="mailto:manueljosigoncalves01@gmail.com"
                            className="ml-2 px-4 py-2 text-sm font-semibold text-background bg-foreground hover:bg-foreground/90 rounded-lg transition-all"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-1 border-t border-border/50 pt-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="mailto:manueljosigoncalves01@gmail.com"
                            className="block px-4 py-3 text-sm font-semibold text-center text-background bg-foreground hover:bg-foreground/90 rounded-lg transition-colors mt-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Hire Me
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
