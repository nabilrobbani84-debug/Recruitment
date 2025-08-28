// src/component/common/SectionTitle.tsx

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  // Memungkinkan untuk mengubah tag heading (h1, h2, dll.) untuk SEO dan semantik yang lebih baik.
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  // Prop baru untuk menambahkan elemen interaktif seperti tombol atau tautan di sisi kanan.
  actions?: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  className,
  as: HeadingTag = 'h2', // Komponen akan merender tag `h2` secara default.
  actions 
}) => {
  return (
    // Menggunakan flexbox untuk mensejajarkan judul di kiri dan aksi di kanan pada layar medium ke atas.
    <div className={cn("flex flex-col md:flex-row md:items-center md:justify-between gap-4", className)}>
      {/* Kontainer untuk judul dan subjudul */}
      <div>
        <HeadingTag className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {title}
        </HeadingTag>
        {subtitle && (
          <p className="mt-2 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            {subtitle}
          </p>
        )}
      </div>

      {/* Kontainer untuk elemen aksi, hanya dirender jika prop 'actions' ada */}
      {actions && (
        <div className="flex-shrink-0 mt-4 md:mt-0">
          {actions}
        </div>
      )}
    </div>
  );
};

// Pastikan tetap menggunakan default export agar konsisten.
export default SectionTitle;
