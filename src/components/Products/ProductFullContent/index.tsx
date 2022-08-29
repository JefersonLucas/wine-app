import { formatToReal, limitText, percentage } from "@helpers/index";
import * as Style from "./styles";

import { ProducFullContentProps } from "./types";

export function ProductFullContent(props: ProducFullContentProps) {
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

        <Style.Buttom activeOpacity={0.7}>
          <Style.ButtomText>Adicionar</Style.ButtomText>
        </Style.Buttom>
      </Style.AddCartContainer>
    </Style.Container>
  );
}
