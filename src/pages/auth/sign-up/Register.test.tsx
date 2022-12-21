import { render, screen } from "@testing-library/react";
import Registration from "./Registration";
import user from "@testing-library/user-event";

describe("Registration test cases", () => {
  test("Registration form image", () => {
    render(<Registration />);
    const imgElement = screen.getByAltText("registration-image");
    expect(imgElement).toBeInTheDocument();
  });

  test("Registration heading text", () => {
    render(<Registration />);
    const registrationHeadingElement = screen.getByText("Registration", {
      exact: false,
    });
    expect(registrationHeadingElement).toBeInTheDocument();
  });

  test("User name input element", () => {
    render(<Registration />);
    const userNameInputElement = screen.getByLabelText("username", {
      exact: false,
    });
    expect(userNameInputElement).toBeInTheDocument();
  });

  test("User email input element", () => {
    render(<Registration />);
    const userEmailInputElement = screen.getByLabelText("email", {
      exact: false,
    });
    expect(userEmailInputElement).toBeInTheDocument();
  });

  test("User password label element", () => {
    render(<Registration />);
    const userPasswordLabelElement = screen.getByLabelText("password", {
      selector: "label",
    });
    expect(userPasswordLabelElement).toBeInTheDocument();
  });

  test("Sign up button element", () => {
    render(<Registration />);
    const signUpButtonElement = screen.getByRole("button", { name: "Sign Up" });
    expect(signUpButtonElement).toBeInTheDocument();
  });

  test("Registration form initial value", () => {
    render(<Registration />);
    const usernameInputElement = screen.getByRole("textbox", {
      name: "username",
    });

    const emailInputElement = screen.getByRole("textbox", {
      name: "email",
    });

    expect(usernameInputElement).toHaveValue("");
    expect(emailInputElement).toHaveValue("");

    const inputPasswordElement = screen.getByLabelText("password", {
      selector: "text",
    });
    // expect(inputPasswordElement).toHaveAttribute("type", "text");
    expect(inputPasswordElement).toHaveValue("");
    
  });
});
