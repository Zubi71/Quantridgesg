'use client';
import Link from 'next/link';
import Image from 'next/image';

const Logo = ({ light = false }: { light?: boolean }) => (
  <Link href="/" className="flex items-center min-w-0 hover:opacity-90 transition-opacity">
    <Image
      src="/logo.png"
      alt="QuantRidge Capital"
      width={180}
      height={56}
      className={`h-20 sm:h-24 w-auto object-contain ${light ? 'brightness-0 invert' : ''}`}
      priority
    />
  </Link>
);

export default Logo;
