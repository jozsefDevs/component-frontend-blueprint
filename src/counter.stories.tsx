import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Counter } from "./Counter";

storiesOf("CounterComponent", module).add("with text", () => <Counter />);
