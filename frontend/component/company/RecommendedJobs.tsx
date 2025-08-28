"use client";

import { useState, useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import { getRecommendedJobs, type IJob } from '@/services/jobService';
import SectionTitle from '@/component/common/SectionTitle'; // PERBAIKAN: Impor sebagai default
import JobCard from '@/component/job/JobCard'; // PERBAIKAN: Impor sebagai default
import { Loader2 } from 'lucide-react';

export function RecommendedJobs() {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const [recommendedJobs, setRecommendedJobs] = useState<IJob[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchRecommendations = async () => {
        setIsLoading(true);
        try {
          const response = await getRecommendedJobs();
          setRecommendedJobs(response.data);
        } catch (error) {
          console.error("Failed to fetch recommendations:", error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchRecommendations();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return null;
  }
  
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
