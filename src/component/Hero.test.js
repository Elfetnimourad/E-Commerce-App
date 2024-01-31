import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";
import { BrowserRouter as Router } from "react-router-dom";

describe("hero Testing", () => {
  test("renders 'React Boilerplate App'", () => {
    render(
      <Router>
        <Hero />
      </Router>
    );
    const title = screen.getByText("Go Shopp Here");
    expect(title).toBeInTheDocument();
  });
});
