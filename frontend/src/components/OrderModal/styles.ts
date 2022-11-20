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
`;


