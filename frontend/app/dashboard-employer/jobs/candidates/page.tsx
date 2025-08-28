'use client';

import React from 'react';
import SectionTitle from "@/component/common/SectionTitle"; // This import is now correct.
import { Search } from "lucide-react";
import Image from "next/image";
import Button from "@/component/common/Button";
import InputField from "@/component/common/InputField";

// Defines a clear data structure for a candidate.
interface Candidate {
  id: string;
  name: string;
  title: string;
  skills: string[];
  location: string;
  avatar: string;
}

// Placeholder data, now strictly typed with the Candidate interface.
const candidateDatabase: Candidate[] = [
  { id: 'cand-1', name: 'Budi Santoso', title: 'Frontend Developer', skills: ['React', 'Vue', 'TypeScript'], location: 'Jakarta', avatar: '/images/avatar-1.png' },
  { id: 'cand-2', name: 'Citra Lestari', title: 'UI/UX Designer', skills: ['Figma', 'Sketch', 'Prototyping'], location: 'Bandung', avatar: '/images/avatar-2.png' },
  { id: 'cand-3', name: 'Agus Wijaya', title: 'Backend Developer', skills: ['Go', 'PostgreSQL', 'Docker'], location: 'Surabaya', avatar: '/images/avatar-3.png' },
];

// A reusable card component to display a single candidate's information.
const CandidateResultCard = ({ candidate }: { candidate: Candidate }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col">
        <div className="p-5 flex-grow">
            <div className="flex items-center space-x-4">
                <Image 
                  src={candidate.avatar} 
                  alt={`Avatar of ${candidate.name}`} 
                  width={56} 
                  height={56} 
                  className="rounded-full ring-2 ring-offset-2 ring-blue-100" 
                />
                <div>
                    <h3 className="font-bold text-lg text-gray-800">{candidate.name}</h3>
                    <p className="text-gray-600 text-sm font-medium">{candidate.title}</p>
                    <p className="text-gray-500 text-xs mt-1">{candidate.location}</p>
                </div>
            </div>
            <div className="mt-4 pt-4 border-t">
                <h4 className="font-semibold text-sm mb-2 text-gray-500">Keahlian Utama:</h4>
                <div className="flex flex-wrap gap-2">
                    {candidate.skills.map((skill: string) => (
                        <span key={skill} className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
        <div className="mt-auto p-4 bg-gray-50 border-t flex justify-end">
             <Button variant="outline" size="sm">Lihat Profil Lengkap</Button>
        </div>
    </div>
)

// The main page component for searching candidates.
export default function SearchCandidatesPage() {
    // In a real application, you would use useState for filter values.
    // For example: const [keyword, setKeyword] = useState('');

    return (
        <div className="space-y-8">
            <SectionTitle
                align="center"
                title="Temukan Kandidat Terbaik"
                subtitle="Gunakan filter untuk mencari kandidat yang paling sesuai dengan kebutuhan perusahaan Anda."
            />

            {/* Search Filter Section */}
            <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                    <InputField 
                      label="Posisi atau Keahlian"
                      name="keyword"
                      placeholder="Contoh: React Developer" 
                      className="md:col-span-2"
                      // onChange={(e) => setKeyword(e.target.value)}
                    />
                    <InputField 
                      label="Lokasi"
                      name="location"
                      placeholder="Contoh: Jakarta"
                      // onChange={(e) => setLocation(e.target.value)}
                    />
                    <Button className="w-full h-10">
                        <Search size={18} className="mr-2"/> Cari Kandidat
                    </Button>
                </div>
            </div>

            {/* Search Results Section */}
            <div className="mt-10">
                 <h3 className="text-xl font-semibold text-gray-800 mb-4">Menampilkan {candidateDatabase.length} hasil yang relevan</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {candidateDatabase.map(candidate => (
                           <CandidateResultCard key={candidate.id} candidate={candidate} />
                      ))}
                 </div>
            </div>
        </div>
    );
}
