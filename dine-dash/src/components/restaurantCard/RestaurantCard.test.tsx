import { render, screen } from "@testing-library/react";
import { Restaurant } from "../../services/Restaurant";
import RestaurantCard from "./RestaurantCard";


jest.mock("react-router-dom", () => ({
    useNavigate: jest.fn(),
}));

describe("Restaurant Card includes details of restaurant", () => {

    const mockRestaurant: Restaurant = {
        id: 1,
        name: "Golden Dragon",
        location: "Chennai",
        timings: "11:00AM - 10:00PM",
        cuisine: ["Chinese"],
        type: ["Veg", "Non-Veg"],
        rating: 4.8,
        isCertified: false,
        restaurantImageSrc: "https://images.squarespace-cdn.com/content/629c91bd2c776f10a0805409/4e8d68aa-f6ce-4045-9abe-fec251ce3e0a/intro-bg.jpg?format=1500w&content-type=image%2Fjpeg",
        items: [
            {
                "id": "hakkaNoodles",
                "name": "Hakka Noodles",
                "imageSrc": "https://pupswithchopsticks.com/wp-content/uploads/hakka-noodles-3.webp",
                "description": "Stir-fried noodles with vegetables and meat/seafood in a savory sauce.",
                "Price": "300"
              },
              {
                "id": "kungPaoChicken",
                "name": "Kung Pao Chicken",
                "imageSrc": "https://leitesculinaria.com/wp-content/uploads/2020/06/kung-pao-chicken-fp.jpg",
                "description": "Spicy stir-fried chicken with peanuts, vegetables, and chili peppers.",
                "Price": "400"
              }
        ]
    };

    test("displays restaurant name, location, timings, certified, type and rating ", () => {
        render(<RestaurantCard restaurant={mockRestaurant} />);
        expect(screen.getByText(mockRestaurant.name)).toBeInTheDocument();
        expect(screen.getByText(mockRestaurant.location)).toBeInTheDocument();
        expect(screen.getByText(mockRestaurant.timings)).toBeInTheDocument();
        expect(screen.queryByRole("img", { name: /certificate/i })).not.toBeInTheDocument();
        expect(screen.getByTestId("background")).toBeInTheDocument();
        mockRestaurant.type.map((type) => {
            if (type === "Veg") {
                expect(screen.getByTestId("food-preference-green")).toBeInTheDocument();
            } 
            else if (type === "Non-Veg") {
                expect(screen.getByTestId("food-preference-red")).toBeInTheDocument();
            }
        })
        mockRestaurant.cuisine.map((cuisine) => {
            expect(screen.getByText(cuisine)).toBeInTheDocument();
        })
        expect(screen.getByText(mockRestaurant.rating)).toBeInTheDocument();
        
    })


})


