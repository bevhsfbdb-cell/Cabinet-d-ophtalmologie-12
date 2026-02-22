import React from 'react';

export const Logo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Top Curve - Dark Green */}
        <path
          d="M10 30C10 30 35 5 90 30"
          stroke="var(--color-brand-green)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Bottom Curve - Dark Green */}
        <path
          d="M10 30C10 30 35 55 90 30"
          stroke="var(--color-brand-green)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Inner Top Curve - Gold */}
        <path
          d="M20 30C20 30 40 15 80 30"
          stroke="var(--color-brand-gold)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Inner Bottom Curve - Gold */}
        <path
          d="M20 30C20 30 40 45 80 30"
          stroke="var(--color-brand-gold)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Iris */}
        <circle cx="50" cy="30" r="12" fill="var(--color-brand-iris)" />
        {/* Pupil */}
        <circle cx="50" cy="30" r="6" fill="#000" />
        {/* Reflection */}
        <circle cx="53" cy="27" r="2" fill="#fff" />
      </svg>
    </div>
  );
};
