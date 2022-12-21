import { screen, render, fireEvent } from "@testing-library/react";
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
    expect(inputEmailElement).toHaveValue(userData?.email);

    const inputPasswordElement = screen.getByRole("textbox");
    expect(inputPasswordElement).toHaveAttribute("type", "text");
    expect(inputPasswordElement).toHaveValue(userData?.password);

    const loginButtonElement = screen.getByRole("button", { name: "Sign In" });
    await user.click(loginButtonElement);

    expect(inputEmailElement).toHaveValue(userData?.email);
    expect(inputPasswordElement).toHaveValue(userData?.password);
  });

  test("Handle form changes", async () => {
    user.setup();
    const userData = {
      email: "",
      password: "",
    };
    render(<Login />);
    const inputEmailElement = screen.getByRole("textbox", {
      name: "Email",
    });
    const inputPasswordElement = screen.getByRole("textbox");

    expect(inputEmailElement).toHaveValue(userData?.email);
    expect(inputPasswordElement).toHaveAttribute("type", "text");
    expect(inputPasswordElement).toHaveValue(userData?.password);

    fireEvent.change(inputEmailElement, {
      target: { value: "gaurav2@gmail.com" },
    });
    expect(inputEmailElement).toHaveValue("gaurav2@gmail.com");
    
    fireEvent.change(inputPasswordElement, { target: { value: "123456" } });
    expect(inputPasswordElement).toHaveValue("123456");
    
    const loginButtonElement = screen.getByRole("button", { name: "Sign In" });
    await user.click(loginButtonElement);

    user.clear(inputEmailElement);
    expect(inputEmailElement).toHaveValue(userData.email);

    user.clear(inputPasswordElement);
    expect(inputPasswordElement).toHaveValue(userData.password);
  });

  test("Focus element in right order", async () => {
    user.setup();
    const userData = {
      email: "",
      password: "",
    };

    render(<Login />);
    const inputEmailElement = screen.getByRole("textbox", {
      name: "Email",
    });
    const inputPasswordElement = screen.getByRole("textbox");

    expect(inputEmailElement).toHaveTextContent(userData.email);
    expect(inputPasswordElement).toHaveTextContent(userData.password);

    const loginButtonElement = screen.getByRole("button", { name: "Sign In" });
    await user.click(loginButtonElement);

    user.clear(inputEmailElement);
    expect(inputEmailElement).toHaveTextContent(userData.email);

    user.clear(inputPasswordElement);
    expect(inputPasswordElement).toHaveTextContent(userData.password);
  });
});
