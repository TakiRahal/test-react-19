import {useNavigate} from "react-router";
import useSignIn from "../hooks/useSignIn";
import SignInFormAction from "./SignInFormAction.tsx";

const SignInPage = () => {
    const navigate = useNavigate()
    const {loginMutation} = useSignIn()
    return (
        <div className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    Testing ReactJS
                </a>
                <SignInFormAction isPending={loginMutation.isPending}
                                  onSubmit={(values) => {
                                      loginMutation.mutate(values, {
                                            onSuccess: (data) => {
                                                console.log('success here', data)
                                                navigate('/')
                                            },
                                        })
                                    }}/>
            </div>
        </div>
    )
}
export default SignInPage
