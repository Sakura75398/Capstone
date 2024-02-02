import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
    
function Delete(props) {

    const navigate = useNavigate();

 console.log(props)
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const result = await deletePost(props.id); // Passing our async function in from below.
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    async function deletePost(postId) {
        try {
            const token = localStorage.getItem("token");
            console.log(token)
            console.log("postId", postId)
            const response = await fetch(`${BASE_URL}/posts/${postId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },

            });  
            const result = await response.json()

            if(result.success === true) {
                const filteredPosts = props.items.filter((singlePost) => {
                    if(singlePost._id !== postId){
                        return singlePost
                    }
                })
                props.setItems(filteredPosts)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div id="deletepost">
                <button id="delete-button" onClick={handleSubmit} type="submit">Delete Post</button>            
        </div>
    )
}

export default Delete;