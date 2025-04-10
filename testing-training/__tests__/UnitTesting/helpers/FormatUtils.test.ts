import * as utils  from "../../../src/helpers/function.utils";


describe('FormatUtils', () => {
    test('mock function with jest.spyOn', () => {
        // Given
        const originalResult = utils.welcomeUser('Taki');
        expect(originalResult).toBe('Hello, Taki!');

        // Spy and mock
        const spy = jest.spyOn(utils, 'welcomeUser').mockImplementation(() => 'Mocked!');

        const mockedResult = utils.welcomeUser('Rahal');
        expect(mockedResult).toBe('Mocked!');
        expect(spy).toHaveBeenCalledWith('Rahal');

        // Restore the original greet
        spy.mockRestore();

        const restoredResult = utils.welcomeUser('Taki Rahal');
        expect(restoredResult).toBe('Hello, Taki Rahal!');
    });

    test('mock function with jest.fn', () => {
        // Given
        const originalResult = utils.welcomeUser('Taki');
        expect(originalResult).toBe('Hello, Taki!');

        // Mock
        const myMockMethod  = jest.fn(() => 'Mocked!'); // Replaces the original permanently
        const resultMock = myMockMethod();
        expect(resultMock).toBe('Mocked!');
    })
})
