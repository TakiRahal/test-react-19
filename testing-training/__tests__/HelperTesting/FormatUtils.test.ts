import {customForEach} from "../../src/helpers/function.utils";


describe('FormatUtils', () => {
    test('check difference between spyOn and fn', () => {
        // Given
        const mockResult = jest.fn().mockImplementation(() => 'Hello Training');

        // When
        customForEach([1, 2], mockResult);

        // Then
        // The mock function was called twice
        expect(mockResult.mock.calls).toHaveLength(2);

        console.log('')

    });
})
