import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  // Prop 'as' allows you to change the heading tag (h1, h2, etc.) for better SEO and semantics.
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  align = 'left', // Defaulting to 'left' is often more versatile for dashboard layouts.
  className,
  as: HeadingTag = 'h2' // The component will render an `h2` tag by default.
}: SectionTitleProps) => {
  
  // A cleaner way to map props to Tailwind classes.
  const alignmentClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  };

  return (
    <div className={cn("flex flex-col", alignmentClasses[align], className)}>
      <HeadingTag className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </HeadingTag>
      {subtitle && (
        <p className={cn("mt-3 max-w-2xl text-md text-gray-600")}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

// --- FIX: Changed from a named export to a default export. ---
export default SectionTitle;
