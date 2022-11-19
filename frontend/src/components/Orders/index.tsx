import { OrdersBoard } from './OrdersBoard';
import * as Sc from './styles';

export function Orders() {
  return (
    <Sc.Container>
      <OrdersBoard
        title={'Fila de espera'}
        icon={'🦽'}
      />
      <OrdersBoard
        title={'Em preparação'}
        icon={'🚀'}
      />
      <OrdersBoard
        title={'Pronto!'}
        icon={'🚕'}
      />
    </Sc.Container>
  );
}
