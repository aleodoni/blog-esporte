import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export const FooterContainer = styled.div`
  display: flex;
  

  width: 100%;
  height: 80px;
  background-color: var(--color-secondary);
  opacity: 0.8;

  > ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px;

    list-style-type: none;
    width: 100%;

    li {
      line-height: 40px;
      color: var(--color-white);
      font-size: 18px;

      a {
        color: var(--color-white);
      }
    }
  }
`;