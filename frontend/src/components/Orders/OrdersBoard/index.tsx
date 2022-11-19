import * as Sc from './styles';

const order = [
  {
    mesa: 1,
    quantity: 2,
  },
  {
    mesa: 12,
    quantity: 1,
  },
  {
    mesa: 9,
    quantity: 4,
  },
];

interface OrdersBoardProps {
  title: string,
  icon: string,
}

export function OrdersBoard({ title, icon }: OrdersBoardProps) {
  return (
    <Sc.Board>
      <header>
        <span>{icon}</span>
        <span>{title}</span>
        <span>(1)</span>
      </header>

      <Sc.OrdersContainer>
        {order.map(board => (
          <button type="button" key={board.mesa}>
            <strong>Mesa {board.mesa}</strong>
            <span>{board.quantity} itens</span>
          </button>
        ))}
      </Sc.OrdersContainer>
    </Sc.Board>
  );
}
