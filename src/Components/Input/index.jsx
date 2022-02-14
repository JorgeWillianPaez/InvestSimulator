import { InputContainer } from "./styles";

const Input = ({ placeholder, type, name, label, ...rest }) => {
  return (
    <InputContainer>
      <input placeholder={placeholder} id={name} name={name} {...rest} />
      <label for="name">{label}</label>
    </InputContainer>
  )
}

export default Input;