import React, { Component } from 'react';
import './App.css';
import Display from './Display';

class App extends Component {
  render() {
    return (
      <div className='container'>
      <Display
      injuries ={[
        {
          id: 1,
          value: 'ABRASION',
        },
        {
          id: 2,
          value: 'BLUNT',
        },
        {
          id: 3,
          value: 'BURN',
        },
        {
          id: 4,
          value: 'FROST',
        },
        {
          id: 5,
          value: 'GUN SHOT',
        },
        {
          id: 6,
          value: 'LACERATION',
        },
        {
          id: 7,
          value: 'LTC',
        },
        {
          id: 8,
          value: 'STAB',
        },
      ]}
      multiSelect
      subtitle="Mechanism of Injury"
      />
      </div>
    );
  }
}

export default App;
