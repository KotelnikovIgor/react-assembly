/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import Modal from './Modal/Modal'; // забераемо неоюхідний компонент
import Counter from './Counter/Counter';
import style from './App.module.css';

class App extends Component {
  // створюємо необхідний об'єкт для контролю стану модального вікна
  state = {
    counter: 0,
    isModalOpen: false,
  };

  // створюємо методи які будуть відповідати за наший функціонал в даному випадку це відкриття та закриття модального вікна
  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  onIncrement = () => {
    this.setState(prevState => ({
      counter: (prevState.counter += 1),
    }));
  };

  onDecrement = () => {
    this.setState(prevState => ({
      counter: (prevState.counter -= 1),
    }));
  };

  render() {
    const { isModalOpen, counter } = this.state;
    return (
      <div className={style.modal_btn}>
        <Counter counter={counter} onDecrement={this.onDecrement} onIncrement={this.onIncrement} />
        <button className={style.btn} type="button" onClick={this.openModal}>
          Open Modal
        </button>
        {isModalOpen && (
          <Modal onClose={this.closeModal}>
            <h1>Modal Content</h1>
            <p>
              In user interface design for computer applications, a modal window is a graphical //
              eslint-disable-next-line react/no-unescaped-entities control element subordinate to an
              application's main window. It creates a mode that disables the main window but keeps
              it visible, with the modal window as a child window in front of it. Users must
              interact with the modal window before they can return to the parent application. This
              avoids interrupting the workflow on the main window. Modal windows are sometimes
              called heavy windows or modal dialogs because they often display a dialog box.
            </p>
            <button type="button" onClick={this.closeModal}>
              Close Modal
            </button>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
