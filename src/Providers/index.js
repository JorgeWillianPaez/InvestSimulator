import { SimulatorProvider } from "./SimulatorProvider";

export const Providers = ({ children }) => {
  return (
    <SimulatorProvider>
      {children}
    </SimulatorProvider>
  )
}