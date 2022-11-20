import { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import * as Sc from './styles';

interface OrdersBoardProps {
  title: string;
  icon: string;
  orders: Array<Order>;
}

export function OrdersBoard({ title, icon, orders }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  return (
    <Sc.Board>
      <header>
        <span>{icon}</span>
        <span>{title}</span>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 ? (
        <Sc.OrdersContainer>
          {orders.map(order => (
            <button type="button" key={order._id} onClick={() => handleOpenModal(order)}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </Sc.OrdersContainer>
      ) : null}

      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
      />
    </Sc.Board>
  );
}
