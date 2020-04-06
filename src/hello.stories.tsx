import { storiesOf } from "@storybook/react";
import { Hello } from "./Hello";
import { text } from "@storybook/addon-knobs";
import * as React from "react";

storiesOf("HelloComponent", module).add("with text", () => (
  <Hello name={text("Hello Text", "Hello World! TypeScript + Storybook")} />
));
