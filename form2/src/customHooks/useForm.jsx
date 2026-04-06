import { useState } from "react";


function useForm(initialValue) {
    const [formData, setFormData] = useState(initialValue);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

return {formData, handleChange};
}