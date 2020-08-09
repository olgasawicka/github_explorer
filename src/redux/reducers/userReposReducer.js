import {
  FETCH_USER_REPOS_REQUEST,
  FETCH_USER_REPOS_SUCCESS,
  FETCH_USER_REPOS_FAILURE,
} from "../actions/repos/reposActionTypes";

export const reposInitialState = {
  loading: false,
  repos: [],
  error: "",
};

const userReposReducer = (state = reposInitialState, action) => {
  switch (action.type) {
    case FETCH_USER_REPOS_REQUEST:
      return {
        ...state,
        loading: true,
        repos: [],
      };

    case FETCH_USER_REPOS_SUCCESS:
      return {
        loading: false,
        repos: action.payload,
        error: "",
      };
    case FETCH_USER_REPOS_FAILURE:
      return {
        loading: false,
        repos: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReposReducer;
