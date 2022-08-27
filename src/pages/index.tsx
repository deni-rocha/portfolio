import { useEffect } from 'react';
import Aos from 'aos';
import Head from 'next/head';
import { HomeContainer } from '../styles/HomeStyles';
import favicon from '../assets/My-Avatar-Escolar.png';

import HomeHero from '../components/HomeHero';
import Experiencias from '../components/Experiencias';
import Conhecimentos from '../components/Conhecimentos';
import Footer from '../components/Footer';
import 'aos/dist/aos.css';
import Projetos from '../components/Projetos';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Denilson portfólio</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <link rel="icon" href={favicon} />
      </Head>

      <main className="container">
        <HomeHero />
        <Projetos />
        <Conhecimentos />
        <Experiencias />
      </main>

      <Footer />
    </HomeContainer>
  );
}
