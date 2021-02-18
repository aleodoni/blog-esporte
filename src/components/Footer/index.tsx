import React from 'react';

import { Container, FooterContainer, Wrapper } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <FooterContainer>
          <ul>
            <li>
              Desenvolvido por:&nbsp;
              <a href="https://alexandre.odoni.nom.br">
                <b>aleodoni</b>
              </a>
              &nbsp;© 2021
            </li>
          </ul>
        </FooterContainer>
      </Wrapper>
    </Container>
  );
};

export default Footer;
