import { Container, FormHeader, Forms, IncomeFormButtons, SectionTitle, IndexingFormButtons, IncomeForm, IndexingForm, FormContainer, ClearSubmitBtn } from "./styles";
import Input from "../Input";
import ExclamationIcon from "../../assets/exclamation.png";

const MainForms = () => {
  return (
    <Container>
      <h2>Simulador</h2>
      <FormHeader>
        <IncomeFormButtons>
          <SectionTitle>
            <p>Rendimento</p>
            <img src={ExclamationIcon} alt="Info" />
          </SectionTitle>
          <button className="btn__grossSalary">Bruto</button>
          <button className="btn__liquidSalary">Líquido</button>
        </IncomeFormButtons>
        <IndexingFormButtons>
          <SectionTitle>
            <p>Tipos de indexação</p>
            <img src={ExclamationIcon} alt="Info" />
          </SectionTitle>
          <button className="btn__pre" >PRÉ</button>
          <button>POS</button>
          <button className="btn__fixed">FIXADO</button>
        </IndexingFormButtons>
      </FormHeader>
      <FormContainer>
        <Forms>
          <IncomeForm>
            <Input label="Aporte Inicial" />
            <Input label="Prazo (em meses)" />
            <Input label="ICPA (ao ano)" />
          </IncomeForm>
          <IndexingForm>
            <IncomeForm>
              <Input label="Aporte Mensal" />
              <Input label="Rentabilidade" />
              <Input label="CDI (ano ano)" />
            </IncomeForm>
          </IndexingForm>
        </Forms>
        <ClearSubmitBtn>
          <button className="btn__clear" >Limpar campos</button>
          <button className="btn__submit" >Simular</button>
        </ClearSubmitBtn>
      </FormContainer>
    </Container>
  )
}

export default MainForms;