import React, { Component } from 'react';
import Counter from './counter'

export default class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, counters } = this.props;
    return (
    <div>
      <button onClick={onReset}>Reset</button>
      {counters.map(counter => 
        <Counter 
          key={counter.id} 
          onDelete={onDelete} 
          onIncrement={onIncrement}
          counter={counter}
        />)}
    </div>
    );
  }
}