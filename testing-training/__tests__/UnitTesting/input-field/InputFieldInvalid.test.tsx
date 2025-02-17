import {render} from "@testing-library/react";
import InputField from "../../../src/components/atomic/input-field/components/InputField";
import {screen} from "@testing-library/dom";
import {expect} from "@jest/globals";

const field = {};
const meta = {
    touched: true,
    error: true
};
const helpers = {};

jest.mock("formik", () => ({
    useField: jest.fn(() => {
        return [field, meta, helpers];
    }),
}));

describe('InValid InputField', () => {
    test('renders Label InputField with invalid schema', () => {
        // Given
        const name = 'firstName'
        const label = 'Enter your firstname'

        // When
        render(<InputField name={name} label={label}/>)

        // Then
        const labelElement = screen.getByText(label);
        expect(labelElement.className).toEqual('block mb-2 text-sm font-medium text-red-700 dark:text-red-500')
    });


    test('renders Error Message InputField with invalid schema', () => {
        // Given
        const name = 'firstName'
        const label = 'Enter your firstname'

        // When
        render(<InputField name={name} label={label}/>)

        // Then
        const errorElement = screen.getByTestId(`error-message-${name}`);
        expect(errorElement).toBeDefined();
        expect(errorElement.className).toEqual('mt-2 text-sm text-red-600 dark:text-red-500')
    });

})
