import React from "react";

const Root = () => {
  return (
    <div>
      You can edit your package in:
      <pre>packages/wc-sevilla-theme/src/index.js</pre>
    </div>
  );
};

export default {
  name: "wc-sevilla-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};
