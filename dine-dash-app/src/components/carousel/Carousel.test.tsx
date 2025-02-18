import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Carousel from "./Carousel";
import useCarousel from "../../util/FetchCarousel";
import { describe, expect, it, jest } from "@jest/globals";



jest.mock("../../util/FetchCarousel", () => ({
    __esModule: true,
    default: jest.fn(),
}));

describe("Carousel Component", () => {
    it("renders carousel images and descriptions", async() => {
        (useCarousel as jest.Mock).mockReturnValue({
            carousel: [
                {image : "image1.jpg", description: "Slide 1"},
                {image: "image2.jpg", description: "Slide 2"},
            ],
            error: null,
        });
        render(<Carousel/>);

        expect(await screen.findByText("Slide 1")).toBeTruthy();
        expect(await screen.findByText("Slide 2")).toBeTruthy();
    })
})