import styled from "styled-components";

export const Head = styled.header`
  h1 {
    font-weight: 600;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  @media (max-width: 440px) {
    h1 {
      font-size: 28px;
    }
  }
`;