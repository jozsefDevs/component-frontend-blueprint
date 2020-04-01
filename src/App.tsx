import React, { ReactElement } from "react";
import { Counter } from "./Counter";
import { Hello } from "./Hello";

export function App(): ReactElement {
  return (
    <div className="App">
      <Hello name="react-webpack-typescript-babel" />
      <Counter />
    </div>
  );
}
