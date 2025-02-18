import { render, screen } from "@testing-library/react";
import FoodPreference from "./FoodPreference";

describe("FoodPreference Component", () => {
  test("renders with correct color", () => {
    const color = "green";

    render(<FoodPreference color={color} />);

    expect(screen.getByTestId(`food-preference-${color}`)).toBeInTheDocument();
  });
});
