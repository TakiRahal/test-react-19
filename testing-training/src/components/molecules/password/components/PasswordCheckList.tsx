import {useField} from "formik";
import {PasswordFeatures} from "../../../../utils/PasswordFeatures";

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
                      {hasOneDigit ? '✔' : '❌'} {PasswordFeatures[0]}
                  </li>
                  <li className={hasLowercase ? "text-green-500" : "text-red-500"}>
                      {hasLowercase ? '✔' : '❌'} {PasswordFeatures[1]}
                  </li>
                  <li className={hasUppercase ? "text-green-500" : "text-red-500"}>
                      {hasUppercase ? '✔' : '❌'} {PasswordFeatures[2]}
                  </li>
                  <li className={hasSpecialChar ? "text-green-500" : "text-red-500"}>
                      {hasSpecialChar ? '✔' : '❌'} {PasswordFeatures[3]}
                  </li>
                  <li className={hasNoSpace ? "text-green-500" : "text-red-500"}>
                      {hasNoSpace ? '✔' : '❌'} {PasswordFeatures[4]}
                  </li>
                  <li className={hasValidLength ? "text-green-500" : "text-red-500"}>
                      {hasValidLength ? '✔' : '❌'} {PasswordFeatures[5]}
                  </li>
              </ul>
          )}
      </>
  )
}
export default PasswordCheckList
