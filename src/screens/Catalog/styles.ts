import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const Content = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: space-between;
  padding: 40px 20px 20px 20px;
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  z-index: -1;
`;

export const FoundProducts = styled.Text`
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: ${({ theme }) => theme.fonts.size.lg};
  line-height: ${({ theme }) => theme.fonts.lineHeight.lg};
  color: ${({ theme }) => theme.colors.text.tertiary};
  margin: 24px 0 12px;
`;

export const Filter = styled.TextInput`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 4px;
  padding: 8px;

  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: ${({ theme }) => theme.fonts.size.lg};
  line-height: ${({ theme }) => theme.fonts.lineHeight.lg};
  color: ${({ theme }) => theme.colors.text.tertiary};
`;

// prettier-ignore
export const List = styled(FlatList as new (props: FlatListProps<string>) => FlatList<string>)`
  width: 100%;
`;
