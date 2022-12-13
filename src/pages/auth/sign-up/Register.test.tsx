import { render, screen } from "@testing-library/react";
import Registration from "./Registration";

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
    const userPasswordLabelElement = screen.getByLabelText("Password", {
      selector: "label",
    });
    expect(userPasswordLabelElement).toBeInTheDocument();
  });
});
