import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 30px;
    text-align: center;
  }
  
  @media (min-width: 1024px) {
    
    h2 {
      text-align: initial;
      margin: 12px 0 0 100px;
    }
  }

`;

export const Results = styled.div`

  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
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

  @media (min-width: 580px) {
    flex-wrap: wrap;
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    width: 80%;
    margin-left: 92px;
  }
  
  @media (min-width: 1280px) {
    width: 88%;
  }

`;