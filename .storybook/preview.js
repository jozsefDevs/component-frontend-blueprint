import { addParameters } from "@storybook/react";

addParameters({
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: true,
  },
})

addParameters({
  backgrounds: {
    default: "White",
    values: [
      {
        name: "Grey",
        value: "#f9f9f9",
      },
      {
        name: "White",
        value: "#ffffff",
        default: true,
      },
    ],
  },
});
