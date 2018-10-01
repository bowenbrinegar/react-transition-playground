import React, { Component } from 'react';
import './App.css';

import GridCard from './components/grid-card';
import Modal from './components/modal';

import { TransitionGroup } from "react-transition-group";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _show_grid: true,
      _modal_classes: ['modal-container'],
      _cards: null
    }

    this.toggleGrid = this.toggleGrid.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.closeAll = this.closeAll.bind(this);
    this.populateGrid = this.populateGrid.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  toggleGrid() {
    this.closeAll();
    this.populateGrid();
    this.setState({_show_grid: true});
  }

  toggleModal() {
    if (this.state._modal_classes[1] === 'open') {
      return;
    }

    this.closeAll();
    this.state._modal_classes.push('open');
  }

  closeAll() {
    this.setState({_show_grid: false});
    this.state._modal_classes.splice(1,1);
  }

  populateGrid() {
    let _cards = [];
    for (let i = 0; i < 9; i++) {
        _cards.push({key: i})
    }
    this.setState({_cards});
  }

  removeItem(i) {
    let newItems = this.state._cards.slice();
		newItems.splice(i, 1);
		this.setState({
			_cards: newItems
    });
  }

  componentWillMount() {
    this.populateGrid();
  }

  render() {
    return (
      <div>
        <div id='button-container'>
          <div id='float-center'>
            <button className='action-item' onClick={this.toggleGrid}>Toggle Grid</button>
            <button className='action-item' onClick={this.toggleModal}>Open Modal</button>
          </div>
        </div>

        <div id='grid-container'>
          <div id='card-grid'>
            <TransitionGroup>
              {this.state._cards.map((o, i) => <GridCard key={o.key} clickFunc={() => this.removeItem(i)}/>)}
            </TransitionGroup>
          </div>
        </div>

        <div id='modal-container'>
          <Modal classes={this.state._modal_classes.join(' ')} />
        </div>
      </div>
    );
  }
}

export default App;