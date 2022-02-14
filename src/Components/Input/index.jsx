import { InputContainer } from "./styles";

const Input = ({ placeholder, type, name, label }) => {
  return (
    <InputContainer>
      <input placeholder={placeholder} id={name} name={name} />
      <label for="name">{label}</label>
    </InputContainer>
  )
}

export default Input;