import styled from "styled-components/native";
import { ActivityIndicatorProps } from "react-native";

export const Container = styled.View``;

export const Loading = styled.ActivityIndicator.attrs<ActivityIndicatorProps>(
  ({ theme }) => ({
    size: 70,
    animating: true,
    color: theme.colors.text.wine,
  }),
)`
  padding: 20px;
  flex-direction: row;
  justify-content: center;
`;
