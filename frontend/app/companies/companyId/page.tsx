// src/app/companies/[id]/page.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { type Metadata } from 'next';
import { getCompanyById, type ICompany } from '@/services/companyService';
import { Briefcase, MapPin, Globe, Building } from 'lucide-react';

import { Button } from '@/component/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/component/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/component/ui/Alert';

type CompanyProfilePageProps = {
  params: { id: string };
};

// --- 1. Dynamic Metadata with Error Handling ---
export async function generateMetadata({ params }: CompanyProfilePageProps): Promise<Metadata> {
  const companyId = parseInt(params.id, 10);

  if (isNaN(companyId)) {
    return {
      title: 'Invalid Company ID',
    };
  }

  try {
    const company = await getCompanyById(companyId);
    return {
      title: `${company.name} | Company Profile`,
      description: company.tagline || `Explore career opportunities at ${company.name}.`,
    };
  } catch (error) {
    return {
      title: 'Company Not Found',
    };
  }
}

// --- 2. Refactored Page Component with Robust Fetching ---
export default async function CompanyProfilePage({ params }: CompanyProfilePageProps) {
  // Validate the ID first
  const companyId = parseInt(params.id, 10);
  if (isNaN(companyId)) {
    notFound();
  }

  // Safely initialize the company variable
  let company: ICompany | null = null;
  
  // Use a try-catch block for fetching
  try {
    company = await getCompanyById(companyId);
  } catch (error) {
    console.error(`Failed to fetch company with ID ${companyId}:`, error);
    notFound(); // Trigger 404 on fetch error
  }
  
  // Add a guard clause for type safety and edge cases
  if (!company) {
    notFound();
  }
  
  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen">
      <div className="container mx-auto max-w-6xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Sidebar: Sticky Company Info Card */}
          <aside className="lg:col-span-1 lg:sticky top-24 space-y-6">
            <Card className="overflow-hidden shadow-md">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 h-28" />
                <div className="flex justify-center -mt-16">
                    <Image
                        src={company.logoUrl || '/logo.png'}
                        alt={`${company.name} logo`}
                        width={100}
                        height={100}
                        className="rounded-full border-4 border-white dark:border-gray-950 object-contain bg-white"
                    />
                </div>
                <CardHeader className="text-center pt-4">
                    <CardTitle className="text-2xl font-bold">{company.name}</CardTitle>
                    <p className="text-md text-gray-500 dark:text-gray-400 mt-1">{company.tagline || 'Tagline not available'}</p>
                </CardHeader>
                <CardContent className="text-sm text-gray-600 dark:text-gray-300 border-t pt-4">
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <MapPin className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0" />
                            <span>{company.location || 'Lokasi tidak tersedia'}</span>
                        </li>
                        {company.website && (
                            <li className="flex items-center">
                                <Globe className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0" />
                                <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
                                    Kunjungi Situs Web
                                </a>
                            </li>
                        )}
                        <li className="flex items-center">
                           <Briefcase className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0" />
                           <span className="font-semibold">{company.activeJobsCount || '0'}</span><span className='ml-1.5'>Lowongan Aktif</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>
          </aside>

          {/* Right Content: About & Job Listings */}
          <main className="lg:col-span-2 space-y-8">
            <Card className="shadow-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Tentang Perusahaan</CardTitle>
                </CardHeader>
                <CardContent>
                    <div 
                        className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
                        dangerouslySetInnerHTML={{ __html: company.description || 'Deskripsi tidak tersedia.' }}
                    />
                </CardContent>
            </Card>

            <Card className="shadow-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Lowongan Tersedia</CardTitle>
                </CardHeader>
                <CardContent>
                    {(company.jobs && company.jobs.length > 0) ? (
                        <div className="space-y-4">
                            {company.jobs.map((job) => (
                                <Link key={job.id} href={`/jobs/${job.id}`}>
                                    <div className="block p-4 border dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 cursor-pointer">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="font-bold text-lg text-gray-900 dark:text-white">{job.title}</p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{job.location} • {job.type}</p>
                                            </div>
                                            <Button variant="outline" size="sm">Lihat Detail</Button>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <Alert variant="default" className="border-dashed dark:border-gray-700">
                            <Building className="h-4 w-4" />
                            <AlertTitle>Belum Ada Lowongan</AlertTitle>
                            <AlertDescription>
                                Saat ini {company.name} tidak memiliki lowongan yang tersedia. Silakan periksa kembali nanti.
                            </AlertDescription>
                        </Alert>
                    )}
                </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
};