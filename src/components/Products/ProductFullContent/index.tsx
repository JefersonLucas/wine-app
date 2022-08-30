import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

import { formatToReal, limitText, percentage } from "@helpers/index";

import * as Style from "./styles";
import { ProducFullContentProps } from "./types";

export function ProductFullContent(props: ProducFullContentProps) {
  const { getItem, setItem } = useAsyncStorage("@wine-app:cart");

  async function handleAddCart() {
    try {
      const newItem = {
        id: props.id,
        name: props.name,
      };

      const response = await getItem();

      const presviousItems = response ? JSON.parse(response) : [];

      const data = [...presviousItems, newItem];

      await setItem(JSON.stringify(data));

      Toast.show({
        type: "success",
        text1: "Item adicionado ao carrinho!",
      });
    } catch (error) {
      console.log(error);

      Toast.show({
        type: "error",
        text1: "Não foi possível adicionar ao carrinho.",
      });
    }
  }

  return (
    <Style.Container>
      <Style.Image source={{ uri: props.image }} />
      <Style.Name>{props.name}</Style.Name>
      <Style.Specifications>
        <Style.Flag source={{ uri: props.flag }} />
        <Style.Details>{props.country}</Style.Details>
        <Style.Details>{props.type}</Style.Details>
        <Style.Details>{props.classification}</Style.Details>
        <Style.Details>{props.volume}</Style.Details>
      </Style.Specifications>
      <Style.Description>
        <Style.DescriptionTitle>Descrição</Style.DescriptionTitle>
        <Style.Comment>
          {limitText(props.sommelierComment, 400, false)}
        </Style.Comment>
      </Style.Description>
      <Style.AddCartContainer elevation={5}>
        <Style.Label>
          <Style.LabelText>
            {percentage(props.discount, props.price)}% OFF
          </Style.LabelText>
        </Style.Label>
        <Style.Prices>
          <Style.Discount>R$ {formatToReal(props.price)}</Style.Discount>
          <Style.PriceMember>
            R$ {formatToReal(props.priceMember)}
          </Style.PriceMember>
          <Style.PriceNonMember>
            preço não-sócio R$ {formatToReal(props.priceNonMember)}
          </Style.PriceNonMember>
        </Style.Prices>

        <Style.Buttom activeOpacity={0.7} onPress={handleAddCart}>
          <Style.ButtomText>Adicionar</Style.ButtomText>
        </Style.Buttom>
      </Style.AddCartContainer>
    </Style.Container>
  );
}
