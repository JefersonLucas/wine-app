import { Header } from "../../components/Header";
import { Container, Content, Text } from "./styles";

export function Product() {
  return (
    <Container>
      <Header totalItems={0} />
      <Content>
        <Text>Product</Text>
      </Content>
    </Container>
  );
}
