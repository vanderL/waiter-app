import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  width: 480px;
  padding: 32px;
  border-radius: 8px;


  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      border: 0;
      line-height: 0;
      background: transparent;
    }

    strong {
      font-size: 24px;
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }
    div {
      display: flex;
      gap: 8px;
      margin-top: 8px;
      align-items: center;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }

  .order-items{
    margin-top: 16px;

    .item {
      display: flex;

      & + .item {
        margin-top: 16px;
      }

      img {
        border: 6px;
      }

      .quantity {
        font-size: 14px;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details {
        margin-left: 4px;
      }

      strong {
        display: block;
        margin-bottom: 4px;
      }

      span {
        font-size: 14px;
        color: #666;
      }
    }
  }

  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    span {
      font-weight: 500px;
      font-size: 14px;
      opacity: 0.8;
    }
  }
`;


