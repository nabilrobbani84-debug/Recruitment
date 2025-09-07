import React from 'react';

/**
 * Interface untuk props komponen DashboardPageHeader.
 * @param title Judul utama halaman yang besar dan tebal.
 * @param description Deskripsi singkat di bawah judul untuk memberikan konteks.
 * @param actions Area untuk tombol-tombol aksi, seperti "Tambah Baru" atau "Ekspor".
 * @param children Konten tambahan yang bisa disisipkan di bawah header, seperti filter atau tab.
 */
interface DashboardPageHeaderProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * DashboardPageHeader
 * Komponen header yang modern dan responsif untuk halaman dasbor.
 * Didesain dengan flexbox untuk penataan yang solid di semua ukuran layar.
 * Menggunakan warna dan spacing yang konsisten dengan desain sistem modern.
 */
export function DashboardPageHeader({ 
  title, 
  description, 
  actions,
  children 
}: DashboardPageHeaderProps) {
  return (
    <header className="space-y-4">
      {/* Container utama dengan Flexbox untuk responsivitas */}
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        {/* Bagian Kiri: Judul dan Deskripsi */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          {description && (
            <p className="mt-2 text-lg text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        {/* Bagian Kanan: Tombol Aksi */}
        {actions && (
          <div className="flex flex-shrink-0 items-center space-x-3">
            {actions}
          </div>
        )}
      </div>
      
      {/* Konten Tambahan */}
      {children && (
        <div className="pt-4">
          {children}
        </div>
      )}
    </header>
  );
};

