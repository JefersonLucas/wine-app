import { Header } from "../../components/Header";
import { ProductFullContent } from "../../components/Products/ProductFullContent";
import { Container, Content } from "./styles";

import { useRoute } from "@react-navigation/native";

type ParamsProps = {
  id: number;
};

export function Product() {
  const route = useRoute();
  const { id } = route.params as ParamsProps;
  return (
    <Container>
      <Header totalItems={id} />
      <Content>
        <ProductFullContent />
      </Content>
    </Container>
  );
}
