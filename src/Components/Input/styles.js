import styled from "styled-components";

export const InputContainer = styled.div`

  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  label {
    position: absolute;
    top: -6px;
    display: block;
    transition: 0.2s;
    margin-left: 16px;
    cursor: text;
    font-size: 12px;
  }

  input {
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid black;
    padding-bottom: 6px;
    font-weight: medium;
    font-size: 16px;
    width: 200px;
    margin: 26px 16px;
    transition: 0.4s;
    :focus {
      border-bottom: 2px solid var(--salmon);
    }
  }

  div {
    position: absolute;
    top: 55px;
    left: 16px;
    color: red;
    font-size: 12px;
  }
  
`;