import styled from 'styled-components';

/* Contenedor principal */
export const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 30px 40px;
`;

/* Botón */
export const Button = styled.button`
  background-color: #49657c;
  color: #545453ff;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3a4e5a;
  }
`;

/* Producto */
export const ProductCard = styled.div`
  min-width: 220px;
  background-color: #f7f4f1;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.15);
  }

  img {
    width: 120px;
    height: 160px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 1rem;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  }

  strong {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
    color: #375a7f;
    text-align: center;
  }

  p {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 1rem;
    text-align: center;
  }
`;

