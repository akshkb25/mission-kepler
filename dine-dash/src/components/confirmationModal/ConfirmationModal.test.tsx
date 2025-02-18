import {render, screen} from "@testing-library/react";
import ConfirmationModal from "./ConfirmationModal";

describe("ConfirmationModal Component", () => {
    test("renders modal with reservation details", () => {
        const props = {
            persons: 2,
            restaurantName: "Golden Dragon",
            formattedDate: "February 28, 2025",
            timeOfDay: "Night" 
        };

        render(<ConfirmationModal {...props} />);

        expect(screen.getByText(props.persons)).toBeInTheDocument();
        expect(screen.getByText(props.restaurantName)).toBeInTheDocument();
        expect(screen.getByText(props.formattedDate)).toBeInTheDocument();
        expect(screen.getByText(props.timeOfDay)).toBeInTheDocument();

    })

    test
});