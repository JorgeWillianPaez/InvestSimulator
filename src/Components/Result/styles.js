import styled from "styled-components";

export const Container = styled.div`

  h2 {
    margin: 12px 0 0 100px;
  }

`;

export const Results = styled.div`

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 700px;
  justify-content: space-between;
  margin-left: 92px;
  margin-top: 30px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around; 
    width: 200px;
    height: 100px;
    background-color: #F9F9F9;
    margin: 10px;
    box-shadow: 0px 1px 5px 5px rgba(0,0,0,0.2);
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }

`;