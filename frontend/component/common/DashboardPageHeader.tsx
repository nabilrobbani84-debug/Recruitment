import React from 'react';

/**
 * Interface untuk props komponen DashboardPageHeader.
 * @param title Judul utama halaman, wajib diisi.
 * @param subtitle Deskripsi singkat atau subjudul di bawah judul utama, wajib diisi.
 * @param actions Element React opsional untuk tombol aksi (misalnya, <Button> atau <Link>).
 * @param children Element React opsional jika ingin menambahkan konten tambahan di bawah header.
 */
interface DashboardPageHeaderProps {
  title: string;
  subtitle: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * DashboardPageHeader adalah komponen reusable untuk menampilkan header halaman dasbor.
 * Komponen ini mencakup judul, subjudul, dan area untuk tombol aksi.
 * Didesain agar responsif di berbagai ukuran layar.
 */
const DashboardPageHeader: React.FC<DashboardPageHeaderProps> = ({ 
  title, 
  subtitle, 
  actions,
  children 
}) => {
  return (
    <header className="mb-8">
      <div className="border-b border-gray-200 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-4 sm:flex-nowrap">
          {/* Bagian Kiri: Judul dan Subjudul */}
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl sm:truncate">
              {title}
            </h1>
            <p className="mt-2 text-sm text-gray-500 max-w-2xl">
              {subtitle}
            </p>
          </div>

          {/* Bagian Kanan: Tombol Aksi (jika ada) */}
          {actions && (
            <div className="flex-shrink-0 ml-auto">
              <div className="flex items-center space-x-3">
                {actions}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Konten Tambahan (jika ada) */}
      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </header>
  );
};

export default DashboardPageHeader;