import {
  Container,
  Image,
  Name,
  Specifications,
  Flag,
  Details,
  Description,
  DescriptionTitle,
  Comment,
  AddCartContainer,
  Label,
  Prices,
  Discount,
  PriceMember,
  PriceNonMember,
  Buttom,
  ButtomText,
  LabelText,
} from "./styles";

import bottleImage from "../../../assets/img/bottle.png";
import flagImage from "../../../assets/img/flag.png";

export function ProductFullContent() {
  return (
    <Container>
      <Image source={bottleImage} />
      <Name>Apothic Red 2019</Name>
      <Specifications>
        <Flag source={flagImage} />
        <Details>Estados Unidos</Details>
        <Details>Tinto Meio Seco</Details>
        <Details>750 ml</Details>
      </Specifications>
      <Description>
        <DescriptionTitle>Descrição</DescriptionTitle>
        <Comment>
          Produzido no terroir californiano, esse tinto mescla as variedades
          Zinfandel, Syrah, Cabernet Sauvignon e Merlot. Apothic é um vinho
          inspirado nas antigas Apothecas (adegas subterrâneas), um lugar
          misterioso onde há mais de 800 anos os viticultores misturavam e
          armazenavam seus cobiçados vinhos.
        </Comment>
      </Description>
      <AddCartContainer elevation={5}>
        <Label>
          <LabelText>15% OFF</LabelText>
        </Label>
        <Prices>
          <Discount>R$ 30.007,40</Discount>
          <PriceMember>R$ 28.000,00</PriceMember>
          <PriceNonMember>preço não-sócio R$ 29.999,90</PriceNonMember>
        </Prices>

        <Buttom activeOpacity={0.7}>
          <ButtomText>Adicionar</ButtomText>
        </Buttom>
      </AddCartContainer>
    </Container>
  );
}
