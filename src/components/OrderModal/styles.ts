import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  left: 0%;
  top: 0%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4,5px);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  width: 480px;
  border-radius: 0.5rem;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.5rem;
    }

    button {
      line-height: 0;
      border: 0;
      background: transparent;
    }
  }
  .status-container {
      margin-top: 32px;
      small {
        font-size: 14px;
        opacity: 0.8;
      }
      div {
        margin-top: 8px;
        display: flex;
        align-items: center;
        gap: 9px;
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
