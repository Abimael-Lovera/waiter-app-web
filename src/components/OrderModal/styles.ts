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

  .order-items {
    margin-top: 16px;

    .item {
      display: flex;

      & + .item {
        margin-top: 1rem;
      }

      img {
        border-radius: 6px;
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
        strong {
          display: block;
          margin-bottom: 4px;
        }

        > span {
          font-size: 14px;
          color: #666;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    span {
      font-weight: 500;
      font-size: 14px;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  gap: 16px;

  .primary {
    background: #333333;
    border-radius: 48px;
    border: 0;
    color: #fff;
    font-size: 1rem;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-weight: 600;
  }

  .secondary {
    padding: 14px 24px;
    color: #D73035;
    font-weight: bold;
    border: 0;
    background: transparent;
  }
`;
