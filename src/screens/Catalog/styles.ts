import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.fonts.size.xxl};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  line-height: ${({ theme }) => theme.fonts.lineHeight.xl};
  color: ${({ theme }) => theme.colors.text.primary};
`;
