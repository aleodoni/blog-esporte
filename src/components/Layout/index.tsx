import React from 'react';
import Link from 'next/link'

import { Container, Header, Wrapper } from './styles';

interface IProps {
  image: string,
}

const Layout: React.FC<IProps> = ({ children, image }) => {

  return (
    <Container>
      <Wrapper>
        <Header backgroundImage={image}>
          <h1>aleodoni Sports Blog</h1>
        </Header>
        <div className="main">{children}</div>
      </Wrapper>
    </Container>
  )
}

export default Layout;