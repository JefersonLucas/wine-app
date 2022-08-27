import { Container, Content, Filter, FoundProducts, List } from "./styles";

import { ProductContent } from "../../components/Products/ProductContent";
import { Header } from "../../components/Header";
import { useTheme } from "styled-components";

const data = ["1", "2", "3", "4"];

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
        <FoundProducts>
          {data.length <= 0
            ? `Nenhum produto encontrado`
            : data.length === 1
            ? `${data.length} produto encontrado`
            : `${data.length} produtos encontrados`}
        </FoundProducts>
        <List
          data={data}
          keyExtractor={(item) => item}
          renderItem={() => <ProductContent />}
          numColumns={2}
        />
      </Content>
    </Container>
  );
}
