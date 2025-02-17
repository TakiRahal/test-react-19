import { Formik } from "formik";
import {signInInitialValues, signInSchema} from "../schema/signin.schema.ts";
import InputField from "../../../components/atomic/input-field/components/InputField.tsx";
import {Link, useNavigate} from "react-router";
import Button from "../../../components/atomic/button/components/Button.tsx";
import useSignIn from "../hooks/useSignIn.tsx";

const SignInPage = () => {
    const navigate = useNavigate()
    const {addMutation} = useSignIn()
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    Testing ReactJS
                </a>
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        {addMutation.isPending && <p className={"mt-2 text-sm text-red-600 dark:text-red-500"}>isLoading ...</p>}
                        <Formik
                            initialValues={signInInitialValues}
                            validationSchema={signInSchema}
                            onSubmit={(values) => {
                                addMutation.mutate(values, {
                                    onSuccess: (data) => {
                                        console.log('success here', data)
                                        navigate('/')
                                    },
                                })
                            }}
                        >
                            {({
                                  errors,
                                  handleSubmit,
                              }) => (
                                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                    errors = {JSON.stringify(errors)}

                                    <InputField name={"email"} label={"Your email"} type={"email"}/>
                                    <InputField name={"password"} label={"Your password"} type={"password"}/>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start">
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
                                        <a href="#"
                                           className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot
                                            password?</a>
                                    </div>
                                    <Button title={'Sign in'} type="submit"
                                            className="bg-stone-900 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                            isLoading={addMutation.isPending}
                                            />
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
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
            </div>
        </section>
    )
}
export default SignInPage
