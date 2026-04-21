import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'تواصل معنا - إيستيت 3D',
  description: 'تواصل مع فريق إيستيت 3D للاستفسار عن العقارات.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white font-sans overflow-x-hidden relative" dir="rtl">
      {/* Background glow */}
      <div className="absolute top-1/4 left-0 w-full md:w-1/2 h-[600px] bg-amber-500/5 blur-[150px] -z-10 rounded-full pointer-events-none"></div>

      <Navbar />

      <section className="pt-32 pb-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-1 rounded-full border border-amber-900/30 bg-amber-900/10 text-amber-500 text-sm font-medium mb-4">
            تواصل معنا
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400 mb-6">
            نحن هنا لمساعدتك
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            هل لديك استفسار حول عقار معين أو ترغب في تحديد موعد لمعاينة واقعية؟ فريقنا مستعد لخدمتك على مدار الساعة.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-8">معلومات التواصل</h2>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-500 text-xl shrink-0">
                📍
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">المكتب الرئيسي</h3>
                <p className="text-neutral-400">طريق الملك فهد، حي النخيل،<br/>الرياض، المملكة العربية السعودية</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-500 text-xl shrink-0">
                📞
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">الهاتف المباشر</h3>
                <p className="text-neutral-400" dir="ltr">+966 50 123 4567</p>
                <p className="text-neutral-400" dir="ltr">+966 11 987 6543</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-500 text-xl shrink-0">
                ✉️
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">البريد الإلكتروني</h3>
                <p className="text-neutral-400">hello@estate3d.sa</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-neutral-400">الاسم الكريم</label>
                  <input type="text" className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="أحمد محمد" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-neutral-400">رقم الجوال</label>
                  <input type="tel" className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="05X XXX XXXX" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-neutral-400">البريد الإلكتروني</label>
                <input type="email" className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="example@email.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-neutral-400">الرسالة</label>
                <textarea rows={4} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none" placeholder="اكتب استفسارك هنا..."></textarea>
              </div>

              <button className="w-full bg-amber-500 text-neutral-950 font-bold text-lg py-4 rounded-xl mt-4 hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20">
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
