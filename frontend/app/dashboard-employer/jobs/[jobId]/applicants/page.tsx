import DashboardPageHeader from '@/component/common/DashboardPageHeader';
import Button from '@/component/common/Button';
import Image from 'next/image';
import { Download, CheckCircle, XCircle } from 'lucide-react';
import React from 'react';

// Tipe data untuk applicant (tidak ada perubahan)
type Applicant = {
  id: string;
  name: string;
  avatar: string;
  appliedDate: string;
  skills: string[];
  status: 'Direview' | 'Wawancara' | 'Ditolak' | 'Diterima';
};

// Data mock (tidak ada perubahan)
const mockJobTitle = "Senior Frontend Developer";
const mockApplicants: Applicant[] = [
  { id: 'cand-001', name: 'Budi Santoso', avatar: '/images/avatar-1.jpg', appliedDate: '10 Juni 2025', skills: ['React', 'TypeScript', 'Next.js'], status: 'Direview' },
  { id: 'cand-002', name: 'Citra Lestari', avatar: '/images/avatar-2.jpg', appliedDate: '11 Juni 2025', skills: ['Figma', 'UI Design', 'Prototyping'], status: 'Wawancara' },
  { id: 'cand-003', name: 'Agung Wijaya', avatar: '/images/avatar-3.jpg', appliedDate: '12 Juni 2025', skills: ['Node.js', 'PostgreSQL', 'AWS'], status: 'Ditolak' },
];

// Komponen StatusBadge (tidak ada perubahan)
const StatusBadge = ({ status }: { status: Applicant['status'] }) => {
  const statusStyles = {
    Direview: 'bg-blue-100 text-blue-800',
    Wawancara: 'bg-yellow-100 text-yellow-800',
    Ditolak: 'bg-red-100 text-red-800',
    Diterima: 'bg-green-100 text-green-800',
  };
  return (
    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${statusStyles[status]}`}>
      {status}
    </span>
  );
};

// Komponen ApplicantCard (tidak ada perubahan)
const ApplicantCard = ({ applicant }: { applicant: Applicant }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
    <div className="p-5">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <Image src={applicant.avatar} alt={applicant.name} width={64} height={64} className="rounded-full ring-2 ring-gray-200" />
          <div>
            <h3 className="text-lg font-bold text-gray-900">{applicant.name}</h3>
            <p className="text-sm text-gray-500">Melamar pada {applicant.appliedDate}</p>
          </div>
        </div>
        <StatusBadge status={applicant.status} />
      </div>

      <div className="mt-4 border-t border-gray-200 pt-4">
        <h4 className="text-sm font-medium text-gray-500 mb-2">Keahlian Utama</h4>
        <div className="flex flex-wrap gap-2">
          {applicant.skills.map(skill => (
            <span key={skill} className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
    
    <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
       <Button variant="outline" size="sm">
         <Download className="mr-2 h-4 w-4" /> Unduh CV
       </Button>
       <div className="flex space-x-2">
         <Button title="Terima Kandidat" size="icon" variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">
             <CheckCircle className="h-5 w-5" />
         </Button>
         <Button title="Tolak Kandidat" size="icon" variant="destructive" className="bg-red-100 text-red-700 hover:bg-red-200">
             <XCircle className="h-5 w-5" />
         </Button>
       </div>
    </div>
  </div>
);

// --- PERBAIKAN: Hapus props 'params' karena tidak digunakan ---
export default function ApplicantsPage() {
  return (
    <div className="space-y-8">
      <DashboardPageHeader
        title={`Pelamar untuk: ${mockJobTitle}`}
        subtitle={`Total ${mockApplicants.length} kandidat telah melamar untuk posisi ini.`}
      />
      
      {mockApplicants.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockApplicants.map(applicant => (
            <ApplicantCard key={applicant.id} applicant={applicant} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-medium text-gray-700">Belum Ada Pelamar</h3>
            <p className="text-gray-500 mt-2">Saat ini belum ada kandidat yang melamar untuk posisi ini.</p>
        </div>
      )}
    </div>
  );
}