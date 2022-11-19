import { Order } from '../../../types/Order';
import * as Sc from './styles';


interface OrdersBoardProps {
  title: string;
  icon: string;
  orders: Array<Order>;
}

export function OrdersBoard({ title, icon, orders }: OrdersBoardProps) {
  return (
    <Sc.Board>
      <header>
        <span>{icon}</span>
        <span>{title}</span>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 ? (
        <Sc.OrdersContainer>
          {orders.map(board => (
            <button type="button" key={board._id}>
              <strong>Mesa {board.table}</strong>
              <span>{board.products.length} itens</span>
            </button>
          ))}
        </Sc.OrdersContainer>
      ) : null}
    </Sc.Board>
  );
}
