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
      width: 80%;
      margin: 15px auto;
      display: block;
      transform: translateX(-10px);
    }
    iframe {
      height: 230px;
      width: 400px;
      margin: 30px auto;
      display: block;
      transform: translateX(-10px);
    }

    @media (max-width: 580px) {
      img {
        width: 92%;
        transform: translateX(-8px);
      }
      iframe {
        height: 180px;
        width: 68vw;
        transform: translateX(-8px);
      }
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
