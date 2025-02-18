import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input component for form", () => {
  test("renders input components with props", () => {
    const handleChange = jest.fn();
    render(
      <Input
        inputId="1"
        inputLabel="Username"
        inputType="text"
        inputName="username"
        value="1"
        textAlign="center"
        width="50%"
        onChange={handleChange}
      />
    );

    const label = screen.getByText("Username");

    const input = screen.getByRole("textbox");

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveStyle("text-align: center");
    expect(input).toHaveStyle("width: 50%");
    expect(input).toHaveAttribute("type", "text");
    fireEvent.change(input, { target: { value: "100" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
