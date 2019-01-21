import * as React from 'react';
import Favico from '../src/Favico';
import {Animation, Position, Type} from '../src/types';
import * as css from './App.css';
import Button from './Button';

export default class App extends React.Component<
  {},
  {
    animation: Animation;
    counter: number;
    position: Position;
    type: Type;
  }
> {
  state = {
    animation: Animation.None,
    counter: 0,
    position: Position.Down,
    type: Type.Circle,
  };

  render() {
    return (
      <div className={css.container}>
        <Favico {...this.state} />
        <h1 className={css.title}>react-favico</h1>
        <p className={css.title}>{`Current counter: ${this.state.counter}`}</p>
        <p className={css.title}>{`Current icon: ${this.state.type}`}</p>
        <p className={css.title}>
          {`Current animation: ${this.state.animation}`}
        </p>
        <div className={css.wrapper}>
          <div className={css.item}>
            <Button onClick={this.handleIncrease}>+1</Button>
          </div>
          <div className={css.item}>
            <Button onClick={this.handleDecrease}>-1</Button>
          </div>
          <div className={css.item}>
            <Button onClick={this.handleReset}>Reset Counter</Button>
          </div>
          <div className={css.item}>
            <Button onClick={this.handleChangeIcon}>Change icon</Button>
          </div>
          <div className={css.item}>
            <Button onClick={this.handleChangeAnimation}>
              Change animation
            </Button>
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

  private handleChangeIcon = () => {
    this.setState((state) => ({
      type: state.type === Type.Rectangle ? Type.Circle : Type.Rectangle,
    }));
  };

  private handleChangeAnimation = () => {
    // As a sulution for non polifilled 'Object.values'
    const values = Object.keys(Animation).map((key) => Animation[key]);
    this.setState({
      animation: values[Math.floor(Math.random() * values.length)],
    });
  };
}
