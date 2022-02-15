import { HeaderContainer, NavBar, NavIcons, LinkBar, SearchBar, Arrows } from "./styles";
import leftArrowIcon from "../../assets/leftArrowIcon.png";
import rightArrowIcon from "../../assets/rightArrowIcon.png";
import closeIcon from "../../assets/closeIcon.png";
import homeIcon from "../../assets/homeIcon.png";
import searchIcon from "../../assets/searchIcon.png";

/*
  Componente header utilizado na
  aplicação desktop.
*/

const Header = () => {
  return (
    <HeaderContainer>
      <p>Calculadora de investimentos</p>
      <NavBar>
        <NavIcons>
          <Arrows>
            <img src={leftArrowIcon} alt="Voltar" />
            <img src={rightArrowIcon} alt="Próximo" />
          </Arrows>
          <img src={closeIcon} alt="Cancelar" />
          <img src={homeIcon} alt="Página principal" />
        </NavIcons>
        <LinkBar />
        <SearchBar>
          <img src={searchIcon} alt="Pesquisar..." />
        </SearchBar>
      </NavBar>
    </HeaderContainer>
  )
}

export default Header;