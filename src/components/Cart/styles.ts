import styled from "styled-components/native";
import cart from "../../assets/img/cart.png";

export const Container = styled.ImageBackground.attrs({
  source: cart,
})`
  width: 56px;
  height: 56px;

  position: relative;
`;

export const Oval = styled.View`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 20px;
  height: 20px;

  border-radius: 50px;

  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.background.tertiary};
`;

export const Count = styled.Text`
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: ${({ theme }) => theme.fonts.size.sm};
  line-height: ${({ theme }) => theme.fonts.lineHeight.sm};
  color: ${({ theme }) => theme.colors.text.chardonnay};
`;
