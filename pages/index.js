import localFont from 'next/font/local';
import Head from 'next/head';
import Header from '@/components/header';
import Generator from '@/components/generator';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='Secure and customizable password generator.'
        />
        <title>Password Generator</title>
        <link rel='icon' type='image/png' href='/favicon.png' />
      </Head>
      <main
        className={`${geistSans.variable} ${geistMono.variable} text-md flex h-screen w-screen flex-col items-center justify-between gap-4 font-[family-name:var(--font-geist-sans)]`}
      >
        <Header />
        <Generator />
      </main>
    </>
  );
}
