import styled from 'styled-components';

interface IHeaderProps {
  backgroundImage: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
  width: 100%;

  div.main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const Header = styled.div<IHeaderProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 200px;

  background: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  > h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    font-size: 100px;

    @media (max-width: 1024px) {
      font-size: 60px;
    }

    @media (max-width: 425px) {
      font-size: 30px;
    }

    opacity: 0.7;
    color: var(--color-white);
  }
`;
