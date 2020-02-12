import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  // встановлюемо слухача на момент появи нашого компонента в домі
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  // обов'язково знімаємо слухача в момент виходу компонента з дома
  componentWillUnmount() {
    // console.log('componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  // створюємо метод який буде реагувати на натиснення клавіши клавіотури та визиваємо в нього функціонал для закриття модального вікні
  handleKeyPress = e => {
    // console.log(e);
    // console.log(e.code);
    // console.log(e.keyCode);

    if (e.keyCode !== 27) {
      return;
    }

    // if (e.code !== 'Escape') {
    //   return;
    // }

    this.props.onClose();
  };

  // даний метод дозволяє закривати модалку по натисненні курсора за межами модального вікна, та навпаки не закривати його при безпосередньому натиснені в межах модального вікна
  handleBackdropClick = e => {
    // console.log(e.target);
    // console.log(e.currentTarget);
    if (e.target !== e.currentTarget) {
      return;
    }

    this.props.onClose();
  };

  render() {
    const { children } = this.props;

    return (
      <div className={styles.backdrop} onClick={this.handleBackdropClick} role="presentation">
        <div className={styles.modal}>{children}</div>
      </div>
    );
  }
}
