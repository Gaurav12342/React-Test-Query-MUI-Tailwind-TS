import { screen, render } from '@testing-library/react';
import Login from './Login';

describe("Login Component", () => {
    test("login form image", () => {
        render(<Login />);
        const imageElement = screen.getByAltText("desk-image");
        expect(imageElement).toBeInTheDocument();
    })

    test("email label", () => {
        render(<Login />);
        const emailLabelElement = screen.getByText("Sign In");
        expect(emailLabelElement).toBeInTheDocument();
    })
});