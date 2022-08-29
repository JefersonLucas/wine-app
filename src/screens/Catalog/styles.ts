import styled from "styled-components/native";
import { FlatList, FlatListProps, TextInputProps } from "react-native";

import { ProductProps } from "../../components/Products/ProductContent/types";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const Content = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  z-index: -1;
`;

export const FilterContainer = styled.View`
  padding: 40px 20px 0px 20px;
  width: 100%;
`;

export const FoundProducts = styled.Text`
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: ${({ theme }) => theme.fonts.size.lg};
  line-height: ${({ theme }) => theme.fonts.lineHeight.lg};
  color: ${({ theme }) => theme.colors.text.tertiary};
  margin: 24px 0 12px;
`;

export const InputFilter = styled.TextInput.attrs<TextInputProps>(
  ({ theme }) => ({
    selectionColor: theme.colors.text.wine,
  }),
)`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 4px;
  padding: 8px 14px;

  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: ${({ theme }) => theme.fonts.size.lg};
  line-height: ${({ theme }) => theme.fonts.lineHeight.lg};
  color: ${({ theme }) => theme.colors.text.tertiary};
`;

export const ListContainer = styled.View`
  align-items: center;
  align-content: center;
  justify-content: center;
  flex: 1;
  width: 100%;
`;

// prettier-ignore
export const List = styled(FlatList as new (props: FlatListProps<ProductProps>) => FlatList<ProductProps>)`
  width: 100%;
  padding: 20px;
`;

export const LoadContainer = styled.View`
  flex: 1;
  align-items: center;
  align-self: center;
  justify-content: center;
`;
