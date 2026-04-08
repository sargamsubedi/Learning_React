import { useState } from "react";


function useForm(initialValue, fields) {
    const [formData, setFormData] = useState(initialValue);
    const [error, setError] = useState("");


    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }


    function handleSubmit(callback) {
        return function (e) {

            e.preventDefault();
            setError("");

            for (const field of fields) {
                const value= formData[field.name];

                if(field.required && !value.trim())
                {
                    setError(`${field.name} is required`);
                    return;
                }

                if(field.validate && !field.validate(value))
                {
                    setError(field.errorMessage);
                    return;
                }

            }

        }
        callback(formData);
    }
    return { formData, handleChange, handleSubmit, error };
}

export default useForm;