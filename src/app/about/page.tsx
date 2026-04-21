import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'من نحن - إيستيت 3D',
  description: 'تعرف أكثر على إيستيت 3D ورؤيتنا في مستقبل العقارات.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white font-sans overflow-x-hidden relative" dir="rtl">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-[500px] bg-amber-500/10 blur-[150px] -z-10 rounded-full pointer-events-none"></div>

      <Navbar />

      <section className="pt-32 pb-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-1 rounded-full border border-amber-900/30 bg-amber-900/10 text-amber-500 text-sm font-medium mb-4">
            قصتنا
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400 mb-6">
            نعيد صياغة تجربة <br /> استكشاف العقارات
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
            في إيستيت 3D، نؤمن بأن البحث عن منزل الأحلام يجب أن يكون تجربة غامرة وممتعة. 
            نحن ندمج التكنولوجيا ثلاثية الأبعاد مع الفخامة العقارية لنوفر لعملائنا القدرة على 
            التجول في العقارات وكأنهم بداخلها، من أي مكان في العالم.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: "الابتكار",
              desc: "نستخدم أحدث تقنيات الـ 3D والواقع الافتراضي لتوفير جولات عقارية واقعية ومبهرة.",
              icon: "✨"
            },
            {
              title: "الشفافية",
              desc: "نوفر لعملائنا رؤية دقيقة وواضحة للعقار بكل تفاصيله الداخلية والخارجية قبل اتخاذ القرار.",
              icon: "🔍"
            },
            {
              title: "الفخامة",
              desc: "ننتقي أفضل العقارات الفاخرة في المملكة لنعرضها بطريقة تليق بقيمتها وبذائقة عملائنا.",
              icon: "💎"
            }
          ].map((item, index) => (
            <div key={index} className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 hover:border-amber-500/50 transition-colors group">
              <div className="text-4xl mb-6 bg-neutral-800 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-neutral-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
