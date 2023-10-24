import styled from 'styled-components';

export const Header = styled.header`
  h1 {
    font-weight: 600;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  @media (max-width: 420px) {
    h1 {
      font-size: 28px;
    }
  }
`;

export const Container = styled.div`
  background: #333;
  padding: 25px 22px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  
  @media (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
