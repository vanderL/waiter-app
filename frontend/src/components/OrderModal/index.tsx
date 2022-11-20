import * as Sc from './styles';
import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
}

export function OrderModal({ visible, order }: OrderModalProps) {
  if (!visible || !order) {
    return null;
  }

  return (
    <Sc.Overlay>
      <Sc.ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type='button'>
            <img src={closeIcon} alt="close" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '🕗'}
              {order.status === 'IN_PRODUCTION' && '👩‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em preparação'}
              {order.status === 'DONE' && 'Pronto'}
            </strong>
          </div>
        </div>

        <Sc.OrderDetails>
          <strong>Itens</strong>

          {order.products.map(({ _id, product, quantity }) => (
            <div className="item" key={_id}>
              <img src={`http://localhost:3001/uploads/${product.imagePath}`} alt={product.name} />
            </div>
          ))}
        </Sc.OrderDetails>
      </Sc.ModalBody>
    </Sc.Overlay>
  );
}
