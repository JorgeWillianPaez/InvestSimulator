import { Container, FormHeader, Forms, IncomeFormButtons, SectionTitle, IndexingFormButtons, IncomeForm, IndexingForm, FormContainer, ClearSubmitBtn } from "./styles";
import Input from "../Input";
import ExclamationIcon from "../../assets/exclamation.png";
import { useSimulator } from "../../Providers/SimulatorProvider/";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formatPercent } from "../../utils/formatValue";

const MainForms = () => {

  /*
    Estados criados para inicializar
    valores padrões para os inputs.
  */
  const [initialContribution, setInitialContribution] = useState();
  const [deadline, setDeadline] = useState();
  const [finalContribution, setFinalContribution] = useState();
  const [profitability, setProfitability] = useState();
  const [submitDisabled, setSubmitDisabled] = useState(true);

  /*
    Objeto yup para validação de cada campo do
    formulário.
  */
  const schema = yup.object().shape({
    initialContribution: yup.number("Campo deve ser um número").required("Campo obrigatório"),
    deadline: yup.number("Campo deve ser um número").required("Campo obrigatório"),
    ipca: yup.string(),
    finalContribution: yup.number("Campo deve ser um número").required("Campo obrigatório"),
    profitability: yup.number("Campo deve ser um número").required("Campo obrigatório"),
    cdi: yup.string()
  });

  /*
    Desestruturando funções do react-hook-form,
    que facilitam a utilização do formulário
    e validação de erros.
  */
  const { register, handleSubmit, reset, formState: { errors }, } = useForm({ resolver: yupResolver(schema) });

  /*
    Função utilizada para limpar formulário.
  */
  const clearForm = (e) => {
    e.preventDefault();
    setShowResults();
    reset();
  };

  /*
    useEffect para verificar se os campos do
    formulário estão preenchidos.
  */
  useEffect(() => {
    if (initialContribution != null & deadline != null & finalContribution != null & profitability != null) {
      setSubmitDisabled(false);
    }
  }, [deadline, profitability, initialContribution, finalContribution])

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
        <IncomeFormButtons>
          <SectionTitle>
            <p>Rendimento</p>
            <img src={ExclamationIcon} alt="Info" />
          </SectionTitle>
          <button className="btn__grossSalary" onClick={() => changeIncome("bruto")} >Bruto</button>
          <button className="btn__liquidSalary" onClick={() => changeIncome("liquido")} >Líquido</button>
        </IncomeFormButtons>
        <IndexingFormButtons>
          <SectionTitle>
            <p>Tipos de indexação</p>
            <img src={ExclamationIcon} alt="Info" />
          </SectionTitle>
          <button className="btn__pre" onClick={() => changeIndexing("pre")}>PRÉ</button>
          <button onClick={() => changeIndexing("pos")} >POS</button>
          <button className="btn__fixed" onClick={() => changeIndexing("fixado")}>FIXADO</button>
        </IndexingFormButtons>
      </FormHeader>
      <FormContainer onSubmit={handleSubmit(onSubmitFunction)}>
        <Forms>
          <IncomeForm>
            <Input
              label="Aporte Inicial"
              value={initialContribution}
              name="initialContribution"
              register={register}
              error={errors.initialContribution?.message} />
            <Input
              label="Prazo (em meses)"
              value={deadline}
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
                name="finalContribution"
                register={register}
                error={errors.finalContribution?.message} />
              <Input
                label="Rentabilidade"
                value={profitability}
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
          <button type="submit" className="btn__submit" >Simular</button>
        </ClearSubmitBtn>
      </FormContainer>
    </Container>
  )
}

export default MainForms;