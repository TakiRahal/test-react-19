import InputField from "../../../input-field/components/InputField";
import PasswordCheckList from "./PasswordCheckList";

type PasswordProps = {
    name: string
    label: string
}
const Password = ({name, label}: PasswordProps): React.JSX.Element => {
    return (
        <>
            <InputField name={name} label={label} type={"password"}/>
            <PasswordCheckList name={name}/>
        </>
    )
}
export default Password
