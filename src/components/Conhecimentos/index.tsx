import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoDocker, IoLogoJavascript, IoLogoNodejs } from 'react-icons/io5';
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';
import { SiTypescript, SiNextDotJs, SiMongodb } from 'react-icons/si';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt />} />
        <ConhecimentoItem title="Javascript" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
        <ConhecimentoItem title="Typescript" icon={<SiTypescript />} />
        <ConhecimentoItem title="Next" icon={<SiNextDotJs />} />
        <ConhecimentoItem title="Node" icon={<IoLogoNodejs />} />
        <ConhecimentoItem title="Mongo" icon={<SiMongodb />} />
        <ConhecimentoItem title="Docker" icon={<IoLogoDocker />} />
      </section>
    </Container>
  );
}

export default Conhecimentos;
