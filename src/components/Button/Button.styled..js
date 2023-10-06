import styled from '@emotion/styled';

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

export const BtnLoadMore = styled.button`
  display: inline-block;
  font-size: 20px;
  line-height: 25px;
  font-weight: 600;
  min-width: 200px;
  padding: 10px 16px;
  border-radius: 4px;
  background-color: rosybrown;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0) 0.2s;
  text-align: center;
  color: #574a4f;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;

  &:hover,
  &:focus {
    background-color: #b28fad;
    color: #430a3b;
  }
`;
