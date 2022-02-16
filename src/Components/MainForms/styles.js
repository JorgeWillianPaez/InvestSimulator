import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  flex-direction: column;

  h2 {
    margin: 10px 0 10px 23px;
  }
`;

export const FormContainer = styled.form`

  display: flex;
  flex-direction: column;
  margin-top: 40px;

`;

export const IncomeForm = styled.div`

  display: flex;
  flex-direction: column;
  margin-left: 10px;
  
  input {
    width: 220px;
  }

`;

export const FormHeader = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  p {
    font-size: 12px;
    margin-bottom: 14px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }

`;

export const Forms = styled.div`

  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

`;

export const IncomeFormButtons = styled.div`

  margin-left: 18px;
  width: 204px;

  button {
    width: 50%;
    height: 50px;
    font-size: 12px;
    border: 1px solid black;
    background-color: transparent;
  }

  .btn__grossSalary {
    background-color: ${({ income }) => income === "bruto" ? "var(--salmon)" : "transparent"};
    border-radius: 8px 0 0 8px;
  }

  .btn__liquidSalary {
    background-color: ${({ income }) => income === "liquido" ? "var(--salmon)" : "transparent"};
    border-radius: 0 8px 8px 0;
  }

`;

export const SectionTitle = styled.div`

  display: flex;

  img {
    margin-left: auto;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

`;

export const IndexingFormButtons = styled.div`

  margin-left: 20px;
  width: 220px;

  button {
    width: 33.3%;
    height: 50px;
    font-size: 12px;
    border: 1px solid black;
  }

  .btn__pre {
    background-color: ${({ indexing }) => indexing === "pre" ? "var(--salmon)" : "transparent"};
    border-radius: 8px 0 0 8px;
  }

  .btn__pos {
    background-color: ${({ indexing }) => indexing === "pos" ? "var(--salmon)" : "transparent"};
  }

  .btn__fixed {
    background-color: ${({ indexing }) => indexing === "fixado" ? "var(--salmon)" : "transparent"};
    border-radius: 0 8px 8px 0;
  }

`;

export const IndexingForm = styled.div``;

export const ClearSubmitBtn = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 450px;
  margin-left: 24px;

  button {
    background-color: transparent;
    border: 1px solid black;
    border-radius: 8px;
    width: 48%;
    height: 48px;
    font-weight: bold;
    font-size: 16px;
    margin-top: 10px;
  }

  button ~ .btn__submit {
    background-color: var(--salmon);
    border: none;
    transition: 0.2s;
    :disabled {
      background-color: var(--gray);
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;

    button {
      margin: 0;
    }
  }

`;