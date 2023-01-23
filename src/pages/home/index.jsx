import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";

import {
  Container,
  Title
} from "./styles";

export function Home() {
  const { SignOut } = useAuth();
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Home</Title>
      <Button
        Text="Sair"
        onClick={() => [SignOut(), navigate("/")]}>
        Sair
      </Button>
    </Container>
  );
}