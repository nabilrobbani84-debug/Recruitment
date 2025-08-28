"use client";

import { useState, useEffect } from 'react';
import { useAuthStore, type AuthState } from '@/store/authStore'; // Impor tipe AuthState
import { getRecommendedJobs, type IJob } from '@/services/jobService';
import SectionTitle from '@/component/common/SectionTitle';
// --- FIX 1: Mengubah impor dari default menjadi named import ---
// Pesan error menunjukkan bahwa 'JobCard' bukanlah default export.
import { JobCard } from '@/component/job/JobCard'; 
import { Loader2 } from 'lucide-react';

// Komponen ini sekarang diekspor sebagai named export agar konsisten
export const RecommendedJobs = () => {
  // --- FIX 2: Memberikan tipe eksplisit pada selector Zustand ---
  // Ini memberitahu TypeScript tentang struktur state dan mengatasi error.
  const isAuthenticated = useAuthStore((state: AuthState) => state.isAuthenticated);
  const [recommendedJobs, setRecommendedJobs] = useState<IJob[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Hanya fetch data jika pengguna sudah terautentikasi
    if (isAuthenticated) {
      const fetchRecommendations = async () => {
        setIsLoading(true);
        try {
          const response = await getRecommendedJobs();
          setRecommendedJobs(response.data);
        } catch (error) {
          console.error("Failed to fetch recommendations:", error);
          // Secara opsional, Anda bisa menampilkan pesan error di UI di sini
        } finally {
          setIsLoading(false);
        }
      };
      fetchRecommendations();
    }
  }, [isAuthenticated]);

  // Jika pengguna belum login, komponen tidak akan merender apa pun.
  if (!isAuthenticated) {
    return null;
  }
  
  // Menampilkan indikator loading saat data sedang diambil.
  if (isLoading) {
    return (
        <section className="mt-20">
            <SectionTitle
                title="Pekerjaan yang Direkomendasikan untuk Anda"
                subtitle="Berdasarkan profil dan aktivitas Anda, kami sedang mencari peluang terbaik."
            />
            <div className="flex justify-center items-center h-40">
                <Loader2 className="animate-spin text-blue-600" size={32} />
            </div>
        </section>
    );
  }

  // Jika tidak ada pekerjaan yang direkomendasikan setelah fetch selesai,
  // komponen juga tidak akan merender apa pun agar tidak ada section kosong.
  if (recommendedJobs.length === 0) {
      return null;
  }

  return (
    <section className="mt-20">
      <SectionTitle
        title="Pekerjaan yang Direkomendasikan untuk Anda"
        subtitle="Berdasarkan profil dan aktivitas Anda, kami menemukan peluang ini."
      />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendedJobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}
