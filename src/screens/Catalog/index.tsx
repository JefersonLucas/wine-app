import {
  Container,
  Content,
  InputFilter,
  FilterContainer,
  FoundProducts,
  List,
  ListContainer,
} from "./styles";

import { ProductContent } from "../../components/Products/ProductContent";
import { Header } from "../../components/Header";
import { useTheme } from "styled-components";

import { data } from "../../mock/data";
import { useState } from "react";

export function Catalog() {
  const theme = useTheme();

  const [name, setName] = useState("");

  const product = data.filter((item) => {
    return item.name.includes(name);
  });

  return (
    <Container>
      <Header totalItems={0} isBackground isLogo elevation={5} />
      <Content>
        <FilterContainer>
          <InputFilter
            placeholder="O que você está procurando?"
            selectionColor={theme.colors.text.wine}
            onChangeText={setName}
            value={name}
          />
          <FoundProducts>
            {product.length <= 0
              ? `Produto "${name}" não encontrado`
              : product.length === 1
              ? `${product.length} produto encontrado`
              : `${product.length} produtos encontrados`}
          </FoundProducts>
        </FilterContainer>
        <ListContainer>
          {name === "" ? (
            <List
              data={data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <ProductContent {...item} />}
              numColumns={2}
            />
          ) : (
            <List
              data={product}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <ProductContent {...item} />}
              numColumns={2}
            />
          )}
        </ListContainer>
      </Content>
    </Container>
  );
}
