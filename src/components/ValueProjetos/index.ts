import dealta from '../../assets/dealta.png';
import dogbreed from '../../assets/dogbreed1.png';
import pokebook from '../../assets/pookebook.png';
interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

const projetos: IProjeto[] = [
  {
    slug: '1',
    title: 'De alta',
    type: 'website',
    description: 'veja as músicas mais ouvidas no mundo e no brasil',
    link: 'https://dealta.vercel.app',
    thumbnail: dealta
  },
  {
    slug: '2',
    title: 'Doog Breed',
    type: 'website',
    description: 'projeto com página de registrar e listagem',
    link: 'https://dogbreed-rose.vercel.app/',
    thumbnail: dogbreed
  },
  {
    slug: '3',
    title: 'Pokebook',
    type: 'website',
    description: 'projeto para listar os pokemons',
    link: 'https://pokebook-liart.vercel.app/',
    thumbnail: pokebook
  }
];

export { projetos };
