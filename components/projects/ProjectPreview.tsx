"use client";

import { useEffect, useRef, useState } from "react";

const FRAME_WIDTH = 1280;
const FRAME_HEIGHT = 800;

interface ProjectPreviewProps {
  url: string;
  title: string;
  className?: string;
}

export function ProjectPreview({ url, title, className = "" }: ProjectPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScale = () => setScale(container.clientWidth / FRAME_WIDTH);
    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative aspect-video overflow-hidden bg-surface-alt ${className}`}
    >
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface-alt">
          <span className="animate-pulse font-display text-[0.65rem] uppercase tracking-[0.2em] text-muted">
            Cargando
          </span>
        </div>
      )}
      {scale > 0 && (
        <iframe
          src={url}
          title={`Vista previa de ${title}`}
          loading="lazy"
          tabIndex={-1}
          onLoad={() => setIsLoaded(true)}
          className="pointer-events-none absolute left-0 top-0 border-0 origin-top-left transition-opacity duration-500"
          style={{
            width: FRAME_WIDTH,
            height: FRAME_HEIGHT,
            transform: `scale(${scale})`,
            opacity: isLoaded ? 1 : 0,
          }}
        />
      )}
    </div>
  );
}
