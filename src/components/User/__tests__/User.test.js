import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { User } from "../User";

afterEach(cleanup);

let users = [
  {
    id: 25931746,
    login: "fakeLoginOne",
    name: "Fake User",
    repos_url: "https://somefakeurl.com",
  },
  {
    id: 25966646,
    login: "fakeLoginTwo",
    name: "Second Fake User",
    repos_url: "https://yetanotherone.com",
  },
];

let fetchedData = {
  loading: false,
  repos: [],
  error: "",
};
const fetchUserRepos = jest.fn();

it("should take a snapshot", () => {
  const UserComponent = render(<User />);
  expect(UserComponent).toMatchSnapshot();
});

it("It should render UserCards", () => {
  const UserComponent = render(
    <User
      users={users}
      fetchUserRepos={fetchUserRepos}
      fetchedData={fetchedData}
    />
  );
  const header = UserComponent.getAllByTestId("user-name");
  expect(header[0].textContent).toBe("Fake User");
  fireEvent.click(header[0]);
  expect(UserComponent.getAllByTestId("no-repos")[0].textContent).toBe(
    "User has no repositories"
  );
});
