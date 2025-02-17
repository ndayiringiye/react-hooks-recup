import { useEffect, useState } from "react";

const FectingData = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    async function intergrateWithUseEffect() {
        try {
            setIsLoading(true)
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data =await  response.json();
            console.log(data);
            setPosts(data)
            console.log(posts)
        } catch (error) {
            console.log("fetching failed", error.message)
        }finally{
            setIsLoading(false);
        }

    };

    useEffect(() => {
        intergrateWithUseEffect();

    }, []);
    return (
        <div>
            <div>
               {isLoading ? <p>loading ....</p> : null}
            </div>
            <div>
                {posts.map((post, index) => (
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