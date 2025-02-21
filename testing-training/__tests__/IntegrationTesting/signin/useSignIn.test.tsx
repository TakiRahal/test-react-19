import {renderHook} from "@testing-library/react";
import useSignIn from "../../../src/modules/signin/hooks/useSignIn";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { FetchMock } from 'jest-fetch-mock';
const fetchMock = fetch as FetchMock;

const queryClient = new QueryClient();
const Providers = ({ children }) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
);

describe('useSignIn', () => {
    test('loginUser should start with initial state', () => {

        // When
        const { result } = renderHook(useSignIn, {
            wrapper: Providers,
        });

        // Then
        expect(result.current.addMutation.isPending).toBeFalsy()
        expect(result.current.addMutation.isSuccess).toBeFalsy()
        expect(result.current.addMutation.isError).toBeFalsy()
    })


    test('loginUser should successfully log in', async () => {
        // Given
        const email = "taki@rahal.tn"
        const password = "rahal"
        const values = {
            email: email,
            password: password
        }
        const fakeUser = { id: 1, name: "TakiRahal", email: email };
        fetchMock.mockResponseOnce(JSON.stringify(fakeUser), { status: 200 });

        // When
        const {result} = renderHook(useSignIn, {
            wrapper: Providers,
        });

        // Then
        result.current.addMutation.mutate(values, {
            onSuccess: (data) => {
                console.log('success here', data)
                expect(data.email).toEqual(email)
            }
        });
    })


    test('loginUser should throw an error log in', async () => {
        // Given
        const responseError = 'ResponseError: Failed on sign in request'
        const email = "taki@rahal.tn"
        const password = "rahal"
        const values = {
            email: email,
            password: password
        }
        fetchMock.mockResponseOnce('fail', { status: 500 });

        // When
        const {result} = renderHook(useSignIn, {
            wrapper: Providers,
        });

        // Then
        result.current.addMutation.mutate(values, {
            onError: (err) => {
                expect(err).toEqual(responseError)
            }
        });
    })
})
