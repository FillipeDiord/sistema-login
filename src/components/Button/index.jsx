
import { ButtonStyle } from "./styles";

export function Button({ Text, onClick, Type = "button" }) {
  return (
    <ButtonStyle type={Type} onClick={onClick}>
      {Text}
    </ButtonStyle>
  );
}