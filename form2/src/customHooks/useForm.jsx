import { useState } from "react";


function useForm(initialValue) {
    const [formData, setFormData] = useState(initialValue);
    const [error, setError] = useState("");


    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }


    function handleSubmit(callback) {
        return function(e){

            e.preventDefault();
            setError("");
            
            if (!formData.name.trim() || !formData.email.trim()) {
                setError("please fill all fields");
                return
            }
            if (!formData.email.includes("@")) {
                setError("Invalid email");
                return;
            }
            
        callback(formData);
        }
    }
    return { formData, handleChange ,handleSubmit, error };
}

export default useForm;