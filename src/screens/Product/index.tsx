import { useEffect, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Load } from "@components/Load";
import { ProductFullContent } from "@components/Products/ProductFullContent";
import { ProducFullContentProps } from "@components/Products/ProductFullContent/types";

import { Container, Content, LoadContainer } from "./styles";

import { useFetch } from "@hooks/useFetch";

type ParamsProps = {
  id: number;
};

type CartProps = {
  id: number;
  name: string;
};

export function Product() {
  const { getItem } = useAsyncStorage("@wine-app:cart");
  const [cart, setCart] = useState<CartProps[]>([]);

  async function handleFetchCart() {
    const response = await getItem();
    const carts = response ? JSON.parse(response) : [];
    setCart(carts);
  }

  useEffect(() => {
    handleFetchCart();
  }, [cart]);

  const route = useRoute();
  const { id } = route.params as ParamsProps;

  const { data, isFetching } = useFetch<ProducFullContentProps[]>(
    "/products?page=1&limit=10",
  );

  const product: ProducFullContentProps[] | undefined = data?.filter(
    (item) => item.id === id,
  );

  return (
    <Container>
      <Header totalItems={cart.length} />
      {isFetching ? (
        <LoadContainer>
          <Load />
        </LoadContainer>
      ) : (
        <Content>{product && <ProductFullContent {...product[0]} />}</Content>
      )}
    </Container>
  );
}
