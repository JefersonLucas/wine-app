import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.tertiary};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  z-index: -1;
`;

export const LoadContainer = styled.View`
  flex: 1;
  align-items: center;
  align-self: center;
  justify-content: center;
`;
