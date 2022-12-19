import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import Login from "./Login";

describe("Login Component", () => {
  test("login form image", () => {
    render(<Login />);
    const imageElement = screen.getByAltText("desk-image");
    expect(imageElement).toBeInTheDocument();
  });

  test("Email input element", () => {
    render(<Login />);
    const emailInputElement = screen.getByLabelText("Email", {
      selector: "input",
    });
    expect(emailInputElement).toBeInTheDocument();
  });

  test("Password label element", () => {
    render(<Login />);
    const passwordInputElement = screen.getByLabelText("Password", {
      selector: "label",
    });
    expect(passwordInputElement).toBeInTheDocument();
  });

  test("Render Password input element initiallay", () => {
    render(<Login />);
    const passwordElement = screen.getByRole("textbox");
    expect(passwordElement).toHaveAttribute("type", "text");
  });

  test.skip("Render Password input after click eye icon", () => {
    render(<Login />);
    const renderpasswordAfterClickElement = screen.queryByRole("textbox");
    expect(renderpasswordAfterClickElement).not.toHaveAttribute(
      "type",
      "password"
    );
  });

  test("user form input initial value", async () => {
    user.setup();
    const userData = {
      email: "",
      password: "",
    };
    render(<Login />);
    const inputEmailElement = screen.getByRole("textbox", {
      name: "Email",
    });
    expect(inputEmailElement).toHaveValue("");

    const inputPasswordElement = screen.getByRole("textbox");
    expect(inputPasswordElement).toHaveAttribute("type", "text");
    expect(inputPasswordElement).toHaveValue("");

    const loginButtonElement = screen.getByRole("button", { name: "Sign In" });
    await user.click(loginButtonElement);

    expect(inputEmailElement).toHaveValue("");
    expect(inputPasswordElement).toHaveValue("");
  });
});
