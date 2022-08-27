import { Container, Content, Filter, FoundProducts } from "./styles";

import { ProductContent } from "../../components/Products/ProductContent";
import { Header } from "../../components/Header";
import { useTheme } from "styled-components";

export function Catalog() {
  const theme = useTheme();
  return (
    <Container>
      <Header totalItems={0} isBackground isLogo elevation={5} />
      <Content>
        <Filter
          placeholder="O que você está procurando?"
          selectionColor={theme.colors.text.wine}
        />
        <FoundProducts>45 produtos encontrados</FoundProducts>
        <ProductContent />
      </Content>
    </Container>
  );
}
