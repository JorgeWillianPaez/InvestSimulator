import styled from "styled-components";

export const HeaderContainer = styled.div`

  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: var(--lightGray);

    p {
      margin-top: 4px;
      margin-bottom: 4px;
    }
  }

`;

export const NavBar = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

`;

export const NavIcons = styled.div`

  display: flex;
  justify-content: space-between;
  width: 16%;
  
  img {
    width: 24px;
  }

`;

export const Arrows = styled.div`

  display: flex;

  img {
    margin-left: 18px;
  }

`;

export const LinkBar = styled.div`

  height: 30px;
  background-color: white;
  border-radius: 10px;
  width: 56%;

`;

export const SearchBar = styled.div`

  display: flex;
  background-color: white;
  width: 24%;
  border-radius: 10px;
  padding: 5px;

  img {
    width: 20px;
  }

`;