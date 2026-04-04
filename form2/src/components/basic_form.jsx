import { useState } from "react"

function BasicForm() {
    const [formData, setFormData]= useState({name:"", email:""});
    const [error, setError] = useState(false);

    function handleChange(e)
    {
        const {name, value} = e.target;
        setFormData(prev=>({...prev, [name]:value}));
    }

    function handleSubmit(e) {

        e.preventDefault();
        setError(false);

        if (!formData.name.trim() || !formData.email.trim() || !formData.email.includes("@")) {
            setError(true);
            return
        }


        alert(`your name is ${formData.name}
             your email is ${formData.email}`);
            setFormData({name:"",email:""});
    }

    return (
        <>

            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => { handleChange(e)}}
                />
                <input type="text"
                    placeholder="Enter your email "
                    name="email"
                    value={formData.email}
                    onChange={(e) => {handleChange(e)}}

                />
                <button type="submit">Submit</button>
            </form>

            {
                error && <p 
                style={{
                    color: "red"
                }}>please enter your data correctly..</p>
            }
        </>
    )
}

export default BasicForm;