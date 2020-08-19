import { Counter } from "./Counter";
import * as React from "react";

export default {
  title: "Counter Component",
  component: Counter,
};

export const Default = () => <Counter />;

Default.storyName = "default";
