import React from "react";
import { UserReposWrapper } from "./UserStyled";

const UserRepos = ({ fetchedData }) => {
  const { loading, repos, error } = fetchedData;
  console.log(repos);

  return (
    <UserReposWrapper>
      {loading && <p>Loading repositories ...</p>}
      {error && <p>{error}</p>}
      {repos.length
        ? repos.map((repo) => (
            <li key={repo.id}>
              <header>
                {repo.name}
                <span>{repo.stargazers_count}</span>
              </header>
              <div>{repo.description}</div>
            </li>
          ))
        : !loading && <p className="no-repos">User has no repositories</p>}
    </UserReposWrapper>
  );
};

export default UserRepos;
