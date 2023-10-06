import styled from '@emotion/styled';

export const Gallery = styled.ul`
  margin-right: auto;
  margin-left: auto;
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 0;
  list-style: none;
`;
