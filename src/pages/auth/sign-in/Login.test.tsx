import { screen, render } from '@testing-library/react';
import Login from './Login';

describe("Login Component", () => {
    test.only("login form image", () => {
        render(<Login />);
        const imageElement = screen.getByAltText("desk-image");
        expect(imageElement).toBeInTheDocument();
    })

    test("Email input element", () => {
        render(<Login />);
        const emailInputElement = screen.getByLabelText("Email", { selector: "input" });
        expect(emailInputElement).toBeInTheDocument();
    })

    test("Password label element", () => {
        render(<Login />);
        const passwordInputElement = screen.getByLabelText("Password", { selector: "label" });
        expect(passwordInputElement).toBeInTheDocument();
    })

    test("Render Password input element initiallay", () => {
        render(<Login />);
        const passwordElement = screen.getByRole("textbox");
        expect(passwordElement).toHaveAttribute("type", "text");
    })

    test("Render Password input after click eye icon", () => {
        render(<Login />);
        const renderpasswordAfterClickElement = screen.queryByRole("textbox");
        expect(renderpasswordAfterClickElement).not.toHaveAttribute("type", "password");
    })
});