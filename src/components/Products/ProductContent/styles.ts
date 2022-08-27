import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  margin: 0px auto 40px auto;
`;

export const Content = styled.View`
  width: 156px;
  height: 348px;

  padding: 15px 15px 0 15px;
  margin: 10px 0;

  border-radius: 4px;
  background: ${({ theme }) => theme.colors.background.quarternary};

  position: relative;
`;

export const Image = styled.Image`
  width: 124px;
  height: 182px;
`;

export const Stamp = styled.Image`
  width: 33px;
  height: 33px;

  position: absolute;
  top: 50%;
  left: 5%;
`;

export const Name = styled.Text`
  margin: 8px 0;
  width: 90%;

  font-family: ${({ theme }) => theme.fonts.family.bold};
  font-size: ${({ theme }) => theme.fonts.size.md};
  line-height: ${({ theme }) => theme.fonts.lineHeight.md};
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
`;

export const Prices = styled.View`
  width: 90%;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.View`
  width: 52px;
  height: 16px;
  border-radius: 2px;

  align-items: center;
  justify-content: center;

  margin: 2px;

  background-color: ${({ theme }) => theme.colors.status.info};
`;

export const LabelText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.family.normal};
  font-size: ${({ theme }) => theme.fonts.size.xs};
  line-height: ${({ theme }) => theme.fonts.lineHeight.sm};
  color: ${({ theme }) => theme.colors.text.light};
`;

export const Discount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.family.normal};
  font-size: ${({ theme }) => theme.fonts.size.xs};
  line-height: ${({ theme }) => theme.fonts.lineHeight.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: line-through;
  margin: 2px;
`;

export const PriceMember = styled.Text`
  font-family: ${({ theme }) => theme.fonts.family.bold};
  font-size: ${({ theme }) => theme.fonts.size.md};
  line-height: ${({ theme }) => theme.fonts.lineHeight.xl};
  color: ${({ theme }) => theme.colors.text.wine};
`;

export const PriceNonMember = styled.Text`
  font-family: ${({ theme }) => theme.fonts.family.normal};
  font-size: ${({ theme }) => theme.fonts.size.xs};
  line-height: ${({ theme }) => theme.fonts.lineHeight.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-transform: uppercase;
  text-align: center;
`;

export const SimpleText = styled.Text`
  width: 32px;
  font-family: ${({ theme }) => theme.fonts.family.normal};
  font-size: ${({ theme }) => theme.fonts.size.xs};
  line-height: ${({ theme }) => theme.fonts.lineHeight.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-transform: uppercase;
  text-align: center;
`;

export const Buttom = styled.TouchableOpacity`
  width: 156px;
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
