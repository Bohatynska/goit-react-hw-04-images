import axios from 'axios';
const API_KEY = '31283417-a6085b694485a4758f88c734b';

const fetchImages = async (page, query) => {
  const response = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
export default fetchImages;
