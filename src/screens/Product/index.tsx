import { Header } from "../../components/Header";
import { ProductFullContent } from "../../components/Products/ProductFullContent";
import { Container, Content } from "./styles";

import { useRoute } from "@react-navigation/native";

import { data } from "../../mock/data";

type ParamsProps = {
  id: number;
};

export function Product() {
  const route = useRoute();
  const { id } = route.params as ParamsProps;

  const product = data.filter((item) => item.id === id);

  return (
    <Container>
      <Header totalItems={0} />
      <Content>
        <ProductFullContent {...product[0]} />
      </Content>
    </Container>
  );
}
