import {render, fireEvent} from "@testing-library/react";
import {screen} from '@testing-library/dom'
import Button from "../../../src/components/atoms/button/components/Button";

describe('Button', () => {
    test('renders Button with correct props', () => {
        // Given
        const title = 'Click Me'
        const className = 'w-full'
        const type = 'submit'

        // When
        render(<Button title={title} className={className} type={type}/>)

        // Then
        const buttonElement = screen.getByText(title);
        expect(buttonElement).toBeDefined();
    });

    test("should show loader and hide title when isLoading", () => {
        // Given
        const title = 'Click Me'
        const className = 'w-full'
        const isLoading = true

        // When
        render(<Button title={title} className={className} isLoading={isLoading}/>);

        // Then
        const iconButton = screen.getByTestId(`icon-${title}`);
        expect(iconButton).toBeDefined()
        expect(screen.queryByText(title)).toBeNull()
    });

    test("should disabled when isLoading", () => {
        // Given
        const title = 'Click Me'
        const className = 'w-full'
        const handleClick = jest.fn();

        // When
        render(<Button title={title} className={className} isLoading={true}/>);

        // Then
        const buttonElement = screen.getByTestId(title);
        expect(buttonElement).toHaveProperty('disabled', true);


        fireEvent.click(buttonElement);
        expect(handleClick).not.toHaveBeenCalledTimes(1);
        const iconButton = screen.getByTestId(`icon-${title}`);
        expect(iconButton).toBeDefined()
    });

    test("calls onClick when clicked", () => {
        // Given
        const title = 'Click Me'
        const className = 'w-full'
        const handleClick = jest.fn();

        // When
        render(<Button title={title} className={className} callback={handleClick}/>);

        // Then
        const buttonElement = screen.getByText(title);
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
})
