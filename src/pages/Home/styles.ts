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
`;

export const Container = styled.div`
  background: #333;
  padding: 25px 22px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
`;
