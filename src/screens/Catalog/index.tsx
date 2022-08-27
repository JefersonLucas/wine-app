import { Container, Content } from "./styles";

import { ProductContent } from "../../components/Products/ProductContent";
import { Header } from "../../components/Header";

export function Catalog() {
  return (
    <Container>
      <Header totalItems={0} isBackground isLogo elevation={5} />
      <Content>
        <ProductContent />
      </Content>
    </Container>
  );
}
