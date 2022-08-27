import { projetos } from '../ValueProjetos';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

function Projetos() {
  return (
    <Container>
      <SectionTitle title="Projetos" />

      <section>
        {projetos.slice(0, 3).map(projeto => (
          <ProjetoItem
            key={projeto.slug}
            img={projeto.thumbnail}
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
            link={projeto.link}
          />
        ))}
      </section>
    </Container>
  );
}

export default Projetos;
