'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import InputField from '@/component/common/InputField'; // 1. FIX: Use default import
import Button from '@/component/common/Button';       // 1. FIX: Use default import
// import { profileService } from '@/services/profileService'; // Assume this service exists

// Defines the validation schema for the profile form using Zod.
const profileSchema = z.object({
  name: z.string().min(3, 'Nama lengkap minimal 3 karakter'),
  headline: z.string().min(10, 'Headline minimal 10 karakter'),
  phoneNumber: z.string().min(10, 'Nomor telepon tidak valid'),
  location: z.string().min(3, 'Lokasi minimal 3 karakter'),
  bio: z.string().min(50, 'Ringkasan minimal 50 karakter').max(500, 'Ringkasan maksimal 500 karakter'),
});

// Infers the TypeScript type from the Zod schema.
type ProfileFormData = z.infer<typeof profileSchema>;

// Defines the props for the ProfileForm component.
interface ProfileFormProps {
  initialData: any; // Using 'any' for mock flexibility, but should match UserProfileData
  onUpdateSuccess: (data: ProfileFormData) => void;
  onCancel: () => void;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ initialData, onUpdateSuccess, onCancel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: initialData.name || '',
      headline: initialData.headline || '',
      phoneNumber: initialData.phoneNumber || '',
      location: initialData.location || '',
      bio: initialData.bio || '',
    },
  });

  // Handles form submission.
  const onSubmit = async (data: ProfileFormData) => {
    try {
      // await profileService.updateCandidateProfile(data); // Uncomment when API is ready
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      alert('Profil berhasil diperbarui!');
      onUpdateSuccess(data); // Pass updated data back to the parent
    } catch (error) {
      console.error(error);
      alert('Gagal memperbarui profil.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl p-8 shadow-sm space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="Nama Lengkap"
          id="name"
          {...register('name')}
          error={errors.name?.message}
        />
        <InputField
          label="Nomor Telepon"
          id="phoneNumber"
          {...register('phoneNumber')}
          error={errors.phoneNumber?.message}
        />
      </div>
      <InputField
        label="Headline Profesional"
        id="headline"
        placeholder="Contoh: Fresh Graduate Teknik Informatika"
        {...register('headline')}
        error={errors.headline?.message}
      />
      <InputField
        label="Lokasi Saat Ini"
        id="location"
        placeholder="Contoh: Jakarta, Indonesia"
        {...register('location')}
        error={errors.location?.message}
      />
      <div>
        <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Ringkasan Profil
        </label>
        <textarea
          id="bio"
          rows={5}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          {...register('bio')}
        />
        {errors.bio && <p className="mt-1 text-sm text-red-600">{errors.bio.message}</p>}
      </div>
      <div className="flex justify-end items-center gap-4 pt-4 border-t dark:border-gray-700">
        <Button type="button" variant="ghost" onClick={onCancel}>
          Batal
        </Button>
        <Button type="submit" isLoading={isSubmitting}>
          {isSubmitting ? 'Menyimpan...' : 'Simpan Perubahan'}
        </Button>
      </div>
    </form>
  );
};
