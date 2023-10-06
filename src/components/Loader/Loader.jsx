import { InfinitySpin } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled.js';

const Loader = () => {
  return (
    <Wrapper>
      <InfinitySpin visible={true} width="200" color="#895669" />
    </Wrapper>
  );
};
export default Loader;

// import { InfinitySpin } from 'react-loader-spinner';
// import { Wrapper } from './Loader.styled.js';

// const Loader = () => {
//   return (
//     <Wrapper>
//       <InfinitySpin visible={true} width="200" color="#895669" />
//     </Wrapper>
//   );
// };
// export default Loader;
