import { InputContainer } from "./styles";

const Input = ({ placeholder, name, label, value, register, error, ...rest }) => {
  return (
    <InputContainer>
      <input {...register(name)} placeholder={placeholder} id={name} value={value} {...rest} />
      <label for="name">{label}</label>
      <div>{error}</div>
    </InputContainer>
  )
}

export default Input;