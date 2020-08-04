import React from "react";
import AppWrapper from "./AppStyled.js";
import { Provider } from "react-redux";
import store from "./store.js";
import SearchUsers from "./components/SearchUsers.js";

function App() {
  return (
    <Provider store={store}>
      <AppWrapper>
        <h2>Github Explorer</h2>
        <SearchUsers />
      </AppWrapper>
    </Provider>
  );
}

export default App;
