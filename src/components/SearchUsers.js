import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/usersActions";
import UserList from "./UserList";

const SearchUsers = ({ fetchData, fetchUsers }) => {
  console.log(fetchData);
  const [searchUser, setSearchUser] = useState("");
  const handleChange = (event) => {
    setSearchUser(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter username"
        value={searchUser}
        onChange={handleChange}
      />
      <button onClick={() => fetchUsers(searchUser)}>search</button>
      {fetchData.loading ? (
        <p>Loading users ...</p>
      ) : fetchData.error ? (
        <p>{fetchData.error}</p>
      ) : (
        <UserList users={fetchData.users} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchData: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: (username) => dispatch(fetchUsers(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchUsers);
