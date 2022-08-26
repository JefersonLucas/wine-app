import { Container, CartContainer } from "./styles";
import { HeaderProps } from "./types";

import { Logo } from "../Logo";
import { Cart } from "../Cart";

export const Header = ({ isLogo, isBackground, totalItems }: HeaderProps) => {
  return (
    <Container isBackground={isBackground}>
      {isLogo && <Logo />}
      <CartContainer>
        <Cart totalItems={totalItems} />
      </CartContainer>
    </Container>
  );
};
