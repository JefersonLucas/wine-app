import { Header } from "../../components/Header";
import { ProductFullContent } from "../../components/Products/ProductFullContent";
import { Container, Content } from "./styles";

export function Product() {
  return (
    <Container>
      <Header totalItems={0} />
      <Content>
        <ProductFullContent />
      </Content>
    </Container>
  );
}
