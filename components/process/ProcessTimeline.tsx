"use client";

import { useRef, useEffect, useState } from "react";
import { Heading, Text } from "@/components/typography";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
  className?: string;
}

export function ProcessTimeline({ steps, className = "" }: ProcessTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the container is in view (with some buffer)
      const isInView = containerRect.top < windowHeight * 0.8 && containerRect.bottom > windowHeight * 0.2;
      setIsVisible(isInView);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Horizontal timeline container */}
      <div className="relative">
        {/* Progress line */}
        <div className="absolute top-12 left-0 right-0 h-px bg-border">
          <div 
            className="absolute top-0 left-0 h-full bg-accent transition-all duration-1000 ease-out"
            style={{ width: isVisible ? "100%" : "0%" }}
          />
        </div>

        {/* Steps */}
        <div className="flex justify-between items-start relative pt-8 px-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-10 relative"
              style={{ width: `${100 / steps.length}%` }}
            >
              {/* Circular icon with number */}
              <div className={`relative z-10 transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-50"
              }`}>
                <div className={`
                  w-20 h-20 rounded-full border-2 flex items-center justify-center transition-all duration-700
                  ${isVisible 
                    ? "bg-accent border-accent shadow-glow-sm" 
                    : "bg-surface border-border"
                  }
                `}>
                  <span className={`
                    text-2xl font-bold transition-colors duration-700
                    ${isVisible ? "text-surface" : "text-primary"}
                  `}>
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`flex flex-col items-center justify-center transition-all duration-700 px-6 text-center ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-50 translate-y-4"
              }`}>
                <Heading 
                  level="h3" 
                  size="section-title" 
                  className={`mb-5 transition-colors duration-700 leading-tight font-semibold text-center ${
                    isVisible ? "text-primary" : "text-muted"
                  }`}
                >
                  {step.title}
                </Heading>
                <Text 
                  size="body" 
                  color="secondary" 
                  className="leading-[1.8] max-w-[160px] text-sm text-center"
                >
                  {step.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
