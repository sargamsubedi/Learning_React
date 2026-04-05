import { useState } from "react";

function DynamicForm() {
    const fields = [
        { name: "name", placeholder: "Enter your name" },
        { name: "email", placeholder: "Enter your email" }
    ];

    const [formData, setFormData] = useState({ name: "", email: "" })
    const [error, setError] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {

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


        alert(`your name is ${formData.name}
             your email is ${formData.email}`);
        setFormData({ name: "", email: "" });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {
                    fields.map((item, index) => (
                        <div key={index}>
                            <label>{item.name}: </label>
                            <input type="text"
                                name={item.name}
                                placeholder={item.placeholder}
                                value={formData[item.name]}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    ))
                }
                <button type="submit">Submit</button>
            </form>

            {
                error && <p 
                style={{
                    color: "red"
                }}>{error}</p>
            }
        </>
    )
}

export default DynamicForm;