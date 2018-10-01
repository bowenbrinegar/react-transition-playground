import React, { Component } from 'react';
import './App.css';

import GridCard from './components/grid-card';
import Modal from './components/modal'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _show_grid: true,
      _modal_classes: ['modal-container']
    }

    this.toggleGrid = this.toggleGrid.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.closeAll = this.closeAll.bind(this);
    this.populateGrid = this.populateGrid.bind(this);
  }

  toggleGrid() {
    this.closeAll();
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
            {this.state._show_grid ? (
              <div id='card-grid'>
                  {this.state._cards.map(o => <GridCard key={o.key}/>)}
              </div>
            ) : null}
        </div>

        <div id='modal-container'>
          <Modal classes={this.state._modal_classes.join(' ')} />
        </div>
      </div>
    );
  }
}

export default App;