import { useState } from "react";
function Form() {
    const [form, setForm] = useState({
        title: '',
        content: ''
    });

    const handleChange = (name, value) => {
        setForm({...form, [name]: value});
    }
    return (
        <>
            <section className="text-white w-[600px] p-4">
                <header className="text-white text-4xl text-center py-4">Form Autosave</header>
                <form>
                    <div>
                        <label className="w-full">Title:</label>
                        <input type="text" name="title" placeholder="Title" className="w-full p-2 rounded bg-gray-700 my-2"
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="w-full">Content:</label>
                        <textarea name="content" rows="10" cols="30" placeholder="Content" className="w-full p-2 rounded bg-gray-700 my-2"
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                        />
                    </div>
                </form>
            </section>
        </>
    )
}

 export default Form;