import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import { ModalCard, Backdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    const { img } = this.props;
    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalCard>
          <img src={img} alt="" />
        </ModalCard>
      </Backdrop>,
      modalRoot
    );
  }
}
