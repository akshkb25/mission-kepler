import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

describe("Header Component", () => {
  const menuItems = [
    { id: 1, name: "Home", route: "/" },
    { id: 2, name: "Restaurants", route: "/restaurants" },
    { id: 3, name: "Reserve a table", route: "/reserve" },
  ];

  test("renders logo and menu items", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByText("DINEDASH")).toBeInTheDocument();
    menuItems.map((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });
});
