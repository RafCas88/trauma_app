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
          subtitle: 'mechanism of injury'
        },
        {
          id: 2,
          value: 'BLUNT',
          subtitle: 'mechanism of injury'
        },
        {
          id: 3,
          value: 'BURN',
          subtitle: 'mechanism of injury'
        },
        {
          id: 4,
          value: 'FROST',
          subtitle: 'mechanism of injury'
        },
        {
          id: 5,
          value: 'GUN SHOT',
          subtitle: 'mechanism of injury'
        },
        {
          id: 6,
          value: 'LACERATION',
          subtitle: 'mechanism of injury'
        },
        {
          id: 7,
          value: 'LTC',
          subtitle: 'mechanism of injury'
        },
        {
          id: 8,
          value: 'STAB',
          subtitle: 'mechanism of injury'
        },
      ]}
      />
      </div>
    );
  }
}

export default App;
