import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 5%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 10px rgb(14 55 54 / 25%);
  opacity: 0.9;
  transition: all 0.2s ease-in-out;
  position: relative;
  
  
  &:hover {
    opacity: 1;
    transform: scale(1.025);
  }
  
  .image-link {
    width: 100%;
  }
  &.concluido {
    background: #89ff89;
  }
  h3 {
    color: #333;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 4px;
    cursor: pointer;
    word-wrap: break-word;

    a {
      text-decoration: none;
      color: inherit;
    }
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

  button {
    background-color: #0075ff;
    border-radius: 0.8rem;
    color: white;
    border: none;
    font-weight: 600;
    cursor: pointer;
    padding: 5px;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  @media (max-width: 420px) {
    border-radius: 9px;
    padding: 6%;

    span {
      display: none;
    }

    button {
      position: initial;
    }
  }
`;
