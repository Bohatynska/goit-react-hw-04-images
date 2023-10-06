import { Component } from 'react';

import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  state = { query: '' };

  onChange = e => {
    const value = e.target.value.trim().toLowerCase();
    this.setState({ query: value });
  };

  reset = () => {
    this.setState({
      query: '',
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.query) {
      this.props.toast(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }

    this.props.onSubmit(this.state.query);
    this.reset();
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChange}
            value={this.state.query}
          />
          <SearchFormButton type="submit"></SearchFormButton>
        </SearchForm>
      </Header>
    );
  }
}
