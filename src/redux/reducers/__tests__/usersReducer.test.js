import reducer, { userInitialState } from "../usersReducer";
import * as types from "../../actions/user/userActionTypes";

describe("usersReducer", () => {
  it("It should return the initial state when an action type is not passed", () => {
    expect(reducer(undefined, {})).toEqual(userInitialState);
  });

  it("It should set loading to 'true' on SEARCH_USERS_REQUEST", () => {
    expect(
      reducer(userInitialState, {
        type: types.SEARCH_USERS_REQUEST,
      })
    ).toEqual({ error: "", loading: true, users: null });
  });

  it("It should handle SEARCH_USERS_SUCCESS as expected", () => {
    expect(
      reducer(userInitialState, {
        type: types.SEARCH_USERS_SUCCESS,
        payload: "someusenarme",
      })
    ).toEqual({
      error: "",
      loading: false,
      users: "someusenarme",
    });
  });

  it("It should return SEARCH_USERS_ERROR", () => {
    expect(
      reducer(userInitialState, {
        type: types.SEARCH_USERS_FAILURE,
        payload: "test error message",
      })
    ).toEqual({
      loading: false,
      users: null,
      error: "test error message",
    });
  });
});
