import { BtnWrap, BtnLoadMore } from './Button.styled.';

const Button = ({ onLoadMore }) => {
  return (
    <BtnWrap>
      <BtnLoadMore type="button" onClick={onLoadMore}>
        Load more
      </BtnLoadMore>
    </BtnWrap>
  );
};
export default Button;
