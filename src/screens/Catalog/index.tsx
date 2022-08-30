import { useCallback, useState } from "react";

import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import { ProductContent } from "@components/Products/ProductContent";
import { Header } from "@components/Header";
import { Load } from "@components/Load";
import { ProductProps } from "@components/Products/ProductContent/types";

import { useFetch } from "@hooks/useFetch";

import * as Style from "./styles";

type CartProps = {
  id: number;
  name: string;
};

export function Catalog() {
  const { getItem } = useAsyncStorage("@wine-app:cart");

  const [name, setName] = useState("");
  const [cart, setCart] = useState<CartProps[]>([]);

  async function handleFetchCart() {
    const response = await getItem();
    const carts = response ? JSON.parse(response) : [];
    setCart(carts);
  }

  useFocusEffect(
    useCallback(() => {
      handleFetchCart();
    }, []),
  );

  const { data, isFetching } = useFetch<ProductProps[]>(
    "/products?page=1&limit=10",
  );

  const product: ProductProps[] | undefined = data?.filter((item) => {
    return item.name.includes(name);
  });

  return (
    <Style.Container>
      <Header totalItems={cart.length} isBackground isLogo elevation={5} />
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
