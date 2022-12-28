import { useEffect, useState } from "react";
import { debounce } from "radash";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase/firebase-config";
import { doc, setDoc } from "firebase/firestore";
import StatusBar from "../statusbar/StatusBar";

function Form() {
    const [post, setPost] = useState({
        id: '',
        title: '',
        content: ''
    });

    const [status, setStatus] = useState({ sending: false });

    const handleChange = debounce({ delay: 700 }, (name, value) => {
        !post.id ? setPost({...post, id: uuidv4(), [name]: value}) : setPost({...post, [name]: value});
    });
    
    useEffect(() => {
        if (post.id) {
            setStatus({sending: true});
            setDoc(doc(db, "posts", post.id), { title: post.title, content: post.content})
                .then(() => {
                    setStatus({sending: false});
                });
        }
    }, [post]);

    return (
        <>
            <section className="text-white w-[600px] p-4">
                <header className="text-white text-4xl text-center py-4">Form Autosave</header>
                <div className="py-2 flex justify-between items-center gap-1 border-y-2 border-green-700">
                    <span className="text-green-700">STATUS:</span> { post.id &&
                        <StatusBar sending={status.sending}/>
                    }
                        
                </div>
                <form className="mt-5">
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