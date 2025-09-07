// app/dashboard/messages/page.tsx
"use client";

import Link from 'next/link';
import { useAuthStore } from "@/store/authStore";
import { ChatLayout } from "@/component/chat/ChatLayout";
import { DashboardPageHeader } from "@/component/common/DashboardPageHeader";
import { Skeleton } from "@/component/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/component/ui/Alert";
import { Button } from "@/component/ui/Button"; // Menggunakan Button yang sudah ada
import { MessageSquare, LogIn } from "lucide-react";

/**
 * MessagesPage
 * Halaman ini berfungsi sebagai entry point untuk fitur chat.
 * Fitur utama:
 * 1. Terintegrasi dengan state management (Zustand) untuk data pengguna dinamis.
 * 2. Menampilkan UI Skeleton yang menarik saat inisialisasi untuk UX yang lebih baik.
 * 3. Menyediakan halaman "guard" atau "fallback" yang informatif jika pengguna belum login.
 * 4. Merender layout chat utama ketika pengguna sudah terautentikasi.
 */
export default function MessagesPage() {
  // Mengambil data dan status autentikasi secara dinamis dari store
  const { user, isAuthenticated, isInitialized } = useAuthStore();

  // --- 1. Kondisi Loading / Inisialisasi ---
  // Ditampilkan sebelum store selesai memuat data dari local storage.
  // Ini penting untuk mencegah "kedipan UI" (UI flickering).
  if (!isInitialized) {
    return (
      <div className="space-y-6 p-4 md:p-8">
        {/* Skeleton untuk header halaman */}
        <Skeleton className="h-12 w-1/3 rounded-lg" />
        <Skeleton className="h-8 w-2/3 rounded-lg" />
        
        {/* Skeleton untuk layout chat */}
        <div className="flex h-[calc(100vh-16rem)] w-full gap-6">
          <Skeleton className="hidden h-full w-1/3 rounded-xl md:block" />
          <Skeleton className="h-full w-full rounded-xl md:w-2/3" />
        </div>
      </div>
    );
  }

  // --- 2. Kondisi Pengguna Belum Login ---
  // Tampilan modern dan informatif jika pengguna tidak memiliki akses.
  if (!isAuthenticated || !user) {
    return (
      <div className="container mx-auto flex h-full min-h-[calc(100vh-10rem)] items-center justify-center p-4">
        <div className="flex w-full max-w-lg flex-col items-center gap-4 rounded-xl border bg-card p-8 text-center text-card-foreground shadow-lg transition-all hover:shadow-2xl">
           <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-primary/10 bg-primary/5">
              <MessageSquare className="h-8 w-8 text-primary" />
           </div>
           <div className="space-y-2">
             <h2 className="text-2xl font-bold tracking-tight">Akses Kotak Masuk Anda</h2>
             <p className="text-muted-foreground">
                Untuk melihat percakapan dan berinteraksi dengan kandidat atau perusahaan, silakan masuk ke akun Anda terlebih dahulu.
             </p>
           </div>
           <Link href="/auth/login" passHref className="w-full">
             <Button className="mt-4 w-full" size="lg">
               <LogIn className="mr-2 h-4 w-4" />
               Lanjutkan ke Halaman Login
             </Button>
           </Link>
        </div>
      </div>
    );
  }

  // --- 3. Kondisi Sukses (Pengguna Sudah Login) ---
  // Merender halaman chat yang sesungguhnya.
  return (
    <main className="flex h-full flex-col p-4 md:p-8">
      <DashboardPageHeader
        title="Kotak Masuk"
        description="Kelola semua percakapan Anda dengan kandidat dan perusahaan di sini."
      />
      <div className="mt-6 flex-grow">
        <ChatLayout currentUser={user} />
      </div>
    </main>
  );
}