import {render, fireEvent, act} from "@testing-library/react";
import {BrowserRouter} from "react-router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {screen} from "@testing-library/dom";
import SignInFormAction from "../../../src/modules/signin/components/SignInFormAction";

const queryClient = new QueryClient();
const onSubmit = jest.fn()

describe('SignInPage', () => {
    test('check all exist required fields SignInPage', () => {
        // Given

        // When
        render(
            <QueryClientProvider client={queryClient}>
                <BrowserRouter><SignInFormAction isPending={false} onSubmit={onSubmit} /></BrowserRouter>
            </QueryClientProvider>
        )

        // Then
        const titleElement = screen.getByTestId('title-signin');
        expect(titleElement).toBeDefined()

        const emailElement = screen.getByTestId('email');
        expect(emailElement).toBeDefined()

        const passwordElement = screen.getByTestId('password');
        expect(passwordElement).toBeDefined()

        const rememberMeElement = screen.getByTestId('remember-me');
        expect(rememberMeElement).toBeDefined()

        const forgotPasswordElement = screen.getByTestId('forgot-password');
        expect(forgotPasswordElement).toBeDefined()

        const submitElement = screen.getByText('Sign in');
        expect(submitElement).toBeDefined()

        const signUpElement = screen.getByTestId('signup');
        expect(signUpElement).toBeDefined()
    })

    test('check validation message empty fields SignInPage', async () => {
        // Given

        // When
        render(
            <QueryClientProvider client={queryClient}>
                <BrowserRouter><SignInFormAction isPending={false} onSubmit={onSubmit} /></BrowserRouter>
            </QueryClientProvider>
        )
        const submitElement = screen.getByText('Sign in');
        await act(async () => {
            fireEvent.click(submitElement);
        });

        // Then
        const invalidEmail = screen.getByText('Email is valid');
        expect(invalidEmail).toBeDefined()

        const invalidPassword = screen.getByText('Password is valid');
        expect(invalidPassword).toBeDefined()

    })


    test('Should be redirect to signup route', async () => {
        // Give
        const pathSignUp = '/signup'

        // When
        render(
            <QueryClientProvider client={queryClient}>
                <BrowserRouter><SignInFormAction isPending={false} onSubmit={onSubmit} /></BrowserRouter>
            </QueryClientProvider>
        )

        // Then
        const linkSignUp = screen.getByText('Sign up')
        fireEvent.click(linkSignUp);
        expect(window.location.pathname).toEqual(pathSignUp)
    });

    test("calls onSubmit when form is submitted", async () => {
        // Given
        const email = "taki@rahal.tn"
        const password = "rahal"

        // When
        render(
            <QueryClientProvider client={queryClient}>
                <BrowserRouter><SignInFormAction isPending={false} onSubmit={onSubmit} /></BrowserRouter>
            </QueryClientProvider>
        )
        await act(async () => {
            const emailElement = screen.getByTestId('email');
            fireEvent.change(emailElement, {target: {value: email}});

            const passwordElement = screen.getByTestId('password');
            fireEvent.change(passwordElement, {target: {value: password}});

            const submitElement = screen.getByText('Sign in');
            fireEvent.click(submitElement);
        });

        // Then
        expect(onSubmit).toHaveBeenCalledTimes(1)
        expect(onSubmit).toHaveBeenCalledWith({
            email,
            password
        });
    })
})
