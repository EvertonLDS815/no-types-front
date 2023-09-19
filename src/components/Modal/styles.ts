import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.div`
  background: white;
  border-radius: 20px;
  width: 400px;
  span {
    font-size: 30px;
    display: flex;
    color: #e95151;
  }
`;
