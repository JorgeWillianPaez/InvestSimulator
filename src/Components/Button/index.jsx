import { ButtonContainer } from "./styles";

/*
  Componente botão para ser reutilizado
  em outros componentes da aplicação.
*/

const Button = ({ children }) => {
  return (
    <ButtonContainer>
      {children}
    </ButtonContainer>
  )
}

export default Button;