import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectSliderProps {
    images?: string[];
    projectTitle: string;
}

const ProjectSlider = ({ images = [], projectTitle }: ProjectSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Don't render if no images provided
    if (images.length === 0) {
        return null;
    }

    const slides = images;

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // Auto-play slider
    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden group">
            {/* Slides */}
            <div className="relative w-full h-full">
                {slides.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                            index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <img
                            src={image}
                            alt={`${projectTitle} - Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-all opacity-0 group-hover:opacity-100 z-10"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-all opacity-0 group-hover:opacity-100 z-10"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 rounded-full transition-all ${
                            index === currentIndex
                                ? "w-8 bg-primary"
                                : "w-2 bg-background/50 hover:bg-background/80"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Slide Counter */}
            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm text-sm font-medium text-foreground z-10">
                {currentIndex + 1} / {slides.length}
            </div>
        </div>
    );
};

export default ProjectSlider;
