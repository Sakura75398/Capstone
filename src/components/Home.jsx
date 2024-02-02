import { useState, useEffect } from "react";
import { fetchAllPosts } from "../API";
import { useNavigate } from "react-router-dom";

const Home() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState([null]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchAllPosts() {
            const APIResponse = await fetchAllPosts();
            console.log(APIResponse);
            if (APIResponse.success) {
                setPosts(APIResponse.data.posts);
            } else {
                setError(APIResponse.error.message);
            }
        }
        fetchAllPosts();
    }, []);

    return (
        <>
        {error && <p className="error-notification">{error.message}</p>}
        {posts && (
            <div id="all-post-container">
                {posts.map((post) => {
                    return (
                        <div id="post-container" key={post._id}>
                            <h2 className="post-h2">{post.title}</h2>
                        </div>
                    )}
            </div>
        )};
        </>
    );
}
