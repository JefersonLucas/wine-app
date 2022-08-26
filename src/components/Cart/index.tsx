import { Container, Oval, Count } from "./styles";
import { CartProps } from "./types";

export const Cart = ({ totalItems }: CartProps) => {
  const renderTotalItems = (items: number): number | string => {
    return items > 9 ? "9+" : items;
  };

  return (
    <Container>
      <Oval>
        <Count>{renderTotalItems(totalItems)}</Count>
      </Oval>
    </Container>
  );
};
