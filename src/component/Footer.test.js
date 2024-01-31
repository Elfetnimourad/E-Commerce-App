import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("footer testing", () => {
  test("renders Footer component", () => {
    render(<Footer />);
    const footer = screen.getByTestId("Footer");
    expect(footer).toBeInTheDocument();
  });
});
