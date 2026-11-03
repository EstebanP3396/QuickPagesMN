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
      {/* Timeline container */}
      <div className="relative">
        {/* Horizontal timeline line for desktop/tablet */}
        <div className="absolute top-[80px] left-0 right-0 h-1 bg-border tablet:block mobile:hidden">
          <div
            className="absolute top-0 left-0 h-full bg-accent transition-all duration-1000 ease-out"
            style={{ width: isVisible ? "100%" : "0%" }}
          />
        </div>

        {/* Steps - vertical on mobile, horizontal on tablet/desktop */}
        <div className="flex flex-col gap-16 relative py-8 px-4 tablet:flex-row tablet:justify-between tablet:items-start tablet:pt-8 tablet:px-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 relative mobile:pl-36 tablet:pl-0 tablet:flex-col tablet:items-center tablet:gap-10 tablet:w-[16.666666666666668%]"
            >
              {/* Circular icon with number */}
              <div className={`relative z-10 transition-all duration-700 mobile:absolute mobile:left-0 mobile:top-0 tablet:static ${
                isVisible ? "opacity-100" : "opacity-50"
              }`}>
                <div className={`
                  w-36 h-36 mobile:w-36 mobile:h-36 tablet:w-[125px] tablet:h-[125px] rounded-full border-2 flex items-center justify-center transition-all duration-700
                  ${isVisible
                    ? "bg-accent border-accent shadow-glow-sm"
                    : "bg-surface border-border"
                  }
                `}>
                  <span className={`
                    text-4xl mobile:text-4xl tablet:text-4xl font-bold transition-colors duration-700
                    ${isVisible ? "text-surface" : "text-primary"}
                  `}>
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`flex flex-col transition-all duration-700 tablet:items-center tablet:justify-center tablet:px-6 tablet:text-center ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-50 translate-y-4"
              }`}>
                <h3
                  className={`text-2xl mobile:text-xl tablet:text-3xl font-semibold leading-tight mb-4 mobile:mb-3 tablet:mb-5 transition-colors duration-700 ${
                    isVisible ? "text-primary" : "text-muted"
                  }`}
                >
                  {step.title}
                </h3>
                <Text
                  size="body"
                  color="secondary"
                  className="leading-[1.8] mobile:text-sm tablet:text-sm max-w-none tablet:max-w-[160px] tablet:text-center"
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
