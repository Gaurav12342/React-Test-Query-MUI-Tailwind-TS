import { render, screen } from "@testing-library/react";
import Header from "layout/Header";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Header component", () => {
  test("header root", () => {
    render(<Header />);
    const rootElement = screen.getByTestId("header-root");
    expect(rootElement).toBeInTheDocument();
  });
});
