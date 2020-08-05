import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchUserRepos } from "../../actions/repos/reposActions";
import UserRepos from "./UserRepos";
import UserWrapper, { UserCard } from "./UserStyled";

const User = ({ users, fetchedData, fetchUserRepos }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const onUserClick = (userId, repoURL) => {
    if (currentUser === userId) {
      setCurrentUser(null);
    } else {
      fetchUserRepos(repoURL);
      setCurrentUser(userId);
    }
  };

  return (
    <UserWrapper>
      {users.map((user) => (
        <UserCard
          key={user.id}
          onClick={() => onUserClick(user.id, user.repos_url)}
        >
          <header>
            {user.login}
            <span
              className={currentUser && currentUser === user.id ? "open arrow" : "arrow"}
            />
          </header>
          {currentUser === user.id && (
            <UserRepos user={user} fetchedData={fetchedData} />
          )}
        </UserCard>
      ))}
    </UserWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchedData: state.repos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserRepos: (reposURL) => dispatch(fetchUserRepos(reposURL)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
