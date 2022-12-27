import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Home from ".";
import comman from "./userConstant.json";

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

  test("active second tab when click", async () => {
    render(<Home />);
    const tabAllUser = screen.getByRole("tab", {
      name: comman?.ALL_USER,
      selected: false,
    });
    await user.click(tabAllUser);
    expect(screen.getByRole("tab", { selected: true })).toHaveTextContent(
      comman?.ALL_USER
    );
  });
});
