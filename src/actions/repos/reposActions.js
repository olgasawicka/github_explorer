import {
  FETCH_USER_REPOS_REQUEST,
  FETCH_USER_REPOS_SUCCESS,
  FETCH_USER_REPOS_FAILURE,
} from "./reposActionTypes";
import axios from "axios";

export const fetchUserReposRequest = () => {
  return {
    type: FETCH_USER_REPOS_REQUEST,
  };
};

export const fetchUserReposSuccess = (username) => {
  return {
    type: FETCH_USER_REPOS_SUCCESS,
    payload: username,
  };
};

export const fetchUserReposFailure = (error) => {
  return {
    type: FETCH_USER_REPOS_FAILURE,
    payload: error,
  };
};

export const fetchUserRepos = (reposURL) => {
  return function (dispatch) {
    dispatch(fetchUserReposRequest());
    axios
      .get(reposURL)
      .then((response) => {
        const users = response.data;
        dispatch(fetchUserReposSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUserReposFailure(errorMsg));
      });
  };
};
