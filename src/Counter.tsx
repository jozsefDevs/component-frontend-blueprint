import React, { Component, ReactElement } from "react";

export interface CounterState {
  value: number;
}

export class Counter extends Component<{}, CounterState> {
  readonly state: CounterState = { value: 0 };

  private handleIncrement = (): void =>
    this.setState((prevState) => ({ value: prevState.value + 1 }));

  private handleDecrement = (): void =>
    this.setState((prevState) => ({ value: prevState.value - 1 }));

  public render(): ReactElement {
    return (
      <>
        <div>{this.state.value}</div>
        <button type="button" onClick={this.handleIncrement}>
          +
        </button>
        <button type="button" onClick={this.handleDecrement}>
          -
        </button>
      </>
    );
  }
}
