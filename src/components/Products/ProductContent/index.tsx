import { useNavigation } from "@react-navigation/native";

import * as Style from "./styles";

import { ProductProps } from "./types";

import stampImage from "../../../assets/img/stamp.png";

import { formatToReal, percentage } from "../../../helpers";

export function ProductContent({
  id,
  name,
  image,
  price,
  discount,
  priceMember,
  priceNonMember,
}: ProductProps) {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate("product", { id: id });
  }

  return (
    <Style.Container>
      <Style.Content elevation={5}>
        <Style.Image source={{ uri: image }} />
        <Style.Stamp source={stampImage} />
        <Style.Name>{name}</Style.Name>
        <Style.Prices>
          <Style.Row>
            <Style.Discount>R$ {formatToReal(price)}</Style.Discount>
            <Style.Label>
              <Style.LabelText>
                {percentage(discount, price)}% OFF
              </Style.LabelText>
            </Style.Label>
          </Style.Row>
          <Style.Row>
            <Style.SimpleText>Sócio wine</Style.SimpleText>
            <Style.PriceMember>
              R$ {formatToReal(priceMember)}
            </Style.PriceMember>
          </Style.Row>
          <Style.PriceNonMember>
            Não sócio R$ {formatToReal(priceNonMember)}
          </Style.PriceNonMember>
        </Style.Prices>
      </Style.Content>
      <Style.Buttom activeOpacity={0.7} onPress={openScreen}>
        <Style.ButtomText>Adicionar</Style.ButtomText>
      </Style.Buttom>
    </Style.Container>
  );
}
