import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("render app component", async () => {
  render(<App />);
  const linkElement = await screen.getByTestId("app");
  expect(linkElement).toBeInTheDocument();
});
