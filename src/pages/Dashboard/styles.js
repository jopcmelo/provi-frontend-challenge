import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
`;

export const LoadingLine = styled.div`
  width: 50%;
  height: 16px;
  align-self: center;
  border-radius: 8px;
`;
