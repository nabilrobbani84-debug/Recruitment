// app/dashboard/jobs/page.tsx
"use client"; // Tandai ini sebagai Client Component

import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Definisikan interface Job dengan tipe data yang sesuai
interface Job {
  id: number;
  title: string;
  // Anda bisa menambahkan properti lain di sini sesuai data dari API
  // contoh: description: string;
  // location: string;
}

const JobList = () => {
  // State untuk menyimpan daftar pekerjaan
  const [jobs, setJobs] = useState<Job[]>([]);
  // State untuk melacak status loading
  const [loading, setLoading] = useState<boolean>(true);
  // State untuk menangani pesan error
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fungsi async untuk mengambil data pekerjaan
    const fetchJobs = async () => {
      try {
        // Ganti '/api/jobs' dengan URL API Anda yang sebenarnya
        const response = await axios.get('/api/jobs');
        setJobs(response.data);
      } catch (err) {
        // Tangani error jika gagal mengambil data
        setError('Terjadi kesalahan saat memuat data pekerjaan. Silakan coba lagi nanti.');
        console.error('Error fetching jobs:', err);
      } finally {
        // Hentikan status loading setelah selesai (baik berhasil maupun gagal)
        setLoading(false);
      }
    };

    // Panggil fungsi untuk mengambil data saat komponen pertama kali di-mount
    fetchJobs();
  }, []); // Array dependensi kosong memastikan useEffect hanya berjalan sekali

  // Tampilkan pesan loading saat data sedang diambil
  if (loading) {
    return <div>Memuat daftar pekerjaan...</div>;
  }

  // Tampilkan pesan error jika terjadi kegagalan
  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return (
    <div>
      <h2>Available Jobs</h2>
      {jobs.length > 0 ? (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              {/* Pastikan path URL-nya benar */}
              <a href={`/dashboard/jobs/${job.id}`}>{job.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Saat ini tidak ada pekerjaan yang tersedia.</p>
      )}
    </div>
  );
};

export default JobList;