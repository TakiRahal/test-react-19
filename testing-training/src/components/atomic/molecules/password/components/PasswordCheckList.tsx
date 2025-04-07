import {useField} from "formik";

type PasswordCheckListProps = {
    name: string
}
const PasswordCheckList = ({name}: PasswordCheckListProps): React.JSX.Element => {

    const [field, meta] = useField(name);

    // Validation rules
    const hasOneDigit = /[0-9]/.test(field.value);
    const hasLowercase = /[a-z]/.test(field.value);
    const hasUppercase = /[A-Z]/.test(field.value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(field.value);
    const hasNoSpace = /^\S*$/.test(field.value);
    const hasValidLength = /^.{8,16}$/.test(field.value);

    // Hide checklist when all conditions are met
    const allValid = hasOneDigit && hasLowercase && hasUppercase && hasSpecialChar && hasNoSpace && hasValidLength;
    const hasError = !!(meta.touched && meta.error)

    return (
      <>
          {!allValid && hasError && (
              <ul className="mt-2 text-sm" data-testid="list-requirements-password" data-cy="list-requirements-password">
                  <li className={hasOneDigit ? "text-green-500" : "text-red-500"}>
                      {hasOneDigit ? '✔' : '❌'} One Digit from 1 to 9
                  </li>
                  <li className={hasLowercase ? "text-green-500" : "text-red-500"}>
                      {hasLowercase ? '✔' : '❌'} One lowercase letter
                  </li>
                  <li className={hasUppercase ? "text-green-500" : "text-red-500"}>
                      {hasUppercase ? '✔' : '❌'} One uppercase letter
                  </li>
                  <li className={hasSpecialChar ? "text-green-500" : "text-red-500"}>
                      {hasSpecialChar ? '✔' : '❌'} One special character
                  </li>
                  <li className={hasNoSpace ? "text-green-500" : "text-red-500"}>
                      {hasNoSpace ? '✔' : '❌'} Has no space
                  </li>
                  <li className={hasValidLength ? "text-green-500" : "text-red-500"}>
                      {hasValidLength ? '✔' : '❌'} It must be 8-16 characters long
                  </li>
              </ul>
          )}
      </>
  )
}
export default PasswordCheckList
