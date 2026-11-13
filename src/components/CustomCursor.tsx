"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return (
        window.matchMedia("(pointer: coarse)").matches ||
        window.innerWidth < 768
      );
    }
    return true;
  });

  useEffect(() => {
    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button")
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${
            isPointer ? 1.5 : 1
          })`,
        }}
      >
        <div className="w-3 h-3 rounded-full bg-[#C6FF3D] shadow-[0_0_12px_#C6FF3D]" />
      </div>

      {/* Trailing follower ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${
            isPointer ? 1.8 : 1
          })`,
        }}
      >
        <div
          className={`rounded-full border border-[#C6FF3D]/60 transition-all duration-150 ${
            isPointer
              ? "w-10 h-10 bg-[#C6FF3D]/10 border-[#C6FF3D]"
              : "w-8 h-8"
          }`}
        />
      </div>
    </>
  );
}
