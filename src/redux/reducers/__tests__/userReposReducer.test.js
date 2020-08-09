import reducer, { reposInitialState } from "../userReposReducer";
import * as types from "../../actions/repos/reposActionTypes";

describe("usersReposReducer", () => {
  it("It should return the initial state when an action type is not passed", () => {
    expect(reducer(undefined, {})).toEqual(reposInitialState);
  });

  it("It should set loading to 'true' on FETCH_USER_REPOS_REQUEST", () => {
    expect(
      reducer(reposInitialState, {
        type: types.FETCH_USER_REPOS_REQUEST,
      })
    ).toEqual({ error: "", loading: true, repos: [] });
  });

  it("It should handle FETCH_USER_REPOS_SUCCESS as expected", () => {
    expect(
      reducer(reposInitialState, {
        type: types.FETCH_USER_REPOS_SUCCESS,
        payload: "someusenarme",
      })
    ).toEqual({
      error: "",
      loading: false,
      repos: "someusenarme",
    });
  });

  it("It should return an error on FETCH_USER_REPOS_FAILURE", () => {
    expect(
      reducer(reposInitialState, {
        type: types.FETCH_USER_REPOS_FAILURE,
        payload: "fecthing user's repositories failed",
      })
    ).toEqual({
      loading: false,
      repos: [],
      error: "fecthing user's repositories failed",
    });
  });
});
