import React, { Component } from 'react';
import './App.css';
import Counters from './componenets/counters';

export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0  },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };


  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    })
    this.setState = ({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter)
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
  }

  handleTotalCounter = () => this.state.counters.filter(c => c.value > 0).length;
  
  render() {
    return (
      <React.Fragment>
        <main>
        <h1>Total Counters:{this.handleTotalCounter()}</h1>
        <Counters 
        counters={this.state.counters}
        onReset={this.handleReset}
        onDelete={this.handleDelete}
        onIncrement={this.handleIncrement}
        />
      </main>
      </React.Fragment>
    )
  }
}