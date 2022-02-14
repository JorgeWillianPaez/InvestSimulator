import { MainContainer, Content } from "./styles";
import Header from "../../Components/Header";
import MainForms from "../../Components/MainForms";

const Home = () => {
  return (
    <MainContainer>
      <Header />
      <Content>
        <h1>Simulador de Investimentos</h1>
        <MainForms />
      </Content>
    </MainContainer>
  )
}

export default Home;