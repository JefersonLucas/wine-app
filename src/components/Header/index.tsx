import { Container, CartContainer } from "./styles";
import { HeaderProps } from "./types";

import { Logo } from "../Logo";
import { Cart } from "../Cart";

export const Header = ({
  isLogo,
  isBackground,
  totalItems,
  ...rest
}: HeaderProps) => {
  return (
    <Container isBackground={isBackground} {...rest}>
      {isLogo && <Logo />}
      <CartContainer>
        <Cart totalItems={totalItems} />
      </CartContainer>
    </Container>
  );
};
