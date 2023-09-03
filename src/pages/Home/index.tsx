import { getAllPosts } from "api/index";
import { useEffect, useState } from "react";
import { PostType } from "types/interfaces";
import Stack from '@mui/material/Stack';
import PostCard from "components/PostCard";

const Home: React.FC = () => {
    const [posts, setPosts] = useState<PostType[]>([]);

    useEffect(() => {
        const getPost = async () => {
            try {
                const response = await getAllPosts();
                const data = response.data;
                setPosts(data.data);

            } catch (err) {
                console.log(err)
            }
        }

        getPost();
    }, []);

    const renderPosts = posts?.map(post => {
        return (
            <PostCard
                key={post._id}
                postData={post}
            />
        )
    })

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px"
        }}>
            <Stack direction="row" spacing={2}>
                {renderPosts}
            </Stack>
        </div>
    )
}

export default Home;