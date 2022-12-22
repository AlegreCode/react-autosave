import { useState } from "react";
import { debounce } from "radash";
import { v4 as uuidv4 } from "uuid";
import database from "../firebase/firebase-config";
import { onValue, ref, set, update } from "firebase/database";

function Form() {
    const [post, setPost] = useState({
        id: '',
        title: '',
        content: ''
    });

    const handleChange = debounce({ delay: 700 }, (name, value) => {
        if (!post.id) {
            const newId = uuidv4();
            setPost({...post, id: newId, [name]: value});
        }else {
            setPost({...post, [name]: value });
        }

        const postRef = ref(database, `posts/${post.id}`);
        onValue(postRef, (snapshot) => {
            if (!snapshot.exists()) {
                set(postRef, {
                    id: post.id,
                    title: post.title,
                    content: post.content
                }).then(() => console.log("POST CREATED."));
            } else {
                const objUpdate = {};
                objUpdate[`posts/${post.id}`] = {
                    id: post.id,
                    title: post.title,
                    content: post.content
                }
                update(ref(database), objUpdate).then(() => console.log("POST UPDATED."));
            }
        });
    });

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
                <p>{post.id} - {post.title} - {post.content}</p>
            </section>
        </>
    )
}

 export default Form;