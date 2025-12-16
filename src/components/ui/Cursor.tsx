"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState("default");
  const [isMobile, setIsMobile] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const idleTimer = useRef<NodeJS.Timeout | null>(null);
  
  const pathname = usePathname();

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Matrix Rain Effect
  useEffect(() => {
      if (!isIdle) return;
      
      const spawnRain = setInterval(() => {
            const drop = document.createElement("div");
            drop.className = "cursor-matrix-char";
            drop.innerText = Math.random() > 0.5 ? "1" : "0";
            if (dotRef.current) {
                const rect = dotRef.current.getBoundingClientRect();
                drop.style.left = `${rect.left + (Math.random() - 0.5) * 20}px`;
                drop.style.top = `${rect.top}px`;
            }
            
            document.body.appendChild(drop);
            
            // Animate drop
            let top = parseFloat(drop.style.top);
            let opacity = 1;
            const fall = () => {
                top += 2;
                opacity -= 0.01;
                drop.style.top = `${top}px`;
                drop.style.opacity = opacity.toString();
                
                if (opacity > 0) {
                    requestAnimationFrame(fall);
                } else {
                    drop.remove();
                }
            };
            requestAnimationFrame(fall);

      }, 100); // New drop every 100ms
      
      return () => clearInterval(spawnRain);
  }, [isIdle]);

  // Magnetic Snap Logic
  const magneticRef = useRef<HTMLElement | null>(null);
  const magneticBounds = useRef<DOMRect | null>(null);
  
  // Update bounds on scroll/resize
  useEffect(() => {
    const updateBounds = () => {
      if (magneticRef.current) {
        magneticBounds.current = magneticRef.current.getBoundingClientRect();
      }
    };
    window.addEventListener("scroll", updateBounds);
    window.addEventListener("resize", updateBounds);
    return () => {
        window.removeEventListener("scroll", updateBounds);
        window.removeEventListener("resize", updateBounds);
    }
  }, []);

  // Main cursor logic
  useEffect(() => {
    if (isMobile) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const glow = glowRef.current;

    if (!dot || !ring || !glow) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let mouseDown = false;

    // Movement smoothing
    const ease = 0.15;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Immediate update for dot and glow
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      glow.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;

      // Trail effect
      if (Math.random() > 0.7) { // Limit spawn rate
          const trail = document.createElement("div");
          trail.className = "cursor-trail-particle";
          trail.style.left = `${mouseX}px`;
          trail.style.top = `${mouseY}px`;
          trail.style.width = `${Math.random() * 4 + 2}px`; // 2-6px
          trail.style.height = trail.style.width;
          document.body.appendChild(trail);

          // Animate and remove
          let opacity = 0.5;
          const fade = () => {
              opacity -= 0.02;
              if (opacity <= 0) {
                  trail.remove();
              } else {
                  trail.style.opacity = opacity.toString();
                  requestAnimationFrame(fade);
              }
          };
          requestAnimationFrame(fade);
      }
      
      // Reset idle timer
      if (idleTimer.current) clearTimeout(idleTimer.current);
      setIsIdle(false);
      idleTimer.current = setTimeout(() => {
          setIsIdle(true);
      }, 2000);
    };

    const onMouseDown = () => {
      mouseDown = true;
      ring.style.width = "30px";
      ring.style.height = "30px";
      
      // Create ripple
      const ripple = document.createElement("div");
      ripple.className = "cursor-ripple";
      ripple.style.left = `${mouseX}px`;
      ripple.style.top = `${mouseY}px`;
      document.body.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    const onMouseUp = () => {
      mouseDown = false;
      ring.style.width = "";
      ring.style.height = "";
    };

    const animate = () => {
      let targetX = mouseX;
      let targetY = mouseY;

      // Apply Magnetic Pull
      if (magneticBounds.current) {
          const bounds = magneticBounds.current;
          const centerX = bounds.left + bounds.width / 2;
          const centerY = bounds.top + bounds.height / 2;
          
          // Pull towards center (30% strength)
          targetX = mouseX + (centerX - mouseX) * 0.3;
          targetY = mouseY + (centerY - mouseY) * 0.3;
      }

      // Smooth follow for ring
      ringX += (targetX - ringX) * ease;
      ringY += (targetY - ringY) * ease;
      
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    
    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(animationId);
    };
  }, [isMobile]);

  // Hover state listeners
  useEffect(() => {
    if (isMobile) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for buttons/links (Magnetic Targets)
      const button = target.closest("button") || target.closest("a");
      if (button) {
          setCursorState("hover-button");
          magneticRef.current = button as HTMLElement;
          magneticBounds.current = button.getBoundingClientRect();
          return;
      }
      
      // Reset magnetic
      magneticRef.current = null;
      magneticBounds.current = null;
      
      // Check for inputs
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
          setCursorState("hover-input");
          return;
      }

      // Check for code blocks (simple heuristic based on class or tag)
      if (target.tagName === "CODE" || target.closest("pre")) {
          setCursorState("hover-code");
          return;
      }

      // Check for text (p, h1-h6) - simplified
      if (["P", "H1", "H2", "H3", "H4", "H5", "H6", "SPAN"].includes(target.tagName)) {
         setCursorState("hover-text");
         return;
      }

      setCursorState("default");
    };

    // Use event delegation on body
    document.body.addEventListener("mouseover", handleMouseOver);
    
    return () => {
        document.body.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile, pathname]); // Re-attach on route change just in case

  if (isMobile) return null;

  return (
    <div className={`custom-cursor cursor-${cursorState}`}>
      <div ref={glowRef} className="cursor-glow" />
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
}
