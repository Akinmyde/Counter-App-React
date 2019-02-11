import React, { Component } from 'react';

export default class counter extends Component {
  render() {
    return (
      <div className="container">
        <span className={this.getBadgeClasses()}>{this.props.counter.value}</span>
        <button className="secondary" onClick={() => { this.props.onIncrement(this.props.counter)  }}>Increment</button>
        <button className="danger" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }
}