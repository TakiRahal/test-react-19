import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ResponseError} from "../../../utils/ResponseError";
import {QUERY_KEY} from "../../../config/queryKeys";
import {SignInForm} from "../types/signin.type";


const useSignIn = ()=> {

    const queryClient = useQueryClient()

    const loginUser = async (email: string, password: string) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        if (!response.ok)
            throw new ResponseError('Failed on sign in request');
        return await response.json();
    };

    const loginMutation = useMutation({
        mutationFn: (values: SignInForm) => loginUser(values.email, values.password),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY.user] }),
        onError: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY.user] }),
    })

    return {loginMutation}
}
export default useSignIn
