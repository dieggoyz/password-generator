import Link from 'next/link';

export default function Header() {
  return (
    <header className='w-full border-b border-white/10 py-4 text-center text-white'>
      <h1 className='text-lg font-semibold tracking-tight'>
        <Link href='/'>Password Generator</Link>
      </h1>
    </header>
  );
}
