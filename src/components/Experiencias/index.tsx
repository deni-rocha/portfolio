import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="02 Anos" description="de experiência" />

      <section>
        <ExperienciaItem
          year="Agosto 2022"
          title="Dev Mobile"
          description="Responsável pela criação de uma aplicação para pesquisasa, nesse app tem uma página de login e outra de formulários feitas com React-native, fazendo conexão com o banco de dados utilizando WatermolonDB."
        />
        <ExperienciaItem
          year="Julho 2022"
          title="Dev Frond-end"
          description="Desenvolvi uma aplicação web com React.js e Typescript, que tem uma página para registrar e outra de listagem"
        />
        <ExperienciaItem
          year="Dezembro 2021"
          title="Dev Full Stack"
          description="Criei uma aplicação web usando React.js e Typescript para ranquear as músicas mais ouvidas no Brasil e no mundo. Essa aplicação tem conexão com uma API que eu desenvolvi utilizando Node.js e Express."
        />
        <ExperienciaItem
          year="Junho 2020"
          title="Dev Front-end"
          description="O meu primeiro projeto, um cliente pediu para eu desenvolver uma página web com o tema do Windows XP. Na ocasião, utilizei apenas HTML5, CSS3 e Javascript"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
