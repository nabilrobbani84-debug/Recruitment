// src/app/companies/[id]/page.tsx

// This directive is required because we use hooks like useState and useEffect.
'use client'; 

import React, { useEffect, useState } from "react";

// --- 1. Definisikan tipe data (Interface) ---
// Ini adalah praktik yang baik untuk memastikan type-safety di seluruh komponen.
interface Company {
  id: number;
  name: string;
  description: string;
  location: string;
  jobs: string[];
}

// Data tiruan (mock data). Di aplikasi nyata, ini akan berasal dari panggilan API.
const companyData: Company[] = [
  { id: 1, name: "ABC Corp", description: "Perusahaan teknologi terkemuka di Indonesia.", location: "Jakarta", jobs: ["Software Engineer", "UI/UX Designer"] },
  { id: 2, name: "XYZ Ltd", description: "Penyedia solusi keuangan global.", location: "Surabaya", jobs: ["Financial Analyst", "Project Manager"] },
  { id: 3, name: "Telecom Innovations", description: "Solusi telekomunikasi dan teknologi.", location: "Bandung", jobs: ["Network Engineer", "Data Scientist"] },
];

// --- 2. Adaptasi Komponen untuk App Router ---
// Komponen halaman menerima 'params' sebagai prop, yang berisi segmen URL dinamis.
export default function CompanyProfilePage({ params }: { params: { id: string } }) {
  const { id: companyId } = params; // Ambil 'id' dari prop params

  // --- 3. Gunakan State dengan Tipe yang Benar ---
  // Kita beritahu useState bahwa state 'company' bisa berupa objek 'Company' atau 'null'.
  const [company, setCompany] = useState<Company | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Tambahkan state loading

  useEffect(() => {
    if (companyId) {
      const idAsNumber = parseInt(companyId, 10);
      
      // Validasi apakah hasil parse adalah angka yang valid
      if (isNaN(idAsNumber)) {
        setError("ID Perusahaan tidak valid.");
        setCompany(null);
        setIsLoading(false);
        return;
      }

      const selectedCompany = companyData.find((comp) => comp.id === idAsNumber);

      if (selectedCompany) {
        setCompany(selectedCompany);
        setError(null);
      } else {
        // Menangani kasus di mana perusahaan tidak ditemukan
        setError(`Perusahaan dengan ID "${companyId}" tidak ditemukan.`);
        setCompany(null);
      }
      setIsLoading(false);
    }
  }, [companyId]); // useEffect akan berjalan setiap kali companyId berubah

  // --- 4. Render Kondisional Berdasarkan State ---
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500 text-xl animate-pulse">Memuat data perusahaan...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-red-500 text-xl font-semibold">{error}</p>
      </div>
    );
  }

  if (!company) {
    // Kondisi ini seharusnya tidak terjadi jika error sudah ditangani,
    // tapi ini adalah fallback yang baik.
    return null;
  }

  // Jika sampai di sini, TypeScript tahu bahwa 'company' adalah objek Company yang valid.
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{company.name}</h1>
        
        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-2xl font-bold text-gray-800">Tentang Kami</h2>
          <p className="mt-3 text-lg text-gray-600 leading-relaxed">{company.description}</p>
          <p className="mt-4 text-md text-gray-500">
            <strong>📍 Lokasi:</strong> {company.location}
          </p>
          
          <h3 className="mt-8 text-2xl font-bold text-gray-800">Lowongan Saat Ini</h3>
          {company.jobs.length > 0 ? (
            <ul className="mt-4 space-y-3">
              {company.jobs.map((job: string, index: number) => (
                <li 
                  key={index} 
                  className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer transition-colors duration-200 text-lg"
                >
                  {job}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-gray-500">Saat ini tidak ada lowongan yang tersedia.</p>
          )}
        </div>
      </div>
    </div>
  );
};
