import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";

const simulatorContext = createContext();

export const SimulatorProvider = ({ children }) => {

  const [income, setIncome] = useState("");
  const [indexing, setIndexing] = useState("");
  const [cdi, setCdi] = useState(0);
  const [icpa, setIcpa] = useState(0);
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);


  useEffect(() => {
    api.get("/indicadores")
      .then((res) => {
        setCdi(res.data[0].valor);
        setIcpa(res.data[1].valor);
      })
  })

  const changeIncome = (type) => {
    if (type === "bruto") {
      setIncome("bruto");
    } else if (type === "liquido") {
      setIncome("liquido");
    };
    console.log(income);
  };

  const changeIndexing = (type) => {
    if (type === "pre") {
      setIndexing("pre");
    } else if (type === "pos") {
      setIndexing("pro");
    } else {
      setIndexing("fixado");
    };
  };

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
      showResults
    }}>
      {children}
    </simulatorContext.Provider>
  )

};

export const useSimulator = () => useContext(simulatorContext);