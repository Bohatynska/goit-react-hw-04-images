import { useState, useEffect } from 'react';
import { Wrap, ErrorMessage } from './Appstyled';
import Searchbar from 'components/Searchbar/Searchbar';
import fetchImages from 'components/API/Api';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader.jsx';
import Button from 'components/Button/Button.jsx';

export default function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const createGallery = async (page, query) => {
    try {
      setIsLoading(true);
      const images = await fetchImages(page, query);

      if (!images.totalHits) {
        return toast.error('Sorry, no results for your search. Try again! 😭');
      } else {
        setTotal(images.totalHits);
        setImages(prevState => [...prevState, ...images.hits]);
      }
    } catch {
      setErrorMessage('Oops, something is wrong, please try again');
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (!query) {
      return;
    }

    createGallery(page, query);
  }, [page, query]);

  function getQuery(newQuery) {
    setQuery(newQuery);
    setPage(1);
    setTotal(0);
    setImages([]);
  }
  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Wrap>
      <Searchbar onSubmit={getQuery} toast={toast.warning} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {total > images.length && <Button onLoadMore={loadMore} />}
    </Wrap>
  );
}
