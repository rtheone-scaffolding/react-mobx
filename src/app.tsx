import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { Button, AlternateButton } from './app.style.ts';

@inject('store')
@observer
export default class App extends Component {
  increment() {
    this.props.store.increment();
  }

  decrement() {
    this.props.store.decrement();
  }

  render() {
    return (
      <div>
        <h1>Here's a text element.</h1>
        <Button
          color="steelblue"
          onClick={() => {
            this.increment();
          }}>
          1 + {this.props.store.testValue} =
        </Button>
        <AlternateButton
          onClick={() => {
            this.decrement();
          }}>
          {this.props.store.sum(1)}
        </AlternateButton>
      </div>
    );
  }
}
