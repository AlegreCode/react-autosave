function Form() {
    return (
        <>
            <section>
                <form>
                    <div>
                        <label>Title:</label>
                        <input type="text" name="title" placeholder="Title" />
                    </div>
                    <div>
                        <label>Content:</label>
                        <textarea rows="10" cols="30" placeholder="Content" />
                    </div>
                    <div>
                        <input type="submit" value="Send" />
                    </div>
                </form>
            </section>
        </>
    )
}

 export default Form;