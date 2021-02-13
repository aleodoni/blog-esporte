import styled from 'styled-components';

interface IBackImgProps {
  src: string,
}

export const Container = styled.div`
  display: flex;
  
  @media(max-width: 2560px) {
    width: 762px;
  }

  @media(max-width: 1440px) {
    width: 682px;
  }

  @media(max-width: 1366px) {
    width: 645px;
  }

  @media(max-width: 1024px) {
    width: 980px;
  }

  @media(max-width: 768px) {
    width: 730px;
  }

  @media(max-width: 600px) {
    width: 570px;
  }

  @media(max-width: 425px) {
    width: 400px;
  }

  @media(max-width: 375px) {
    width: 350px;
  }

  height: 300px;
  border: 2px solid;
  border-color: var(--color-shadow); 
  border-radius: 5px;
  margin: 0 auto;
  background-color: var(--color-secondary);
  padding: 10px;
  margin: 15px;
  opacity: 0.7;
  transition: transform 0.2s, opacity 0.2s;

  > img {
    width: 30%;
    height: 100%;
    padding-right: 15px;
  }

  &:hover {
    transform: translateX(2px);
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const WrapNews = styled.div`
  display: flex;
  flex-direction: column;

  p { 
    width: 100%;
    color: var(--color-terciary);
    line-height: 32px;
  }

  h1 { 
    color: var(--color-terciary);
  }
`;

export const BackImg = styled.div<IBackImgProps>`
    display: flex;

    border-radius: 5px;
    min-width: 30%;
    width: 100%;
    height: 100%;
    margin-right: 15px;
    background: url(${(props) => props.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;