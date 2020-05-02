import React, { Component } from 'react';
import './App.css';
import Display from './Display';

const items = [
  {
    id: 1,
    value: 'ABRASION',
  },
  {
    id: 2,
    value: 'BLUNT',
  },
  {
    id: 2,
    value: 'BURN',
  },
  {
    id: 2,
    value: 'FROST',
  },
  {
    id: 2,
    value: 'GUN SHOT',
  },
  {
    id: 2,
    value: 'LACERATION',
  },
  {
    id: 2,
    value: 'LTC',
  },
  {
    id: 2,
    value: 'STAB',
  },
];

class App extends Component {
  render() {
    return (
      <div className='container'>
      <Display items={items} />
      </div>
    );
  }
}

export default App;
