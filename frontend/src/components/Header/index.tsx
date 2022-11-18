import * as Sc from './styles';
import logo from '../../assets/images/logo.svg';

export function Header() {
  return (
    <Sc.Container>
      <Sc.Wrapper>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>

        <Sc.Logo src={logo} alt="" />
      </Sc.Wrapper>
    </Sc.Container>
  );
}
