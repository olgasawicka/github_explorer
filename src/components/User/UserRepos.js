import React from "react";
import { UserReposWrapper } from "./UserStyled";
import StarIcon from "../common/StarIcon";
import Spinner from "../common/Spinner";

const UserRepos = ({ fetchedData, classname }) => {
  const { loading, repos, error } = fetchedData;

  return (
    <UserReposWrapper className={classname}>
      {loading && <Spinner />}
      {error && <p className="error-msg">{error}</p>}
      {repos.length
        ? repos.map((repo) => (
            <li key={repo.id} className="repo-card">
              <header className="repo-title">
                {repo.name}
                <span>
                  {repo.stargazers_count}
                  <i>
                    <StarIcon />
                  </i>
                </span>
              </header>
              <div className="repo-descr">{repo.description}</div>
            </li>
          ))
        : !loading &&
          !error && <p className="no-repos">User has no repositories</p>}
    </UserReposWrapper>
  );
};

export default UserRepos;
