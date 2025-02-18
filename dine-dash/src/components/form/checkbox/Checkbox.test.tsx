import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';


describe("Checkbox for form input", () => {
    test("renders checkbox with props", () => {
        const handleChange = jest.fn();
        render(
            <Checkbox id="1" name="veg" label="Checkbox" value="" checked={true} onChange={handleChange} />
        );
        const checkbox = screen.getByLabelText("Checkbox");
        expect(checkbox).toBeInTheDocument();
        fireEvent.click(checkbox);
        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(checkbox).toBeChecked();
    })
    
});