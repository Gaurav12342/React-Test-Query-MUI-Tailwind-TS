import { render, screen } from "@testing-library/react";
import axios, { AxiosResponse } from "axios";
import { fetchUsers } from "pages/user/UserListing";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Test user listing component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const listUser = [
    {
      id: 11133,
      name: "Developer",
      email: "Developer12@gmail.com",
      profilepicture:
        "http://restapi.adequateshop.com/Media//Images/userimageicon.png",
      location: "USA",
      createdat: "0001-01-01T00:00:00",
    },
    {
      id: 11134,
      name: "AS",
      email: "qweqw@mail.ru",
      profilepicture:
        "http://restapi.adequateshop.com/Media//Images/userimageicon.png",
      location: "USA",
      createdat: "0001-01-01T00:00:00",
    },
  ];

  const userListObj: AxiosResponse = {
    config: {},
    data: {
      data: listUser,
      page: 1,
      per_page: 10,
      total_pages: 4326,
      totalrecord: 43256,
    },
    headers: {},
    request: {},
    status: 200,
    statusText: "OK",
  };

  test("should return user list", async () => {
    mockedAxios.get.mockResolvedValueOnce(userListObj);
    expect(axios.get).not.toHaveBeenCalled();
    const data = await fetchUsers(1);
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(userListObj);
  });
});
