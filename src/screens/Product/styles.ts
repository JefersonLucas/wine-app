import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.primary};
  z-index: -1;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.family.bold};
  font-size: ${({ theme }) => theme.fonts.size.xxl};
  line-height: ${({ theme }) => theme.fonts.lineHeight.xl};
  color: ${({ theme }) => theme.colors.text.primary};
`;
