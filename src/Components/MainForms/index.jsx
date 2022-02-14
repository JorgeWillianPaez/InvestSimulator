import { Container, FormHeader, Forms, IncomeFormButtons, SectionTitle, IndexingFormButtons, IncomeForm, IndexingForm, FormContainer, ClearSubmitBtn } from "./styles";
import Input from "../Input";
import ExclamationIcon from "../../assets/exclamation.png";
import { useSimulator } from "../../Providers/SimulatorProvider/";

const MainForms = () => {

  const {
    income,
    indexing,
    changeIncome,
    changeIndexing,
    cdi,
    icpa,
    simulate
  } = useSimulator();

  const simulateFunction = (e) => {
    e.preventDefault();
    simulate(income, indexing);
  }

  return (
    <Container>
      <h2>Simulador</h2>
      <FormHeader>
        <IncomeFormButtons>
          <SectionTitle>
            <p>Rendimento</p>
            <img src={ExclamationIcon} alt="Info" />
          </SectionTitle>
          <button className="btn__grossSalary" onClick={() => changeIncome("bruto")} >Bruto</button>
          <button className="btn__liquidSalary" onClick={() => changeIncome("líquido")} >Líquido</button>
        </IncomeFormButtons>
        <IndexingFormButtons>
          <SectionTitle>
            <p>Tipos de indexação</p>
            <img src={ExclamationIcon} alt="Info" />
          </SectionTitle>
          <button className="btn__pre" onClick={() => changeIndexing("pré")}>PRÉ</button>
          <button onClick={() => changeIndexing("pos")} >POS</button>
          <button className="btn__fixed" onClick={() => changeIndexing("fixado")}>FIXADO</button>
        </IndexingFormButtons>
      </FormHeader>
      <FormContainer>
        <Forms>
          <IncomeForm>
            <Input label="Aporte Inicial" />
            <Input label="Prazo (em meses)" />
            <Input label="ICPA (ao ano)" value={icpa} />
          </IncomeForm>
          <IndexingForm>
            <IncomeForm>
              <Input label="Aporte Mensal" />
              <Input label="Rentabilidade" />
              <Input label="CDI (ano ano)" value={cdi} />
            </IncomeForm>
          </IndexingForm>
        </Forms>
        <ClearSubmitBtn>
          <button className="btn__clear" >Limpar campos</button>
          <button className="btn__submit" onClick={simulateFunction}>Simular</button>
        </ClearSubmitBtn>
      </FormContainer>
    </Container>
  )
}

export default MainForms;