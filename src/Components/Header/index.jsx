import { HeaderContainer, NavBar, NavIcons, LinkBar, SearchBar } from "./styles";
import leftArrowIcon from "../../assets/leftArrowIcon.png";
import rightArrowIcon from "../../assets/rightArrowIcon.png";
import closeIcon from "../../assets/closeIcon.png";
import homeIcon from "../../assets/homeIcon.png";
import searchIcon from "../../assets/searchIcon.png";


const Header = () => {
  return (
    <HeaderContainer>
      <p>Calculadora de investimentos</p>
      <NavBar>
        <NavIcons>
          <img src={leftArrowIcon} alt="Voltar" />
          <img src={rightArrowIcon} alt="Próximo" />
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