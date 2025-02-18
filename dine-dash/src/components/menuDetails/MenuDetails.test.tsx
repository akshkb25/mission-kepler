import { render, screen } from "@testing-library/react";
import MenuDetails from "./MenuDetails";
import { MenuItem } from "../../services/Restaurant";

describe("MenuDetails Component", () => {
  const mockMenuItems: MenuItem[] = [
    {
      id: "hakkaNoodles",
      name: "Hakka Noodles",
      imageSrc:
        "https://pupswithchopsticks.com/wp-content/uploads/hakka-noodles-3.webp",
      description:
        "Stir-fried noodles with vegetables and meat/seafood in a savory sauce.",
      Price: "300",
    },
    {
      id: "kungPaoChicken",
      name: "Kung Pao Chicken",
      imageSrc:
        "https://leitesculinaria.com/wp-content/uploads/2020/06/kung-pao-chicken-fp.jpg",
      description:
        "Spicy stir-fried chicken with peanuts, vegetables, and chili peppers.",
      Price: "400",
    },
  ];
  const restaurantName = "Golden Dragon";

  test("renders menu details", () => {
    render(
      <MenuDetails menuItems={mockMenuItems} restaurantName={restaurantName} />
    );

    expect(screen.getByText(restaurantName)).toBeInTheDocument();
    mockMenuItems.map((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();
      expect(screen.getByText(`$${item.Price}`)).toBeInTheDocument();
      expect(screen.getByAltText(item.name)).toHaveAttribute(
        "src",
        item.imageSrc
      );
    });
  });
});
