import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import * as Sc from './styles';

const orders: Order[] = [
  {
    '_id': '637870ecb0f82409ce0a95ba',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': 'b30a94e104e34874cc27-cerveja.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '637870ecb0f82409ce0a95bb'
      },
      {
        'product': {
          'name': 'Refri de bolo',
          'imagePath': '01896470f5478a61abb2-8ba8cb4e54811f120b6207b8914472be.jpg',
          'price': 40,
        },
        'quantity': 2,
        '_id': '637870ecb0f82409ce0a95bc'
      },
      {
        'product': {
          'name': 'Refri de bolo',
          'imagePath': '01896470f5478a61abb2-8ba8cb4e54811f120b6207b8914472be.jpg',
          'price': 40,
        },
        'quantity': 2,
        '_id': '637870ecb0f82409ce0a95bc'
      }
    ],
  },
  {
    '_id': '637870ecb0f82409ce0a95ba',
    'table': '33',
    'status': 'IN_PRODUCTION',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': 'b30a94e104e34874cc27-cerveja.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '637870ecb0f82409ce0a95bb'
      },
    ],
  },
  {
    '_id': '637870ecb0f82409ce0a95ba',
    'table': '12',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': 'b30a94e104e34874cc27-cerveja.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '637870ecb0f82409ce0a95bb'
      },
      {
        'product': {
          'name': 'Refri de bolo',
          'imagePath': '01896470f5478a61abb2-8ba8cb4e54811f120b6207b8914472be.jpg',
          'price': 40,
        },
        'quantity': 2,
        '_id': '637870ecb0f82409ce0a95bc'
      }
    ],
  }
];

export function Orders() {
  return (
    <Sc.Container>
      <OrdersBoard
        title={'Fila de espera'}
        icon={'🦽'}
        orders={orders.filter(item => item.status === 'WAITING')}
      />
      <OrdersBoard
        title={'Em preparação'}
        icon={'🚀'}
        orders={orders.filter(item => item.status === 'IN_PRODUCTION')}

      />
      <OrdersBoard
        title={'Pronto!'}
        icon={'🚕'}
        orders={orders.filter(item => item.status === 'DONE')}

      />
    </Sc.Container>
  );
}
