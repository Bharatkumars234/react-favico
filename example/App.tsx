import * as React from 'react';
import Favico from '../src/Favico';
import {Type} from '../src/types';
import * as css from './App.css';
import Button from './Button';

export default class App extends React.Component<
  {},
  {
    counter: number;
  }
> {
  state = {
    counter: 0,
  };

  render() {
    return (
      <div className={css.container}>
        <Favico counter={this.state.counter} type={Type.Rectangle} />
        <h1 className={css.title}>react-favico</h1>
        <h3 className={css.title}>
          {`Current counter is: ${this.state.counter}`}
        </h3>
        <div className={css.wrapper}>
          <div className={css.item}>
            <Button onClick={this.handleIncrease}>+1</Button>
          </div>
          <div className={css.item}>
            <Button onClick={this.handleDecrease}>-1</Button>
          </div>
          <div className={css.item}>
            <Button onClick={this.handleReset}>Reset</Button>
          </div>
        </div>
      </div>
    );
  }

  private handleIncrease = () => {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };

  private handleDecrease = () => {
    if (this.state.counter === 0) return;
    this.setState((state) => ({
      counter: state.counter - 1,
    }));
  };

  private handleReset = () => {
    this.setState({counter: 0});
  };
}
