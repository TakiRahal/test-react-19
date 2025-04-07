import {Formik} from "formik";
import {signInInitialValues, signInSchema} from "../schema/signin.schema";
import InputField from "../../../components/atomic/input-field/components/InputField";
import Button from "../../../components/atomic/button/components/Button";
import {Link} from "react-router";
import {SignInForm} from "../types/signin.type";
import Password from "../../../components/atomic/molecules/password/components/Password";

type SignInFormProps = {
    isPending: boolean,
    onSubmit: (data: SignInForm) => void
}
const SignInFormAction = ({isPending, onSubmit}: SignInFormProps) => {
    return (
        <div
            className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
                    data-testid={'title-signin'}>
                    Sign in to your account
                </h1>
                {isPending &&
                    <p className={"mt-2 text-sm text-red-600 dark:text-red-500"}>isLoading ...</p>}
                <Formik
                    initialValues={signInInitialValues}
                    validationSchema={signInSchema}
                    onSubmit={(values) => onSubmit(values)}
                >
                    {({
                          handleSubmit,
                      }) => (
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <InputField name={"email"} label={"Your email"} type={"email"}/>
                            <Password name={"password"} label={"Your password"}/>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start" data-testid={'remember-me'}>
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox"
                                               className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <Link to="/forgot-password"
                                   className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                   data-testid={'forgot-password'}>Forgot
                                    password?</Link>
                            </div>
                            <Button title={'Sign in'}
                                    type="submit"
                                    className="bg-stone-900 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    isLoading={isPending}/>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400"
                               data-testid={'signup'}>
                                Don’t have an account yet?
                                <Link to="/signup"
                                      className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign
                                    up</Link>
                            </p>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
export default SignInFormAction
