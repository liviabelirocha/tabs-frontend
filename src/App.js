import React from "react";

import Routes from "./routes";

import GlobalStyle from "./global";

function App() {
  return (
    <div>
      <React.Fragment>
        <Routes />
        <GlobalStyle />
      </React.Fragment>
    </div>
  );
}

export default App;
