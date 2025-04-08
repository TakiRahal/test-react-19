import * as utils  from "../../../src/helpers/function.utils";


describe('FormatUtils', () => {
    test('mock function with jest.spyOn', () => {
        // Given
        const originalResult = utils.welcomeUser('Alice');
        expect(originalResult).toBe('Hello, Alice!');

        // Spy and mock
        const spy = jest.spyOn(utils, 'welcomeUser').mockImplementation(() => 'Mocked!');

        const mockedResult = utils.welcomeUser('Bob');
        expect(mockedResult).toBe('Mocked!');
        expect(spy).toHaveBeenCalledWith('Bob');

        // Restore the original greet
        spy.mockRestore();

        const restoredResult = utils.welcomeUser('Charlie');
        expect(restoredResult).toBe('Hello, Charlie!');
    });

    test('mock function with jest.fn', () => {
        // Given
        const originalResult = utils.welcomeUser('Alice');
        expect(originalResult).toBe('Hello, Alice!');

        // Mock
        const myMockMethod  = jest.fn(() => 'Mocked!'); // Replaces the original permanently
        const resultMock = myMockMethod();
        expect(resultMock).toBe('Mocked!');
    })
})
