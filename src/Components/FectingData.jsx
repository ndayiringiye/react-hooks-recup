import { useEffect, useState } from "react";

const FectingData = () => {
    const [posts, setPosts] = useState(null);

    async function intergrateWithUseEffect() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = response.json();
            console.log(data);
            setPosts(data)
            console.log(posts)
        } catch (error) {
            console.log("fetching failed", error.message)
        }

    };

    useEffect(() => {
        intergrateWithUseEffect();

    }, []);
    return (
        <div>
            <div>
                {posts && posts.map((post, index) => (
                    <div key={index}>
                        <h1>{post.body}</h1>
                        <p>{post.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FectingData