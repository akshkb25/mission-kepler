import { render, screen } from "@testing-library/react";
import Carousel from "./Carousel";
import useCarousel from "../../util/FetchCarousel";  
import "@testing-library/jest-dom";

jest.mock("../../util/FetchCarousel"); 

describe("Carousel Component", () => {
  it("renders carousel items when data is available", () => {

    const mockData = [
      { imageSrc: "test-image-1.jpg", description: "Slide 1" },
      { imageSrc: "test-image-2.jpg", description: "Slide 2" },
    ];

    (useCarousel as jest.Mock).mockReturnValueOnce({
        carousel: mockData,
        error: null,
      });

    render(<Carousel />);
   
    expect(screen.getAllByText("Slide 1").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Slide 2").length).toBeGreaterThan(0);


  });

});
