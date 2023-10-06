import React from 'react';
import { Component } from 'react';
import { Wrap, ErrorMessage } from './Appstyled';
import Searchbar from 'components/Searchbar/Searchbar';
import fetchImages from 'components/API/Api';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader.jsx';
import Button from 'components/Button/Button.jsx';

export default class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    errorMessage: null,
    isLoading: false,
    total: 0,
  };

  createGallery = async (page, query) => {
    try {
      this.setState({ isLoading: true });
      const images = await fetchImages(page, query);

      if (!images.totalHits) {
        return toast.error('Sorry, no results for your search. Try again! 😭');
      } else {
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
          total: images.totalHits,
        }));
      }
    } catch {
      this.setState({
        errorMessage: 'Oops, something is wrong 😭 please try again',
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  getQuery = query => {
    // if (query === this.state.query) {
    //   toast.info('You already see pictures for this query 😊');
    //   return;
    // }

    this.setState({
      query: query,
      page: 1,
      total: 0,
      images: [],
    });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.createGallery(this.state.page, this.state.query);
    }
  }

  render() {
    const { total, isLoading, images, errorMessage } = this.state;
    return (
      <Wrap>
        <Searchbar onSubmit={this.getQuery} toast={toast.warning} />
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
        {total > images.length && <Button onLoadMore={this.loadMore} />}
      </Wrap>
    );
  }
}
