import React from "react";
import { LucideProps } from "lucide-react";

interface IconProps extends LucideProps {
  icon: React.ElementType;
  className?: string;
}

export default function Icon({
  icon: IconComponent,
  className = "",
  ...props
}: IconProps) {
  return <IconComponent className={`text-icon-color ${className}`} {...props} />;
} 