import React from 'react'      

import { Container, Header, Wrapper } from './styles';

import Footer from '@/components/Footer';

interface IProps {
  image: string,
}

const Layout: React.FC<IProps> = ({ children, image }) => {

  return (
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
  )
}

export default Layout