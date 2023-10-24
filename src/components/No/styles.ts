import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 10px rgb(14 55 54 / 25%);
  opacity: 0.9;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 1;
    transform: scale(1.025);
  }

  .image-link {
    width: 100%;
  }
  h3 {
    color: #333;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 4px;
    cursor: pointer;
  }
  img {
    width: 100%;
    cursor: pointer;
  }
  span {
    color: #aaa;
    font-weight: 400;
    font-size: 18px;
  }
`;
