import styled from "styled-components/native";
import cart from "../../assets/img/cart.png";
import { HeaderProps } from "./types";

export const Container = styled.View<HeaderProps>`
  width: 100%;
  height: 96px;
  align-items: flex-end;
  flex-direction: row;
  padding: 0 25px 15px;
  justify-content: space-between;
  background-color: ${({ theme, isBackground }) =>
    isBackground
      ? theme.colors.background.tertiary
      : theme.colors.background.primary};

  position: relative;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const CartContainer = styled.View`
  position: absolute;
  right: 15px;
  bottom: -10px;
`;
