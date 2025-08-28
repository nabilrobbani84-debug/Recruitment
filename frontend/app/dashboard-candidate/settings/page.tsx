'use client';

import React, { useState } from 'react';
// Impor Button sebagai default import (tanpa {})
import Button from '@/component/common/Button'; 
// Impor InputField sebagai default import (tanpa {})
import InputField from '@/component/common/InputField'; 
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Skema Zod dan tipe data (tidak ada perubahan, sudah bagus)
const passwordSchema = z.object({
  oldPassword: z.string().min(1, 'Kata sandi lama wajib diisi'),
  newPassword: z.string().min(8, 'Kata sandi baru minimal 8 karakter'),
  confirmPassword: z.string().min(1, 'Konfirmasi wajib diisi'),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Kata sandi baru tidak cocok",
  path: ["confirmPassword"],
});

type PasswordFormData = z.infer<typeof passwordSchema>;

// Komponen Toggle Switch (tidak ada perubahan)
const NotificationToggle = ({ id, title, description, defaultChecked = false }: { id: string, title: string, description: string, defaultChecked?: boolean }) => (
    <div className="flex items-center justify-between py-4 border-b last:border-b-0">
        <div>
            <h3 className="font-medium text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
        <label htmlFor={id} className="cursor-pointer">
            <div className="relative">
                <input type="checkbox" id={id} className="sr-only peer" defaultChecked={defaultChecked}/>
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </div>
        </label>
    </div>
);


const SettingsPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset 
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
  });
  
  const onPasswordChange: SubmitHandler<PasswordFormData> = async (data) => {
    setIsSubmitting(true);
    console.log("Mengubah kata sandi...", data);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Kata sandi berhasil diubah!");
    setIsSubmitting(false);
    reset();
  };

  return (
    <div className="space-y-10 max-w-3xl mx-auto">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Pengaturan Akun</h1>
        <p className="mt-2 text-gray-600">Kelola informasi login dan preferensi notifikasi Anda.</p>
      </header>

      {/* Form Ubah Kata Sandi */}
      <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-4">Ubah Kata Sandi</h2>
        <form onSubmit={handleSubmit(onPasswordChange)} className="space-y-5">
          <InputField
            label="Kata Sandi Lama"
            type="password"
            {...register('oldPassword')}
            error={errors.oldPassword?.message}
          />
          <InputField
            label="Kata Sandi Baru"
            type="password"
            {...register('newPassword')}
            error={errors.newPassword?.message}
          />
          <InputField
            label="Konfirmasi Kata Sandi Baru"
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <div className="pt-4 flex justify-end">
            <Button type="submit" disabled={isSubmitting} isLoading={isSubmitting}>
              Simpan Perubahan
            </Button>
          </div>
        </form>
      </section>

      {/* Pengaturan Notifikasi */}
      <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 border-b pb-4">Notifikasi Email</h2>
        <div className="divide-y">
            <NotificationToggle 
                id="job-recs"
                title="Rekomendasi Pekerjaan Mingguan"
                description="Dapatkan email berisi pekerjaan yang cocok untuk Anda setiap Senin."
                defaultChecked
            />
            <NotificationToggle 
                id="app-updates"
                title="Update Status Lamaran"
                description="Dapatkan notifikasi email saat status lamaran Anda berubah."
                defaultChecked
            />
        </div>
      </section>
    </div>
  );
};

export default SettingsPage;