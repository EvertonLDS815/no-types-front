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
  overflow-y: hidden;
  background: white;
  border-radius: 20px;
  max-width: 500px;
  width: 80vw;

  .head-modal {
    padding: 10px 10px 10px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.6);

    h1 {
      font-size: 28px;
      font-weight: 600;
    }
  }
  .cont {
    padding: 18px;
    padding-right: 0;
    overflow: scroll;
    height: 65vh;

    img {
      width: 70%;
      margin: 15px auto;
      display: block;
      transform: translateX(-10px);
    }
    ul {
      display: none;
    }
    p {
      padding-right: 10px;
    }
    iframe {
      width: 400px;
      aspect-ratio: 16/9;
      margin: 30px auto;
      display: block;
      transform: translateX(-10px);
    }

    @media (max-width: 580px) {
      iframe {
        width: 70vw;
        transform: translateX(-8px);
      }
    }
  }
  @media (max-width: 430px) {
    .cont ul {
      display: block;
      margin: 0 0 25px 20px;
    }
    .cont img {
        width: 92%;
        transform: translateX(-8px);
      }
    .head-modal {
      h1 {
        font-size: 25px;
      }
    }
  }
  @media (max-height: 400px) {
    .cont {
      height: 50vh;
    }
  }

  .cont::-webkit-scrollbar {
    width: 7px;
  }
  .cont::-webkit-scrollbar-track {
  }
  .cont::-webkit-scrollbar-thumb {
    background-color: #ccc; /* color of the scroll thumb */
    border-radius: 10px; /* roundness of the scroll thumb */
  }
  span {
    font-size: 30px;
    display: flex;
    color: #e95151;
    cursor: pointer;
  }
`;
