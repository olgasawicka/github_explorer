import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/user/usersActions";
import MainWrapper from "./MainStyled";
import User from "../User/User";
import Search from "../Search/Search";

const Main = ({ fetchedData, fetchUsers }) => {
  const handleSearch = (searchUser) => fetchUsers(searchUser);

  return (
    <MainWrapper>
      <Search onSearch={handleSearch} loading={fetchedData.loading} />
      {fetchedData.loading ? (
        <p>Loading users ...</p>
      ) : fetchedData.error ? (
        <p>{fetchedData.error}</p>
      ) : (
        fetchedData.users &&
        !!fetchedData.users.length && (
          <User users={fetchedData.users.slice(0, 5)} />
        )
      )}
    </MainWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchedData: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: (username) => dispatch(fetchUsers(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
