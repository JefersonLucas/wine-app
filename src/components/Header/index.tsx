import { Container, CartContainer, BackButtom } from "./styles";
import { HeaderProps } from "./types";

import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Logo } from "../Logo";
import { Cart } from "../Cart";
import { useTheme } from "styled-components";

export const Header = ({
  isLogo,
  isBackground,
  totalItems,
  ...rest
}: HeaderProps) => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <Container isBackground={isBackground} {...rest}>
      {isLogo && <Logo />}
      {!isLogo && (
        <BackButtom onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="chevron-left"
            size={32}
            color={theme.colors.text.primary}
          />
        </BackButtom>
      )}

      <CartContainer>
        <Cart totalItems={totalItems} />
      </CartContainer>
    </Container>
  );
};
