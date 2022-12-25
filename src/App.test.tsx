import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// 1- Mocking the hook using jest.fn
const mockedUsedNavigate = jest.fn();

// 2- Mock the library
jest.mock("react-router-dom", () => ({
  // 3- Import non-mocked library and use other functionalities and hooks
  ...(jest.requireActual("react-router-dom") as any),

  // 4- Mock the required hook
  useNavigate: () => mockedUsedNavigate,
}));

describe("Render app component", () => {
  it("has a button and does navigate to other component", async () => {
    render(<App />);

    const linkElement = await screen.getByTestId("app");
    expect(linkElement).toBeInTheDocument();
  });
});
