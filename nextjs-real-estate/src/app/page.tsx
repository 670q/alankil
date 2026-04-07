"use client";

import dynamic from 'next/dynamic';
import { Suspense, useState } from 'react';

// Dynamically import Canvas component since Three.js relies on browser APIs (can't be SSR'd)
const Canvas = dynamic(() => import('@react-three/fiber').then((mod) => mod.Canvas), { ssr: false });
const ModelViewer = dynamic(() => import('@/components/ModelViewer'), { ssr: false });

export default function Home() {
  const [viewMode, setViewMode] = useState<'exterior' | 'interior'>('exterior');

  return (
    <main className="min-h-screen bg-neutral-950 text-white font-sans overflow-x-hidden" dir="rtl">
      {/* Navigation */}
      <nav className="absolute top-0 w-full flex justify-between items-center px-6 md:px-10 py-6 z-20">
        <div className="text-xl md:text-2xl font-bold tracking-tight">
          إيستيت<span className="text-amber-500">3D</span>
        </div>
        <ul className="hidden md:flex gap-8 text-neutral-300 font-medium">
          <li className="hover:text-amber-400 cursor-pointer transition-colors">العقارات</li>
          <li className="hover:text-amber-400 cursor-pointer transition-colors">من نحن</li>
          <li className="hover:text-amber-400 cursor-pointer transition-colors">اتصل بنا</li>
        </ul>
        <button className="border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-neutral-950 px-4 md:px-6 py-2 rounded-full font-semibold transition-all text-sm md:text-base">
          ابدأ الآن
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col-reverse md:flex-row items-center px-6 md:px-20 pt-0 md:pt-10">

        {/* Text Content (Right on Desktop, Bottom on Mobile) */}
        <div className="w-full md:w-1/2 z-10 space-y-6 md:space-y-8 animate-fade-in-up mt-10 md:mt-0 text-right pb-20 md:pb-0">
          <div className="inline-block px-4 py-1 rounded-full border border-amber-900/30 bg-amber-900/10 text-amber-500 text-sm font-medium mb-2">
            الرياض، حي النخيل
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
            فيلا النخيل <br /> العصرية
          </h1>
          <p className="text-base md:text-xl text-neutral-400 max-w-lg font-light leading-relaxed">
            استكشف فيلا أحلامك في قلب الرياض. تصميم عصري فاخر يجمع بين الفخامة والراحة مع إمكانية التجول الافتراضي بالداخل.
          </p>

          <div className="flex flex-wrap gap-4 justify-start">
            <button 
              onClick={() => setViewMode(viewMode === 'exterior' ? 'interior' : 'exterior')}
              className="bg-amber-500 text-neutral-950 px-6 md:px-10 py-3 md:py-4 rounded-full font-bold shadow-lg shadow-amber-500/20 hover:-translate-y-1 transition-all flex items-center gap-2">
              {viewMode === 'exterior' ? 'دخول البيت (3D)' : 'الخروج للمنظور الخارجي'}
            </button>
            <button className="border border-neutral-600 px-6 md:px-10 py-3 md:py-4 rounded-full font-bold hover:border-white hover:bg-white/5 transition-all">
              احجز معاينة
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pt-8 border-t border-neutral-800 justify-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">السعر</p>
              <p className="text-2xl md:text-3xl font-semibold text-amber-500">3.5M ريال</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">الأدوار</p>
              <p className="text-2xl md:text-3xl font-semibold text-white">3</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">غرف النوم</p>
              <p className="text-2xl md:text-3xl font-semibold text-white">5</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">المساحة</p>
              <p className="text-2xl md:text-3xl font-semibold text-white">450 م²</p>
            </div>
          </div>
        </div>

        {/* 3D View (Top on Mobile) */}
        <div className="relative md:absolute inset-0 md:inset-auto md:left-0 md:w-3/5 w-full h-[400px] md:h-full z-0 opacity-80 md:opacity-100 flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-amber-500/5 blur-[120px] rounded-full"></div>

          <div className="w-full h-full cursor-grab active:cursor-grabbing relative overflow-visible">
            <Suspense fallback={<div className="text-center w-full h-full flex items-center justify-center text-amber-500 font-mono animate-pulse">جاري تحميل الأصول...</div>}>
              <Canvas shadows camera={{ position: [5, 2, 5], fov: 45 }}>
                <ModelViewer modelPath="/3_12_2026.glb" viewMode={viewMode} />
              </Canvas>
            </Suspense>
          </div>
        </div>

      </section>
    </main>
  );
}
