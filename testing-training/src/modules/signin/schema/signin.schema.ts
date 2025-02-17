import * as Yup from 'yup'
const signInInitialValues = { email: '', password: '' }

const signInSchema = Yup.object().shape({
    email: Yup.string().email("Email is valid").required("Email is valid"),
    password: Yup.string().required("Password is valid"),
})

export {signInInitialValues, signInSchema}
