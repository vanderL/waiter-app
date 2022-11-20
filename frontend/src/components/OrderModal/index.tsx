import * as Sc from './styles';
import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';

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

          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  height="80"
                  width="80"
                />
                <span className="quantity">x{quantity}</span>
                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>
                    {
                      formatCurrency(product.price)
                    }
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Sc.OrderDetails>
      </Sc.ModalBody>
    </Sc.Overlay>
  );
}