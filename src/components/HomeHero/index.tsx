/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/My-Avatar-Escolar.png';
import { AiOutlineLink } from 'react-icons/ai';

function HomeHero() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  return (
    <Container data-aos="fade-up">
      <img src={picture} alt="Meu Avatar" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Que bom ver você aqui!</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Sobre mim</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Denilson Rocha</span>
            </div>
            <div>
              Desenvolvedor: <span className="blue">Front-end e Mobile</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Redes</span> {'\u007B'}
            <div className="objetivo">
              <span
                className="redes"
                onClick={() =>
                  handleRedirect(
                    'https://www.linkedin.com/in/denilson-rocha-aa0a39202/'
                  )
                }
              >
                <AiOutlineLink />: Linkedin
              </span>

              <span
                className="redes"
                onClick={() => handleRedirect('https://github.com/deni-rocha')}
              >
                <AiOutlineLink />: GitHub
              </span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
