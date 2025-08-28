// app/dashboard/profile/page.tsx
"use client"; 

import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // 1. FIX: Removed unused axios import. Add it back when you connect to a real API.
import Image from 'next/image';
import SectionTitle from '@/component/common/SectionTitle';
import Button from '@/component/common/Button';
import { Edit } from 'lucide-react';

// Defines the data structure for a user's profile.
interface UserProfileData {
  id: string;
  name: string;
  email: string;
  location: string;
  bio: string;
  avatarUrl: string;
}

// A skeleton component to show while the profile data is loading.
const ProfileSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl p-8 shadow-sm animate-pulse">
    <div className="flex items-center space-x-6">
      <div className="rounded-full bg-gray-300 dark:bg-gray-600 h-24 w-24"></div>
      <div className="flex-1 space-y-4">
        <div className="h-7 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
      </div>
    </div>
    <div className="mt-8 pt-6 border-t dark:border-gray-700 space-y-4">
      <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
    </div>
  </div>
);

// The main component for the user profile page.
const UserProfilePage = () => {
  const [profile, setProfile] = useState<UserProfileData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // To connect to your real API, uncomment the axios import and replace this mock logic.
        // Example: const response = await axios.get('/api/v1/profile');
        // setProfile(response.data);

        // Simulating a network delay for demonstration purposes.
        await new Promise(resolve => setTimeout(resolve, 1500)); 
        const mockData: UserProfileData = {
          id: 'user-123',
          name: 'Nabil Robbani',
          email: 'nabil.robbaniganteng@example.com',
          location: 'Bekasi, Indonesia',
          bio: 'Full-stack developer dengan semangat untuk membangun aplikasi web yang modern dan bermanfaat. Berpengalaman dalam React, Next.js, dan Laravel.',
          avatarUrl: '/images/avatar-1.png', // Ensure this image exists in your /public/images folder.
        };
        setProfile(mockData);
      } catch (err) {
        console.error('Gagal mengambil data profil pengguna:', err);
        setError('Tidak dapat memuat profil. Silakan periksa koneksi Anda dan coba lagi.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, []); // The empty dependency array ensures this effect runs only once on mount.

  const renderContent = () => {
    if (isLoading) {
      return <ProfileSkeleton />;
    }

    if (error) {
      return <div className="text-red-500 bg-red-100 p-4 rounded-lg">{error}</div>;
    }

    if (profile) {
      return (
        <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-6">
            <Image
              src={profile.avatarUrl || 'https://placehold.co/96x96/E2E8F0/A0AEC0?text=Avatar'}
              alt={`${profile.name}'s avatar`}
              width={96}
              height={96}
              className="w-24 h-24 rounded-full object-cover ring-4 ring-offset-2 ring-blue-500 dark:ring-offset-gray-800 mb-4 sm:mb-0"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{profile.name}</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">{profile.email}</p>
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">{profile.location}</p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-auto">
                <Button variant="outline">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profil
                </Button>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Bio</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2 whitespace-pre-line">
                {profile.bio || 'Pengguna ini belum menambahkan bio.'}
            </p>
          </div>
        </div>
      );
    }

    return <p>Profil tidak ditemukan.</p>;
  };

  return (
    <div className="space-y-8">
      <SectionTitle
        title="Profil Saya"
        subtitle="Kelola informasi pribadi dan detail kontak Anda di sini."
        align="left"
      />
      {renderContent()}
    </div>
  );
};

export default UserProfilePage;
