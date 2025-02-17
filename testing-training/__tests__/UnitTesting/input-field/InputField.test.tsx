import {render, fireEvent} from "@testing-library/react";
import InputField from "../../../src/components/atomic/input-field/components/InputField";
import {screen} from "@testing-library/dom";
import {expect} from "@jest/globals";

const field = {
    value: 'Hello World'
};
const meta = {};
const helpers = {};

jest.mock("formik", () => ({
    useField: jest.fn(() => {
        return [field, meta, helpers];
    }),
}));

describe('Valid InputField', () => {

    test('renders Label InputField', () => {
        // Given
        const name = 'firstName'
        const label = 'Enter your firstname'

        // When
        render(<InputField name={name} label={label}/>)

        // Then
        const labelElement = screen.getByText(label);
        expect(labelElement).toBeDefined();
    });

    test('renders Label InputField with valid schema', () => {
        // Given
        const name = 'firstName'
        const label = 'Enter your firstname'

        // When
        render(<InputField name={name} label={label}/>)

        // Then
        const labelElement = screen.getByText(label);
        expect(labelElement.className).toEqual('block mb-2 text-sm font-medium  text-gray-900 dark:text-white')
    });

    test('check default value InputField with valid schema', () => {
        // Given
        const name = 'firstName'
        const label = 'Enter your firstname'
        const type = 'text'

        // When
        render(<InputField name={name} label={label} type={type}/>)

        // Then
        const inputElement = screen.getByTestId(name);
        expect(inputElement.getAttribute('value')).toEqual(field.value)
    });

    test('should update value InputField', () => {
        // Given
        const name = 'firstName'
        const label = 'Enter your firstname'
        const type = 'text'
        const newValue = 'new value'


        const handleChange = (data: string) => {
            expect(data).toEqual(newValue)
        }
        // When
        render(<InputField name={name} label={label} type={type} onChange={handleChange}/>)
        const inputElement = screen.getByTestId(name);

        // Then
        fireEvent.change(inputElement, {target: {value: newValue}});
    });
})
