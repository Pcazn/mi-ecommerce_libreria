import styled from 'styled-components';

export const CartContainer = styled.div`
  margin-top: 40px;
  background-color: #f7f3ec;
  padding: 25px 30px;
  border-radius: 8px;
  box-shadow: inset 0 0 8px rgba(121, 101, 74, 0.2);
`;

export const CartList = styled.ul`
  list-style: none;
`;

export const CartItem = styled.li`
  background-color: #f7f3ec;
  border-left: 5px solid #79654a;
  padding: 15px 20px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e9e3d7;
  }
`;

export const Total = styled.h3`
  margin-top: 20px;
  text-align: right;
`;
