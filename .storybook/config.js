import {addParameters, configure} from '@storybook/react';
import {withKnobs} from "@storybook/addon-knobs";
import {withA11y} from "@storybook/addon-a11y";
import {addDecorator} from "@storybook/react";
import {withInfo} from '@storybook/addon-info';


// configure up addons
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withInfo);

addParameters({
    backgrounds: [
      {
        name: "Grey",
        value: "#f9f9f9"
      },
      {
        name: "White",
        value: "#ffffff",
        default: true
      }
    ]
  });

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
