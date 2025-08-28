"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import InputField from '@/component/common/InputField'; // PERBAIKAN: Impor sebagai default
import Button from '@/component/common/Button';       // PERBAIKAN: Impor sebagai default
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder: string;
  basePath: string; // e.g., '/companies', '/blog'
}

export function SearchBar({ placeholder, basePath }: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');

  // Sinkronkan state lokal dengan URL search params saat komponen dimuat
  useEffect(() => {
    setQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const currentParams = new URLSearchParams(searchParams.toString());

    if (query) {
      currentParams.set('q', query);
    } else {
      currentParams.delete('q'); // Hapus parameter 'q' jika query kosong
    }
    
    // Gunakan router.push untuk navigasi dan memicu re-render
    router.push(`${basePath}?${currentParams.toString()}`);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm mb-8">
      <form onSubmit={handleSearch} className="flex items-end gap-3">
        {/* PERBAIKAN: Menggunakan komponen InputField kustom untuk konsistensi */}
        <InputField
          label="Cari"
          id="search-query"
          name="q"
          Icon={Search}
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          containerClassName="w-full"
          className="h-12"
          hideLabel // Sembunyikan label secara visual tapi tetap ada untuk aksesibilitas
        />
        <Button type="submit" className="h-12 flex-shrink-0">
          Cari
        </Button>
      </form>
    </div>
  );
}
