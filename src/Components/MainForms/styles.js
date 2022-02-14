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
  justify-content: space-around;
  width: 38%;

  p {
    font-size: 12px;
    margin-bottom: 14px;
  }

`;

export const Forms = styled.div`

  display: flex;

`;

export const IncomeFormButtons = styled.div`

  width: 40%;

  button {
    width: 50%;
    height: 50px;
    font-size: 12px;
    border: 1px solid black;
  }

  .btn__grossSalary {
    border-radius: 8px 0 0 8px;
  }

  .btn__liquidSalary {
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

  width: 40%;

  button {
    width: 33.3%;
    height: 50px;
    font-size: 12px;
    border: 1px solid black;
  }

  .btn__pre {
    border-radius: 8px 0 0 8px;
  }

  .btn__fixed {
    border-radius: 0 8px 8px 0;
  }

`;

export const IndexingForm = styled.div``;

export const ClearSubmitBtn = styled.div`

  display: flex;
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
  }

  button ~ .btn__submit {
    background-color: ${props => props.submitColor ? "salmon" : "gray"};
    border: none;
  }

`;