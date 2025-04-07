import * as Yup from 'yup'
const signInInitialValues = { email: '', password: '' }

const signInSchema = Yup.object().shape({
    email: Yup.string().email("Email is valid").required("Email is required"),
    password: Yup.string()
        .required("Password is required")
        .matches(
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
            "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long."
        )
})

export {signInInitialValues, signInSchema}
