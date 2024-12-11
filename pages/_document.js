import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en' className='dark'>
      <Head />
      <body className='bg-zinc-950 text-zinc-300 antialiased'>
        <Main />
        <NextScript />
        <script src='https://dieggoyz.vercel.app/signature.js' defer></script>
      </body>
    </Html>
  );
}
