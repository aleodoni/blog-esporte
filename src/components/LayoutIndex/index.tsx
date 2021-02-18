import React from 'react';

import Footer from '@/components/Footer';
import { Container, Header, Wrapper } from './styles';

interface IProps {
  image: string;
}

const LayoutIndex: React.FC<IProps> = ({ children, image }) => (
  <>
    <Container>
      <Wrapper>
        <Header backgroundImage={image}>
          <h1>aleodoni Sports Blog</h1>
        </Header>
        <div className="main">{children}</div>
      </Wrapper>
    </Container>
    <Footer />
  </>
);

export default LayoutIndex;
