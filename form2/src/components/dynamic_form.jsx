import { useState } from "react";
import InputField from "./input_field";
import useForm from "../customHooks/useForm";

function DynamicForm() {
    const fields = [
        { name: "name", placeholder: "Enter your name" },
        { name: "email", placeholder: "Enter your email" }
    ];

    const { formData, handleChange ,handleSubmit, error } = useForm({ name: "", email: "" })



    

    return (
        <>
            <form onSubmit={handleSubmit((data)=>{
                alert(JSON.stringify(data))
            })}>
                {
                    fields.map((item, index) => (
                        <div key={item.name}>
                            <label>{item.name}: </label>
                            <InputField
                                name={item.name}
                                placeholder={item.placeholder}
                                value={formData[item.name]}
                                onChange={handleChange}
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