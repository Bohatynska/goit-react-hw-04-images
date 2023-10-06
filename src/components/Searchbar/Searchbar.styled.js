import styled from '@emotion/styled';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 55px;
  padding: 20px;
  color: #fff;
  background-color: rosybrown;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: white;
  border-radius: 4px;
`;

export const SearchFormButton = styled.button`
  cursor: pointer;
  display: inline-block;
  width: auto;
  height: 50px;
  border: 0;
  background-color: white;
  outline: none;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  font-size: 25px;
  border: none;
  outline: none;
  color: #010101;
`;
