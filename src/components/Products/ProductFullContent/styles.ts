import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 20px 0 20px;
`;

export const Image = styled.Image`
  width: 218px;
  height: 333px;
`;

export const Name = styled.Text`
  margin: 8px 0;

  font-family: ${({ theme }) => theme.fonts.family.bold};
  font-size: ${({ theme }) => theme.fonts.size.xxl};
  line-height: ${({ theme }) => theme.fonts.lineHeight.xl};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Flag = styled.Image`
  width: 16px;
  height: 16px;
  margin: 0 8px;
`;

export const Specifications = styled.View`
  margin: 6px 0;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Details = styled.Text`
  margin: 0 8px;

  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: ${({ theme }) => theme.fonts.size.md};
  line-height: ${({ theme }) => theme.fonts.lineHeight.md};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Description = styled.View`
  margin: 16px 0 40px;
`;

export const DescriptionTitle = styled.Text`
  margin-bottom: 8px;

  font-family: ${({ theme }) => theme.fonts.family.bold};
  font-size: ${({ theme }) => theme.fonts.size.xxl};
  line-height: ${({ theme }) => theme.fonts.lineHeight.lg};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Comment = styled.Text`
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: ${({ theme }) => theme.fonts.size.lg};
  line-height: ${({ theme }) => theme.fonts.lineHeight.lg};
  color: ${({ theme }) => theme.colors.text.tertiary};
`;

export const AddCartContainer = styled.View`
  position: relative;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 80px;
  width: 410px;

  padding: 8px 20px;

  background-color: ${({ theme }) => theme.colors.background.quarternary};
`;

export const Label = styled.View`
  position: absolute;
  left: 20px;
  top: -8px;

  width: 52px;
  height: 16px;
  border-radius: 2px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.status.chenin};
`;

export const LabelText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.family.normal};
  font-size: ${({ theme }) => theme.fonts.size.xs};
  line-height: ${({ theme }) => theme.fonts.lineHeight.sm};
  color: ${({ theme }) => theme.colors.text.light};
`;

export const Prices = styled.View``;

export const Discount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.family.bold};
  font-size: ${({ theme }) => theme.fonts.size.sm};
  line-height: ${({ theme }) => theme.fonts.lineHeight.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: line-through;
`;

export const PriceMember = styled.Text`
  font-family: ${({ theme }) => theme.fonts.family.bold};
  font-size: ${({ theme }) => theme.fonts.size.xxl};
  line-height: ${({ theme }) => theme.fonts.lineHeight.lg};
  color: ${({ theme }) => theme.colors.text.wine};
`;

export const PriceNonMember = styled.Text`
  font-family: ${({ theme }) => theme.fonts.family.bold};
  font-size: ${({ theme }) => theme.fonts.size.sm};
  line-height: ${({ theme }) => theme.fonts.lineHeight.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-transform: uppercase;
`;

export const Buttom = styled.TouchableOpacity`
  width: 180px;
  height: 48px;
  border-radius: 4px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.status.success};
  color: ${({ theme }) => theme.colors.text.light};
`;

export const ButtomText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: ${({ theme }) => theme.fonts.size.lg};
  line-height: ${({ theme }) => theme.fonts.lineHeight.lg};
  color: ${({ theme }) => theme.colors.text.light};
`;
