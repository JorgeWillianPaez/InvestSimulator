import styled from "styled-components";

export const MainContainer = styled.div`

  width: 100%;

`;

export const FormAndResult = styled.div`

  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }

`;

export const Content = styled.div`

  display: flex;
  flex-direction: column;
  margin: 28px auto 20px auto;
  width: 95%;
  height: 80vh;
  background-color: var(--lightGray);

  h1 {
    margin-top: 16px;
    margin-bottom: 14px;
    text-align: center;
  }
`;