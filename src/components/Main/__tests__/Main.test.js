import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { searchUsers } from "../../../redux/actions/user/usersActions";
import Main from "../Main";

const middlewares = thunk;

const mockStore = configureStore([middlewares]);
let initialState = {
  loading: false,
  users: null,
  error: "",
};

describe("My Connected React-Redux Component", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      usersReducer: initialState,
    });

    component = render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
  });

  it("It should render properly", () => {
    expect(component).toMatchSnapshot();
  });

  it("It should dispatch SEARCH_USERS_REQUEST on first call", async () => {
    store.dispatch(searchUsers("username"));

    const actions = store.getActions();
    const expectedPayload = { type: "SEARCH_USERS_REQUEST" };
    expect(actions).toEqual([expectedPayload]);
  });
});
