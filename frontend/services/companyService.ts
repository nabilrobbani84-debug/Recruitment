// src/services/companyService.ts

import apiClient from '@/lib/apiClient';
// ✅ FIX: Import only the 'Company' type, which is correctly defined and exported.
import { type Company } from '@/lib/types';

// --- ✅ FIX: Define Missing Interfaces Locally ---
// These types were causing import errors. Defining them here makes the service
// self-sufficient and guarantees the correct data structures are used.

/**
 * Defines the parameters that can be used to filter the company list.
 */
export interface GetCompaniesParams {
  page?: number;
  limit?: number;
  search?: string;
  location?: string;
  industry?: string;
}

/**
 * Defines the complete structure of the paginated API response for getCompanies.
 */
export interface ICompanyApiResponse {
  companies: Company[];
  totalCompanies: number;
  totalPages: number;
  currentPage: number;
}

/**
 * Fetches a single company by its ID from the API.
 * This is intended for use on company detail pages.
 * @param id - The numeric ID of the company to fetch.
 * @returns A Promise that resolves to the full company data structure.
 */
export const getCompanyById = async (id: number): Promise<Company> => {
  try {
    // The API response nests the actual data within a 'data' property.
    const response = await apiClient.get<{ data: Company }>(`/companies/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching company with ID ${id}:`, error);
    // Re-throw the error to be handled by the calling component,
    // which can then trigger a 404 page.
    throw error;
  }
};

/**
 * Fetches a list of companies with support for filtering and pagination.
 * This is a mocked implementation for demonstration and development.
 * @param params - An object containing filters like page, search query, etc.
 * @returns A Promise that resolves to a paginated list of companies.
 */
export const getCompanies = async (params: GetCompaniesParams = {}): Promise<ICompanyApiResponse> => {
  console.log("Fetching companies with params:", params);
  
  // Simulate a network delay to mimic a real-world API call.
  await new Promise(resolve => setTimeout(resolve, 500));

  const page = params.page || 1;
  const limit = params.limit || 12;

  // Mock data now correctly uses the unified 'Company' type.
  const allMockCompanies: Company[] = Array.from({ length: 35 }, (_, i) => ({
      id: i + 1,
      name: `Perusahaan Fiktif #${i + 1}`,
      logoUrl: `https://placehold.co/100x100/e0e7ff/4338ca?text=P${i + 1}`,
      industry: ['Teknologi', 'Keuangan', 'Kesehatan', 'Pendidikan', 'Retail'][i % 5],
      location: ['Jakarta', 'Bandung', 'Surabaya', 'Remote'][i % 4],
      activeJobsCount: 3 + (i % 10),
      tagline: 'Membangun masa depan digital yang lebih cerah.',
      description: `Ini adalah deskripsi lengkap untuk Perusahaan Fiktif #${i + 1}. Kami berfokus pada inovasi di bidang ${['Teknologi', 'Keuangan', 'Kesehatan', 'Pendidikan', 'Retail'][i % 5]}.`,
      website: 'https://example.com',
  }));
  
  // The filtering logic remains the same.
  const filtered = allMockCompanies.filter(c => 
      (params.search ? c.name.toLowerCase().includes(params.search.toLowerCase()) : true) &&
      (params.location ? c.location === params.location : true)
  );

  // Return the data in the shape defined by the ICompanyApiResponse interface.
  return {
    companies: filtered.slice((page - 1) * limit, page * limit),
    totalCompanies: filtered.length,
    totalPages: Math.ceil(filtered.length / limit),
    currentPage: page,
  };
};
