import {
  SEARCH_USERS_REQUEST,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_FAILURE,
} from "../actions/user/userActionTypes";

export const userInitialState = {
  loading: false,
  users: null,
  error: "",
};

const usersReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case SEARCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SEARCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case SEARCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
