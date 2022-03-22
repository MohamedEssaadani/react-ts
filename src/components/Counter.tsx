import { Component } from "react";

/**
 * * 1: Define Props & State Types
 */

// * Props Type
type CounterProps = {
  message: string;
};

// * State Type
type CounterState = {
  count: number;
};

/**
 * * Connect Types to our class component => Component<>
 */
export default class Counter extends Component<CounterProps, CounterState> {
  /**
   * * component state
   */
  state = {
    count: 0,
  };

  /**
   * * Incement
   */

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message}: {this.state.count}
      </div>
    );
  }
}
