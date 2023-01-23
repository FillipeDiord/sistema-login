import { InputStyle } from "./styles";

export function Input({ type, placeholder, value, onChange }) {
  return (
    <InputStyle
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
}