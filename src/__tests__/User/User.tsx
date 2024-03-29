import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Home from "pages/user";
import comman from "resources/userConstant.json";

jest.mock("react-query", () => ({
  useQuery: () => ({
    isLoading: false,
    error: {},
    data: [],
    refetch: () => {},
  }),
}));

// jest.mock("react-query", () => ({
//   useMutation: () => ({
//     isLoading: false,
//     error: {},
//     data: [],
//     mutate: () => {},
//   }),
// }));

// 1- Mocking the hook using jest.fn
const mockedUsedNavigate = jest.fn();

// 2- Mock the library
jest.mock("react-router-dom", () => ({
  // 3- Import non-mocked library and use other functionalities and hooks
  ...(jest.requireActual("react-router-dom") as any),

  // 4- Mock the required hook
  useNavigate: () => mockedUsedNavigate,
}));

describe("Test user component", () => {
  test("test root element", () => {
    render(<Home />);
    const rootElement = screen.getByTestId("root");
    expect(rootElement).toBeInTheDocument();
  });

  test("active first tab when click", async () => {
    render(<Home />);
    const tab1 = screen.getByRole("tab", {
      name: comman?.CURRENT_USER,
      selected: true,
    });
    await user.click(tab1);
    expect(screen.getByRole("tab", { selected: true })).toHaveTextContent(
      comman?.CURRENT_USER
    );
  });

  test.skip("active second tab when click", async () => {
    render(<Home />);
    const tabAllUser = screen.getByRole("tab", {
      name: comman?.ALL_USER,
      selected: false,
    });
    await user.click(tabAllUser);
    expect(screen.getByRole("tab", { selected: true })).toBeInTheDocument();

    // const currentUser: any = screen
    //   .getByText(comman?.CURRENT_USER)
    //   .closest("button");
    // const allUser: any = screen.getByText(comman?.ALL_USER).closest("button");
    // expect(currentUser).toHaveAttribute("aria-selected", "true");
    // expect(allUser).toHaveAttribute("aria-selected", "false");
    // user.click(allUser);
    // expect(currentUser).toHaveAttribute("aria-selected", "false");
    // expect(allUser).toHaveAttribute("aria-selected", "true");
  });
});
