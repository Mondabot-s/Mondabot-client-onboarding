import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingStyles = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className = '',
  padding = 'md',
}: CardProps) {
  return (
    <div
      className={`bg-content-bg rounded-xl shadow-card ${paddingStyles[padding]} ${className}`}
    >
      {children}
    </div>
  );
} 