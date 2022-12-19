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
    const userData = {
      email: "",
      password: "",
    };
    user.setup();
    render(<Login />);
    const inputPasswordElement = screen.getByRole("textbox", {
      name: "Password",
    });

    const inputEmailElement = screen.getByRole("textbox", {
      name: "Email",
      exact:false
    });

    expect(inputEmailElement).toHaveValue("");
    expect(inputPasswordElement).toHaveValue(userData?.password);

    const loginButtonElement = screen.getByRole("button", { name: "Sign In" });

    await user.click(loginButtonElement);

    expect(inputEmailElement).toHaveValue("gaurav@test.com");
    expect(inputPasswordElement).toHaveValue("gaurav");
  });
});
