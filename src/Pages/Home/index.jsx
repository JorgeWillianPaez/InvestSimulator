import { MainContainer, FormAndResult, Content } from "./styles";
import Header from "../../Components/Header";
import MainForms from "../../Components/MainForms";
import Result from "../../Components/Result";
import { useSimulator } from "../../Providers/SimulatorProvider";

const Home = () => {

  const { showResults } = useSimulator();

  return (
    <MainContainer>
      <Header />
      <Content>
        <h1>Simulador de Investimentos</h1>
        <FormAndResult>
          <MainForms />
          {showResults && <Result />}
        </FormAndResult>
      </Content>
    </MainContainer>
  )
}

export default Home;