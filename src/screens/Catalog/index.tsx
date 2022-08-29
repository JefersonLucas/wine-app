import { useState } from "react";

import * as Style from "./styles";

import { ProductContent } from "@components/Products/ProductContent";
import { Header } from "@components/Header";
import { Load } from "@components/Load";
import { ProductProps } from "@components/Products/ProductContent/types";

import { useFetch } from "@hooks/useFetch";

export function Catalog() {
  const [name, setName] = useState("");

  const { data, isFetching } = useFetch<ProductProps[]>(
    "/products?page=1&limit=10",
  );

  const product: ProductProps[] | undefined = data?.filter((item) => {
    return item.name.includes(name);
  });

  return (
    <Style.Container>
      <Header totalItems={0} isBackground isLogo elevation={5} />
      {isFetching ? (
        <Style.LoadContainer>
          <Load />
        </Style.LoadContainer>
      ) : (
        <Style.Content>
          <Style.FilterContainer>
            <Style.InputFilter
              placeholder="O que você está procurando?"
              onChangeText={setName}
              value={name}
            />
            <Style.FoundProducts>
              {product && product.length <= 0
                ? `Produto "${name}" não encontrado`
                : product?.length === 1
                ? `${product?.length} produto encontrado`
                : `${product?.length} produtos encontrados`}
            </Style.FoundProducts>
          </Style.FilterContainer>
          <Style.ListContainer>
            {name === "" ? (
              <Style.List
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ProductContent {...item} />}
                numColumns={2}
              />
            ) : (
              <Style.List
                data={product}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ProductContent {...item} />}
                numColumns={2}
              />
            )}
          </Style.ListContainer>
        </Style.Content>
      )}
    </Style.Container>
  );
}
