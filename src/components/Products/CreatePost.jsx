import React, { useState } from "react";
// import { createPost } from "../API/index";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
    const navigate = useNavigate();
    const [productName, setProductName] = useState("");
    const [details, setDetails] = useState("");
    const [price, setPrice] = useState("");
    const [imageURL, setImageURL] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const post = await createPost({
                name: productName,
                details,
                imageURL,
            });
            if(post.success) {
                alert("Your item has been added!");
                navigate("/");
            } else{
                alert("Oops, something went wrong with adding product. Please try again.");
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <h1>Add your new product</h1>
            <form>
                <label>
                    Name:
                    <input type="text" onChange={(e) => setProductName(e.target.value)} />
                </label>
                <label>
                    Details:
                    <input type="text" onChange={(e) => setDetails(e.target.value)} />
                </label>
                <label>
                    Image <URL></URL>:
                    <input type="text" onChange={(e) => setImageURL(e.target.value)} />
                </label>
            </form>
        </div>
    );
}