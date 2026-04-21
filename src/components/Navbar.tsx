import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full flex justify-between items-center px-6 md:px-10 py-6 z-20">
      <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight">
        إيستيت<span className="text-amber-500">3D</span>
      </Link>
      <ul className="hidden md:flex gap-8 text-neutral-300 font-medium">
        <li>
          <Link href="/" className="hover:text-amber-400 cursor-pointer transition-colors">العقارات</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-amber-400 cursor-pointer transition-colors">من نحن</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-amber-400 cursor-pointer transition-colors">اتصل بنا</Link>
        </li>
      </ul>
      <button className="border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-neutral-950 px-4 md:px-6 py-2 rounded-full font-semibold transition-all text-sm md:text-base">
        ابدأ الآن
      </button>
    </nav>
  );
}
