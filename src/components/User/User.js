import React, { useState } from "react";
import UserWrapper, { UserCard } from "./UserStyled";
import { connect } from "react-redux";
import { fetchUserRepos } from "../../redux/actions/repos/reposActions";
import UserRepos from "./UserRepos";
import ArrowIcon from "../common/ArrowIcon";

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
          className={currentUser && currentUser === user.id ? "open" : null}
        >
          <header
            className="username"
            onClick={() => onUserClick(user.id, user.repos_url)}
          >
            {user.name || user.login}
            <i className="arrow">
              <ArrowIcon />
            </i>
          </header>
          {currentUser === user.id && (
            <UserRepos
              user={user}
              fetchedData={fetchedData}
              classname={currentUser && currentUser === user.id ? "open" : null}
            />
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
