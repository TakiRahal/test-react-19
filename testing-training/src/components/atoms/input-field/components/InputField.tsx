import {RefObject} from "react";
import {useField} from "formik";

type InputFieldProps = {
    name: string;
    label: string;
    placeholder?: string;
    type?: string
    ref?: RefObject<HTMLInputElement>;
    onChange?: (data: string) => void
}

const InputField = ({ref, name, label, placeholder = label, type="text", onChange}: InputFieldProps) => {
    const [field, meta, helpers] = useField(name);
    const hasError = !!(meta.touched && meta.error)
    return (
        <div>
            {
                label && <label htmlFor={name}
                                className={`block mb-2 text-sm font-medium ${hasError ? 'text-red-700 dark:text-red-500' : ' text-gray-900 dark:text-white'}`}>
                    {label}</label>
            }
            <input ref={ref}
                   type={type}
                   name={name}
                   id={name}
                   className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder={placeholder}
                   value={field.value}
                   onChange={(evt) => {
                       if(typeof onChange === 'function' ) {
                           onChange(evt.target.value)
                       }
                       else {
                           helpers.setValue(evt.target.value)
                       }
                   }}
                   data-testid={name}
                   data-cy={name}/>
            {
                hasError && <p className="mt-2 text-sm text-red-600 dark:text-red-500"
                               data-testid={`error-message-${name}`}
                               data-cy={`error-message-${name}`}>{meta.error}</p>
            }
        </div>
    )
}
export default InputField
