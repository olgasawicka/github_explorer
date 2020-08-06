import {
  SEARCH_USERS_REQUEST,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_FAILURE,
} from "./userActionTypes";
import axios from "axios";

export const searchUsersRequest = () => {
  return {
    type: SEARCH_USERS_REQUEST,
  };
};

export const searchUsersSuccess = (users) => {
  return {
    type: SEARCH_USERS_SUCCESS,
    payload: users,
  };
};

export const searchUsersFailure = (error) => {
  return {
    type: SEARCH_USERS_FAILURE,
    payload: error,
  };
};

export const searchUsers = (username) => {
  return function (dispatch) {
    dispatch(searchUsersRequest());
    axios
      .get(`https://api.github.com/search/users?q=${username}`)
      .then((response) => {
        const usersLogin = response.data.items
          .slice(0, 5)
          .map((user) => user.login);

        const userURLs = usersLogin.map((login) =>
          axios.get(`https://api.github.com/users/${login}`)
        );

        axios.all(userURLs).then(
          axios.spread((...responses) => {
            const users = responses.map((user) => user.data);
            dispatch(searchUsersSuccess(users));
          })
        );
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(searchUsersFailure(errorMsg));
      });
  };
};
