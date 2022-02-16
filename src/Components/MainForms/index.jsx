import { Container, FormHeader, Forms, IncomeFormButtons, SectionTitle, IndexingFormButtons, IncomeForm, IndexingForm, FormContainer, ClearSubmitBtn } from "./styles";
import Input from "../Input";
import ExclamationIcon from "../../assets/exclamation.png";
import { useSimulator } from "../../Providers/SimulatorProvider/";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const MainForms = () => {

  /*
    Estados criados para inicializar
    valores padrões para os inputs.
  */
  const [initialContribution, setInitialContribution] = useState(null);
  const [deadline, setDeadline] = useState(null);
  const [finalContribution, setFinalContribution] = useState(null);
  const [profitability, setProfitability] = useState(null);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  /*
    Objeto yup para validação de cada campo do
    formulário.
  */
  const schema = yup.object().shape({
    initialContribution: yup.string().matches(/^[0-9\b]+$/, "Aporte deve ser um número"),
    deadline: yup.string().matches(/^[0-9\b]+$/, "Prazo deve ser um número"),
    ipca: yup.string(),
    finalContribution: yup.string().matches(/^[0-9\b]+$/, "Aporte deve ser um número"),
    profitability: yup.string().matches(/^[0-9\b]+$/, "Rentabilidade deve ser um número"),
    cdi: yup.string()
  });

  /*
    Desestruturando funções do react-hook-form,
    que facilitam a utilização do formulário
    e validação de erros.
  */
  const { register, handleSubmit, reset, formState: { errors }, } = useForm({ resolver: yupResolver(schema) });

  /*
    Desestruturando funções e estados do SimulatorProvider.
  */
  const {
    income,
    indexing,
    changeIncome,
    changeIndexing,
    cdi,
    icpa,
    simulate,
    setShowResults
  } = useSimulator();

  /*
    useEffect para verificar se os campos do
    formulário estão preenchidos.
  */
  useEffect(() => {
    if (initialContribution != null & deadline != null & finalContribution != null & profitability != null & income !== "" & indexing !== "") {
      setSubmitDisabled(false);
    }
  }, [deadline, profitability, initialContribution, finalContribution, income, indexing])

  /*
    Função utilizada para limpar formulário.
  */
  const clearForm = (e) => {
    e.preventDefault();
    setShowResults();
    changeIncome("");
    reset();
  };

  /*
    Função que será executada pela botão "simular"
    do formulário.
  */
  const onSubmitFunction = (data) => {
    simulate(income, indexing);
  };

  return (
    <Container>
      <h2>Simulador</h2>
      <FormHeader>
        <IncomeFormButtons income={income}>
          <SectionTitle>
            <p>Rendimento</p>
            <img src={ExclamationIcon} alt="Info" />
          </SectionTitle>
          <button className="btn__grossSalary" onClick={() => changeIncome("bruto")} >Bruto</button>
          <button className="btn__liquidSalary" onClick={() => changeIncome("liquido")} >Líquido</button>
        </IncomeFormButtons>
        <IndexingFormButtons indexing={indexing}>
          <SectionTitle>
            <p>Tipos de indexação</p>
            <img src={ExclamationIcon} alt="Info" />
          </SectionTitle>
          <button className="btn__pre" onClick={() => changeIndexing("pre")}>PRÉ</button>
          <button className="btn__pos" onClick={() => changeIndexing("pos")} >POS</button>
          <button className="btn__fixed" onClick={() => changeIndexing("fixado")}>FIXADO</button>
        </IndexingFormButtons>
      </FormHeader>
      <FormContainer onSubmit={handleSubmit(onSubmitFunction)}>
        <Forms>
          <IncomeForm>
            <Input
              label="Aporte Inicial"
              value={initialContribution}
              onChange={(e) => setInitialContribution(e.target.value)}
              name="initialContribution"
              register={register}
              error={errors.initialContribution?.message} />
            <Input
              label="Prazo (em meses)"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              name="deadline"
              register={register}
              error={errors.deadline?.message} />
            <Input
              label="ICPA (ao ano)"
              value={`${icpa}%`}
              name="ipca"
              register={register}
              error={errors.icpa?.message} />
          </IncomeForm>
          <IndexingForm>
            <IncomeForm>
              <Input
                label="Aporte Mensal"
                value={finalContribution}
                onChange={(e) => setFinalContribution(e.target.value)}
                name="finalContribution"
                register={register}
                error={errors.finalContribution?.message} />
              <Input
                label="Rentabilidade"
                value={profitability}
                onChange={(e) => setProfitability(e.target.value)}
                name="profitability"
                register={register}
                error={errors.profitability?.message} />
              <Input
                label="CDI (ano ano)"
                value={`${cdi}%`}
                name="cdi"
                register={register}
                error={errors.cdi?.message} />
            </IncomeForm>
          </IndexingForm>
        </Forms>
        <ClearSubmitBtn disabled={submitDisabled}>
          <button className="btn__clear" onClick={clearForm}>Limpar campos</button>
          <button type="submit" className="btn__submit" disabled={submitDisabled} >Simular</button>
        </ClearSubmitBtn>
      </FormContainer>
    </Container>
  )
}

export default MainForms;