import React from "react";
import { useMousePosition } from "@/hooks/UseMousePosition.jsx";
import styles from "@/styles/globals.module.css";

const AnimatedBackground = () => {
  const mousePosition = useMousePosition();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Floating Orbs */}
      <div
        className="absolute w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"
        style={{
          left: `${mousePosition.x * 0.02}px`,
          top: `${mousePosition.y * 0.02}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div
        className="absolute w-72 h-72 bg-red-800/10 rounded-full blur-3xl animate-pulse delay-1000"
        style={{
          right: `${mousePosition.x * 0.01}px`,
          bottom: `${mousePosition.y * 0.01}px`,
          transform: "translate(50%, 50%)",
        }}
      />

      {/* Floating Particles */}
      <div
        className={`absolute top-1/4 left-1/4 w-2 h-2 bg-red-500/30 rounded-full ${styles.float1}`}
      />
      <div
        className={`absolute top-1/3 right-1/3 w-1 h-1 bg-red-400/40 rounded-full ${styles.float2}`}
      />
      <div
        className={`absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-red-300/35 rounded-full ${styles.float3}`}
      />
      <div
        className={`absolute bottom-1/4 right-1/4 w-1 h-1 bg-red-600/30 rounded-full ${styles.float4}`}
      />
      <div
        className={`absolute top-1/2 left-1/6 w-2 h-2 bg-red-500/25 rounded-full ${styles.float5}`}
      />
      <div
        className={`absolute top-3/4 right-1/6 w-1 h-1 bg-red-400/35 rounded-full ${styles.float6}`}
      />

      {/* Geometric Shapes */}
      <div
        className={`absolute top-1/5 right-1/5 w-8 h-8 border border-red-500/20 rotate-45 ${styles.spinSlow}`}
      />
      <div
        className={`absolute bottom-1/5 left-1/5 w-6 h-6 border border-red-600/20 rotate-12 ${styles.spinReverse}`}
      />
      <div
        className={`absolute top-2/3 right-2/3 w-10 h-10 border border-red-400/15 rounded-full ${styles.spinMedium}`}
      />

      {/* Gradient Lines - Fixed with proper pulse animation */}
      <div
        className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent animate-pulse"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      />
      <div
        className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-600/15 to-transparent animate-pulse"
        style={{ animationDelay: "2s", animationDuration: "5s" }}
      />
      <div
        className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-red-500/10 to-transparent animate-pulse"
        style={{ animationDelay: "0.5s", animationDuration: "6s" }}
      />

      {/* Animated Dots Grid */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500/20 rounded-full animate-pulse"
            style={{
              left: `${(i % 5) * 20 + 10}%`,
              top: `${Math.floor(i / 5) * 25 + 10}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Code Symbols */}
      <div
        className={`absolute top-1/6 left-1/12 text-red-500/20 text-2xl ${styles.drift1}`}
      >
        {"<>"}
      </div>
      <div
        className={`absolute bottom-1/6 right-1/12 text-red-600/20 text-xl ${styles.drift2}`}
      >
        {"{ }"}
      </div>
      <div
        className={`absolute top-1/2 right-1/8 text-red-400/20 text-lg ${styles.drift3}`}
      >
        {"</>"}
      </div>
      <div
        className={`absolute bottom-1/3 left-1/8 text-red-500/20 text-xl ${styles.drift4}`}
      >
        {"( )"}
      </div>
    </div>
  );
};

export default AnimatedBackground;
