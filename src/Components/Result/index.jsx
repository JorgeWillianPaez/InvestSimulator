import { Container, Results } from "./styles";
import { useSimulator } from "../../Providers/SimulatorProvider";

const Result = () => {

  const { results } = useSimulator();

  return (
    <Container>
      <h2>Resultado da Simulação</h2>
      <Results>
        <div><h4>Valor final Bruto</h4><p>{results.valorFinalBruto}</p></div>
        <div><h4>Alíquota do IR</h4>{results.aliquotaIR}</div>
        <div><h4>Valor Pago em IR</h4>{results.valorPagoIR}</div>
        <div><h4>Valor Final Líquido</h4>{results.valorTotalInvestido}</div>
        <div><h4>Valor Total Investido</h4>{results.valorFinalLiquido}</div>
        <div><h4>Ganho Líquido</h4>{results.ganhoLiquido}</div>
      </Results>
    </Container>
  )
}

export default Result;