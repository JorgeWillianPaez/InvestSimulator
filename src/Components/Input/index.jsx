import { InputContainer } from "./styles";

/*
  Componente input para ser reutilizado
  em outros componentes da aplicação.
*/

const Input = ({ placeholder, name, label, value, register, error = "", ...rest }) => {
  return (
    <InputContainer>
      <input {...register(name)} placeholder={placeholder} id={name} value={value} {...rest} />
      <label for="name">{label}</label>
      <div>{!!error && error}</div>
    </InputContainer>
  )
}

export default Input;