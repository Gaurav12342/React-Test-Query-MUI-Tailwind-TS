import { render, screen } from "@testing-library/react";
import Registration from ".";

describe("Registration test", () => {
  test("Registration form image", () => {
    render(<Registration />);
    const imgElement = screen.getByAltText("registration-image");
    expect(imgElement).toBeInTheDocument();
  });
});
