import { InputContainer } from "./styles";

const Input = ({ placeholder, type, name, label, value, ...rest }) => {
  return (
    <InputContainer>
      <input placeholder={placeholder} id={name} value={value} name={name} {...rest} />
      <label for="name">{label}</label>
    </InputContainer>
  )
}

export default Input;