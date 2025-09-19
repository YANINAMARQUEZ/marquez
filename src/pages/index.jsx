import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Marquezlab | Estudio Digital</title>
      </Head>
      <Header />
      <main className="px-6 py-12">
        <h1 className="text-3xl font-bold">Bienvenidos a Márquezlab-webpage</h1>
        <p className="mt-4 text-lg">Soluciones digitales, servicios de software personaluzado con excelencia visual y legal.</p>
      </main>
      <Footer />
    </>
  );
}
