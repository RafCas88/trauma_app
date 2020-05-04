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
          subtitle: 'dfds'
        },
        {
          id: 2,
          value: 'BLUNT',
          subtitle: 'mechanism of injury'
        },
        {
          id: 2,
          value: 'BURN',
          subtitle: 'dfdds'
        },
        {
          id: 2,
          value: 'FROST',
          subtitle: 'dfdsdass'
        },
        {
          id: 2,
          value: 'GUN SHOT',
          subtitle: 'dfdsfdfds'
        },
        {
          id: 2,
          value: 'LACERATION',
          subtitle: 'dfdssasdas'
        },
        {
          id: 2,
          value: 'LTC',
          subtitle: 'dfdsdasdas'
        },
        {
          id: 2,
          value: 'STAB',
          subtitle: 'dfdsyrtyrty'
        },
      ]}
      />
      </div>
    );
  }
}

export default App;
