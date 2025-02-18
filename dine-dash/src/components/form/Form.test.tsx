import { render, screen } from "@testing-library/react";
import Form from "./Form";
import useFetchRestaurants from "../../util/FetchRestaurant";

jest.mock("../../util/FetchRestaurant", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Form Component", () => {
  beforeEach(() => {
    (useFetchRestaurants as jest.Mock).mockReturnValue({
      restaurants: [
        {
          id: 1,
          name:"Golden Dragon",
          cuisine: ["Chinese"],
        },
        {
          id: 2,
          name: "Saravana Bhavan",
          cuisine: ["South Indian"],
        },
      ],
      error: null,
    });
  });

  test("renders form correctly", () => {
    render(<Form />);
    expect(screen.getByLabelText("First Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Last Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email address")).toBeInTheDocument();
    expect(screen.getByLabelText("Mobile Number")).toBeInTheDocument();
    expect(screen.getByLabelText("Date you want to book")).toBeInTheDocument();
    expect(screen.getByLabelText("In-Time")).toBeInTheDocument();
    expect(screen.getByText("Choose your preference")).toBeInTheDocument();
    expect(screen.getByText("RESERVE MY TABLE")).toBeInTheDocument();
  });

});
