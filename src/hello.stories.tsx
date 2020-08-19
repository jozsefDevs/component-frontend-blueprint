import { Hello } from "./Hello";
import * as React from "react";

export default {
  title: "Hello Component",
  component: Hello,
};

export const WithText = (
  args: JSX.IntrinsicAttributes &
    import("./Hello").HelloProps & { children?: React.ReactNode }
) => <Hello {...args} />;

WithText.storyName = "with text";

WithText.args = {
  name: "Hello World! TypeScript + Storybook",
};
