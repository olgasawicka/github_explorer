import React from "react";
import MainWrapper from "./MainStyled";
import { connect } from "react-redux";
import { searchUsers } from "../../redux/actions/user/usersActions";
import Spinner from "../common/Spinner";
import Search from "../Search/Search";
import User from "../User/User";

const Main = ({ fetchedData, searchUsers }) => {
  const { loading, users, error } = fetchedData;
  const handleSearch = (searchUser) => searchUsers(searchUser);

  return (
    <MainWrapper>
      <Search onSearch={handleSearch} loading={loading} />
      {loading && <Spinner />}
      {error && <p className="error-msg">{error}</p>}
      {users && users.length ? (
        <User users={users.slice(0, 5)} />
      ) : (
        users && !loading && <p className="no-users">No users</p>
      )}
    </MainWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchedData: state.usersReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchUsers: (username) => dispatch(searchUsers(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
