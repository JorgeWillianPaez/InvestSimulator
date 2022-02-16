import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";

const simulatorContext = createContext();

export const SimulatorProvider = ({ children }) => {

  /*
    Declarando e inicializando estados que são
    utilizados nas funções e renderizações.
  */
  const [income, setIncome] = useState("");
  const [indexing, setIndexing] = useState("");
  const [cdi, setCdi] = useState(0);
  const [icpa, setIcpa] = useState(0);
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [grossLiquidButton, setGrossLiquidButton] = useState(null);

  /*
    useEffect utilizado para inserir valores iniciais
    para CDI e ICPA na aplicação.
  */
  useEffect(() => {
    api.get("/indicadores")
      .then((res) => {
        setCdi(res.data[0].valor);
        setIcpa(res.data[1].valor);
      })
  })

  /*
    Função que altera o valor do estado
    "income" para "bruto" ou "liquido".
  */
  const changeIncome = (type) => {
    if (type === "bruto") {
      setGrossLiquidButton(true);
      setIncome("bruto");
    } else if (type === "liquido") {
      setGrossLiquidButton(false);
      setIncome("liquido");
    };
  };

  /*
    Função que altera o valor do estado
    "indexing" para "pre", "pos" ou "fixado".
  */
  const changeIndexing = (type) => {
    if (type === "pre") {
      setIndexing("pre");
    } else if (type === "pos") {
      setIndexing("pos");
    } else {
      setIndexing("fixado");
    };
  };

  /*
    Função principal que faz a requisição na api fake,
    pegando todos os dados e filtrando através dos
    query params.
  */
  const simulate = (incomeType, indexingType) => {
    if (indexingType === "fixado") {
      return toast.error("Desculpe, a simulação não foi encontrada ");
    }
    api.get(`/simulacoes?tipoIndexacao=${indexingType}&tipoRendimento=${incomeType}`)
      .then((res) => {
        toast.success("Simulação concluída!")
        setResults(res.data[0]);
        setShowResults(true);
      }).catch((err) => {
        console.log(err);
      });
  }

  return (
    <simulatorContext.Provider value={{
      income,
      indexing,
      changeIncome,
      changeIndexing,
      cdi,
      icpa,
      simulate,
      results,
      showResults,
      setShowResults,
      grossLiquidButton
    }}>
      {children}
    </simulatorContext.Provider>
  )

};

/*
  Exportando função que será utilizada para
  desestruturar todas as funções e estados
  declarados no SimulatorProvider.
*/
export const useSimulator = () => useContext(simulatorContext);