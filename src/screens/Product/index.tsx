import { useRoute } from "@react-navigation/native";

import { Header } from "@components/Header";
import { ProductFullContent } from "@components/Products/ProductFullContent";
import { ProducFullContentProps } from "@components/Products/ProductFullContent/types";
import { Load } from "@components/Load";

import { Container, Content, LoadContainer } from "./styles";

import { useFetch } from "@hooks/useFetch";

type ParamsProps = {
  id: number;
};

export function Product() {
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
      <Header totalItems={0} />
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
