import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./index";

test("renders app title element", () => {
  render(<App />);
  const titleElement = screen.getByText(/Memories/i);
  expect(titleElement).toBeInTheDocument();
});