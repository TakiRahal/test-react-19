import {prettyDOM, render} from "@testing-library/react";
import Password from "../../../src/components/molecules/password/components/Password";
import {screen} from "@testing-library/dom";
import {PasswordFeatures} from "../../../src/utils/PasswordFeatures";


const setValueMock = jest.fn();
const field = {
    value: ' '
};
const meta = {
    touched: true,
    error: 'Password is mandatory with mock'
};
const helpers = {
    setValue: setValueMock
};

jest.mock("formik", () => ({
    useField: jest.fn(() => {
        return [field, meta, helpers];
    }),
}));

describe('Password', () => {
    test('check invalidation password', async () => {

        // Given

        // When
        render(<Password name={"password"} label={"Your password"}/>)

        // Then
        const inputElement = screen.getByTestId("password");
        expect(inputElement).toBeDefined()
        const listRequirementsPassword: HTMLUListElement = screen.getByTestId('list-requirements-password');
        console.log('listRequirementsPassword ', prettyDOM(listRequirementsPassword))

        expect(listRequirementsPassword.children.length).toEqual(6)
        const invalidPassword = screen.getByText('Password is mandatory with mock');
        expect(invalidPassword).toBeDefined()

        const listItems = screen.getByTestId('list-requirements-password').querySelectorAll('li');
        listItems.forEach((li, index) => {
            expect(li.textContent).toEqual(`❌ ${PasswordFeatures[index]}`)
        });
    })
})
