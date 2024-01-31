import { screen, render, fireEvent } from "@testing-library/react";
import { DiscoverUs } from "./DiscoverUs";

test("should show the product list", () => {
  render(<DiscoverUs />);
  const headElem = screen.getByText("About Us"); // Assuming you have a test ID set
  expect(headElem).toBeInTheDocument();
});
