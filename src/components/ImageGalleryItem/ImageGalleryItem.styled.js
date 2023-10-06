import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
`;

export const GalleryImg = styled.img`
  width: 100%;
  height: 280px;
  transition: transform 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
