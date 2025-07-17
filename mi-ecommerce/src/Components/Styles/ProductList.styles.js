import styled from 'styled-components';

export const ProductListContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  scrollbar-width: thin;
  scrollbar-color: #375a7f #e0e0e0;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #e0e0e0;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #375a7f;
    border-radius: 4px;
  }
`;
