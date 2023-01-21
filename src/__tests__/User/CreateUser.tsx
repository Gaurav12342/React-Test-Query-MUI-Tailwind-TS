import { screen, render, fireEvent } from "@testing-library/react";
import CreateUser from "components/CreateUser";
import user from "@testing-library/user-event";

describe("Create user components", () => {
  test("create component root", () => {
    render(<CreateUser />);
    const rootElement = screen.getByTestId("root");
    expect(rootElement).toBeInTheDocument();
  });

  test("User name input element", () => {
    render(<CreateUser />);
    const emailInputElement = screen.getByLabelText("User Name", {
      selector: "input",
    });
    expect(emailInputElement).toBeInTheDocument();
  });

  test("User email input element", () => {
    render(<CreateUser />);
    const emailInputElement = screen.getByLabelText("User Email", {
      selector: "input",
    });
    expect(emailInputElement).toBeInTheDocument();
  });

  test("User location input element", () => {
    render(<CreateUser />);
    const emailInputElement = screen.getByLabelText("User Location", {
      selector: "input",
    });
    expect(emailInputElement).toBeInTheDocument();
  });

  test("Handle form changes data", async () => {
    user.setup();
    const userData = {
      email: "",
      name: "",
      location: "",
    };

    render(<CreateUser />);
    // Initial state
    const userName = screen.getByRole("textbox", { name: "User Name" });
    expect(userName).toHaveValue(userData?.name);

    const userEmail = screen.getByRole("textbox", { name: "User Email" });
    expect(userEmail).toHaveValue(userData?.email);

    const userLocation = screen.getByRole("textbox", { name: "User Location" });
    expect(userLocation).toHaveValue(userData?.location);

    // Change input state
    fireEvent.change(userName, { target: { value: "gaurav" } });
    expect(userName).toHaveValue("gaurav");

    fireEvent.change(userEmail, { target: { value: "gauravsali2@gmail.com" } });
    expect(userEmail).toHaveValue("gauravsali2@gmail.com");

    fireEvent.change(userLocation, { target: { value: "surat" } });
    expect(userLocation).toHaveValue("surat");

    // Button click state
    const submitButton = screen.getByRole("button");
    await user.click(submitButton);

    // Clear input state
    user.clear(userName);
    user.clear(userEmail);
    user.clear(userLocation);

    expect(userName).toHaveValue(userData.name);
    expect(userEmail).toHaveValue(userData.email);
    expect(userLocation).toHaveValue(userData.location);
  });

  test("Create user initial form", async () => {
    user.setup();
    const userData = {
      email: "",
      name: "",
      location: "",
    };
    render(<CreateUser />);
    const userName = screen.getByRole("textbox", { name: "User Name" });
    expect(userName).toHaveValue(userData?.name);

    const userEmail = screen.getByRole("textbox", { name: "User Email" });
    expect(userEmail).toHaveValue(userData?.email);

    const userLocation = screen.getByRole("textbox", { name: "User Location" });
    expect(userLocation).toHaveValue(userData?.location);

    const submitButton = screen.getByRole("button");
    await user.click(submitButton);

    expect(userName).toHaveValue(userData.name);
    expect(userEmail).toHaveValue(userData.email);
    expect(userLocation).toHaveValue(userData.location);
  });
});
