"use client";

import { ReactNode, useEffect, useRef } from "react";

interface DottedBackgroundProps {
  children?: ReactNode;
}

export default function DottedBackground({ children }: DottedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      // Canvas bekommt die volle Dokumenthöhe, nicht nur Viewport
      canvas.width = window.innerWidth;
      canvas.height = Math.max(
        document.documentElement.scrollHeight,
        window.innerHeight
      );
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    // Auch bei Scroll/Layout-Änderungen neu dimensionieren
    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(document.body);

    const dots: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      pulseSpeed: number;
      pulseOffset: number;
    }> = [];

    // Create floating dots - mehr Dots für größere Fläche
    const dotCount = Math.min(
      200,
      Math.floor((canvas.width * canvas.height) / 20000)
    );
    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    let animationId: number;

    const animate = () => {
      time += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot, index) => {
        // Update position
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce off edges
        if (dot.x <= 0 || dot.x >= canvas.width) dot.vx *= -1;
        if (dot.y <= 0 || dot.y >= canvas.height) dot.vy *= -1;

        // Keep dots in bounds
        dot.x = Math.max(0, Math.min(canvas.width, dot.x));
        dot.y = Math.max(0, Math.min(canvas.height, dot.y));

        // Pulsing effect
        const pulse =
          Math.sin(time * dot.pulseSpeed + dot.pulseOffset) * 0.5 + 0.5;
        const currentRadius = dot.radius * (0.5 + pulse * 0.5);
        const currentOpacity = dot.opacity * (0.3 + pulse * 0.7);

        // Draw dot
        const gradient = ctx.createRadialGradient(
          dot.x,
          dot.y,
          0,
          dot.x,
          dot.y,
          currentRadius * 2
        );
        gradient.addColorStop(0, `rgba(168, 85, 247, ${currentOpacity})`); // purple-500
        gradient.addColorStop(
          0.7,
          `rgba(139, 92, 246, ${currentOpacity * 0.5})`
        ); // purple-400
        gradient.addColorStop(1, `rgba(168, 85, 247, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, currentRadius * 2, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby dots
        dots.forEach((otherDot, otherIndex) => {
          if (index !== otherIndex) {
            const dx = dot.x - otherDot.x;
            const dy = dot.y - otherDot.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              const opacity = (1 - distance / 100) * 0.1;
              ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(dot.x, dot.y);
              ctx.lineTo(otherDot.x, otherDot.y);
              ctx.stroke();
            }
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full opacity-70 pointer-events-none"
        style={{ height: "100%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
