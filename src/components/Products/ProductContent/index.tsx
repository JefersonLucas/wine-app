import {
  Container,
  Content,
  Discount,
  Image,
  Name,
  Prices,
  Label,
  LabelText,
  Row,
  PriceNonMember,
  PriceMember,
  SimpleText,
  Buttom,
  ButtomText,
  Stamp,
} from "./styles";

import bottleImage from "../../../assets/img/bottle-2.png";
import stampImage from "../../../assets/img/stamp.png";
import { useNavigation } from "@react-navigation/native";

type ProductContentProps = {
  id: number;
};

export function ProductContent({ id }: ProductContentProps) {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate("product", { id: id });
  }

  return (
    <Container>
      <Content elevation={5}>
        <Image source={bottleImage} />
        <Stamp source={stampImage} />
        <Name>Toro Loco D.O.P. Utiel-Requena Tempranillo 2017</Name>
        <Prices>
          <Row>
            <Discount>R$ 37,40</Discount>
            <Label>
              <LabelText>15% OFF</LabelText>
            </Label>
          </Row>
          <Row>
            <SimpleText>Sócio wine</SimpleText>
            <PriceMember>R$ 30,00</PriceMember>
          </Row>
          <PriceNonMember>Não sócio R$ 37,40</PriceNonMember>
        </Prices>
      </Content>
      <Buttom activeOpacity={0.7} onPress={openScreen}>
        <ButtomText>Adicionar</ButtomText>
      </Buttom>
    </Container>
  );
}
