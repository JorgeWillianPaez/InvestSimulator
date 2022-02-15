import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";

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
      setIncome("bruto");
    } else if (type === "liquido") {
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
    api.get(`/simulacoes?tipoIndexacao=${indexingType}&tipoRendimento=${incomeType}`)
      .then((res) => {
        setResults(res.data[0]);
        setShowResults(true);
      })
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
      setShowResults
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