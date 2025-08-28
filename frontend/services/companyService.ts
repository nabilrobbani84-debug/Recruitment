// src/services/companyService.ts

// --- 1. Definisi Tipe yang Jelas & Detail ---

// Tipe untuk mendefinisikan struktur data sebuah perusahaan
// Ini akan menjadi satu-satunya sumber kebenaran (single source of truth) untuk data perusahaan.

import apiClient from '@/lib/apiClient';
import { type ICompany, type IJob } from '@/lib/types';
export interface ICompany {
  id: number;
  name: string;
  logoUrl: string;
  industry: string;
  location: string;
  totalJobs: number;
  tagline: string;
  isHiring: boolean;
}

// Tipe untuk parameter filter yang bisa dikirim ke API
export interface GetCompaniesParams {
  page?: number;
  limit?: number;
  search?: string; // Untuk pencarian berdasarkan nama
  location?: string;
  industry?: string;
}

// Tipe untuk metadata pagination yang dikembalikan oleh API
export interface IPaginationMeta {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  perPage: number;
}

// Tipe untuk keseluruhan struktur respons dari API getCompanies
export interface ICompanyApiResponse {
  companies: ICompany[];
  totalCompanies: number;
  totalPages: number;
  currentPage: number;
}

export const getCompanyById = async (id: number): Promise<ICompany> => {
  try {
    const response = await apiClient.get<{ data: ICompany }>(`/companies/${id}`);
    // The API wraps the company data in a 'data' object
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching company with ID ${id}:`, error);
    // Re-throw the error to be handled by the calling component (e.g., to show a 404 page)
    throw error;
  }
};
// --- 2. Implementasi Fungsi Service ---

/**
 * Fungsi untuk mengambil data perusahaan dari API dengan filter dan pagination.
 * Diekspor sebagai 'named export' agar bisa diimpor secara spesifik.
 * @param params - Objek yang berisi filter seperti halaman, pencarian, dll.
 * @returns Promise yang berisi data perusahaan dan metadata pagination.
 */
export const getCompanies = async (params: GetCompaniesParams = {}): Promise<ICompanyApiResponse> => {
  console.log("Fetching companies with params:", params);
  // This function currently uses mock data. In a real app, it would
  // use `apiClient` like `getCompanyById`.
  const page = params.page || 1;
  const limit = params.limit || 12;
  const allMockCompanies: ICompany[] = Array.from({ length: 35 }, (_, i) => ({
      id: i + 1,
      name: `Perusahaan Fiktif #${i + 1}`,
      logoUrl: `https://placehold.co/100x100/e0e7ff/4338ca?text=P${i + 1}`,
      industry: ['Teknologi', 'Keuangan', 'Kesehatan', 'Pendidikan', 'Retail'][i % 5],
      location: ['Jakarta', 'Bandung', 'Surabaya', 'Remote'][i % 4],
      activeJobsCount: 3 + (i % 10),
      tagline: 'Membangun masa depan digital.',
      description: 'Deskripsi lengkap tentang perusahaan fiktif ini.',
      website: 'https://example.com',
  }));
  
  const filtered = allMockCompanies.filter(c => 
      (params.search ? c.name.toLowerCase().includes(params.search.toLowerCase()) : true) &&
      (params.location ? c.location === params.location : true)
  );

  await new Promise(resolve => setTimeout(resolve, 500)); 

  return {
    companies: filtered.slice((page - 1) * limit, page * limit),
    totalCompanies: filtered.length,
    totalPages: Math.ceil(filtered.length / limit),
    currentPage: page,
  };
};