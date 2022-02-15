import { Container, Results } from "./styles";
import { useSimulator } from "../../Providers/SimulatorProvider";
import { formatCurrency } from "../../utils/formatValue";

const Result = () => {

  const { results } = useSimulator();

  return (
    <Container>
      <h2>Resultado da Simulação</h2>
      <Results>
        <div><h4>Valor final Bruto</h4><p>{formatCurrency(results.valorFinalBruto)}</p></div>
        <div><h4>Alíquota do IR</h4>{results.aliquotaIR}%</div>
        <div><h4>Valor Pago em IR</h4>{formatCurrency(results.valorPagoIR)}</div>
        <div><h4>Valor Final Líquido</h4>{formatCurrency(results.valorTotalInvestido)}</div>
        <div><h4>Valor Total Investido</h4>{formatCurrency(results.valorFinalLiquido)}</div>
        <div><h4>Ganho Líquido</h4>{formatCurrency(results.ganhoLiquido)}</div>
      </Results>
    </Container>
  )
}

export default Result;