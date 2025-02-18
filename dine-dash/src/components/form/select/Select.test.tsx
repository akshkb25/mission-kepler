import { render, screen, fireEvent } from "@testing-library/react";
import Select from "./Select";

describe("Select component", () => {
  const mockOnChange = jest.fn();

  const restaurants = [
    { name: "Golden Dragon" },
    { name: "Saravana Bhavan" },
    { name: "Little Italy" },
    { name: "Spicy Aroma" },
  ];

  const label = "Choose a restaurant";
  const inputId = "select-id";

  test("renders select component with options", () => {
    render(
      <Select
        items={restaurants}
        label={label}
        inputId={inputId}
        onChange={mockOnChange}
      />
    );
    const selectElement = screen.getByLabelText(label);
    restaurants.map((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
    expect(screen.getByLabelText(label)).toBeInTheDocument();
    fireEvent.change(selectElement, { target: { value: "Little Italy" } });
  });
});
