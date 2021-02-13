import React from 'react';

import { Container, WrapNews, BackImg } from './styles';

interface IProps {
  img: string;
}

const Box: React.FC<IProps> = ({ children, img }) => {
  return (
    <Container>
      <BackImg src={img} />
      <WrapNews>
        {children}  
      </WrapNews>
    </Container>
  )
}

export default Box;