import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";

const simulatorContext = createContext();

export const SimulatorProvider = ({ children }) => {

  const [income, setIncome] = useState(null);
  const [indexing, setIndexing] = useState(null);
  const [cdi, setCdi] = useState(null);
  const [icpa, setIcpa] = useState(null);


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
    } else if (type === "líquido") {
      setIncome("liquido");
    };
  };

  const changeIndexing = (type) => {
    if (type === "pré") {
      setIndexing("pre");
    } else if (type === "pos") {
      setIndexing("pro");
    } else {
      setIndexing("fixado");
    };
  };

  const simulate = (incomeType, indexingType, e) => {
    e.preventDefault();
    api.get(`/simulacoes?tipoIndexacao=${indexingType}&tipoRendimento=${incomeType}`)
      .then((res) => {
        console.log(res.data);
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
      simulate
    }}>
      {children}
    </simulatorContext.Provider>
  )

};

export const useSimulator = () => useContext(simulatorContext);