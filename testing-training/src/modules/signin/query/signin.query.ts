import {useQuery} from "@tanstack/react-query";
import {QUERY_KEY} from "../../../config/queryKeys.ts";
import {User} from "../../../models/user.model.ts";
import {ResponseError} from "../../../utils/ResponseError.ts";

export const loginUser = async (email: string, password: string) => {
    // const response = await axios.post("https://api.example.com/login", data);
    // return response.data;
    const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    if (!response.ok)
        throw new ResponseError('Failed on sign in request', response);
    return await response.json();
};

export const useSignIn = (email: string, password: string) => {
    return useQuery({
        queryKey: [QUERY_KEY.user],
        queryFn: async (): Promise<User> => loginUser(email, password),
    })
}

