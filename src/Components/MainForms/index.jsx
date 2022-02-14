import { Container, FormHeader, Forms, IncomeFormButtons, SectionTitle, IndexingFormButtons, IncomeForm, IndexingForm, FormContainer, ClearSubmitBtn } from "./styles";
import Input from "../Input";
import ExclamationIcon from "../../assets/exclamation.png";
import { useSimulator } from "../../Providers/SimulatorProvider/";
import { useState } from "react";

const MainForms = () => {

  const [initialContribution, setInitialContribution] = useState();
  const [deadline, setDeadline] = useState("");
  const [finalContribution, setFinalContribution] = useState();
  const [profitability, setProfitability] = useState("");

  const clearForm = (e) => {
    e.preventDefault();
    setInitialContribution(0);
    setDeadline("");
    setFinalContribution(0);
    setProfitability("");
  };

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
    simulate("bruto", "pre");
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
          <button className="btn__grossSalary" income onClick={() => changeIncome("bruto")} >Bruto</button>
          <button className="btn__liquidSalary" income onClick={() => changeIncome("liquido")} >Líquido</button>
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
            <Input label="Aporte Inicial" value={initialContribution} onChange={(e) => setInitialContribution(e.target.value)} />
            <Input label="Prazo (em meses)" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
            <Input label="ICPA (ao ano)" value={icpa} />
          </IncomeForm>
          <IndexingForm>
            <IncomeForm>
              <Input label="Aporte Mensal" value={finalContribution} onChange={(e) => setFinalContribution(e.target.value)} />
              <Input label="Rentabilidade" value={profitability} onChange={(e) => setProfitability(e.target.value)} />
              <Input label="CDI (ano ano)" value={cdi} />
            </IncomeForm>
          </IndexingForm>
        </Forms>
        <ClearSubmitBtn>
          <button className="btn__clear" onClick={clearForm}>Limpar campos</button>
          <button className="btn__submit" onClick={simulateFunction}>Simular</button>
        </ClearSubmitBtn>
      </FormContainer>
    </Container>
  )
}

export default MainForms;