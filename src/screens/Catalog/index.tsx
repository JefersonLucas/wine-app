import {
  Container,
  Content,
  Filter,
  FilterContainer,
  FoundProducts,
  List,
  ListContainer,
} from "./styles";

import { ProductContent } from "../../components/Products/ProductContent";
import { Header } from "../../components/Header";
import { useTheme } from "styled-components";

const data = [1, 2, 3, 4];

export function Catalog() {
  const theme = useTheme();
  return (
    <Container>
      <Header totalItems={0} isBackground isLogo elevation={5} />
      <Content>
        <FilterContainer>
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
        </FilterContainer>
        <ListContainer>
          <List
            data={data}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => <ProductContent id={item} />}
            numColumns={2}
          />
        </ListContainer>
      </Content>
    </Container>
  );
}
