import React from "react";
import AppWrapper, { GlobalStyles } from "./AppStyled.js";
import { Provider } from "react-redux";
import store from "./store.js";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <AppWrapper>
          <Main />
        </AppWrapper>
      </Provider>
    </>
  );
}

export default App;
