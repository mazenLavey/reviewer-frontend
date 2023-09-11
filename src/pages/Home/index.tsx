import { getAllPosts } from "api/index";
import { useEffect, useState } from "react";
import { PostType } from "types/interfaces";
import Stack from '@mui/material/Stack';
import PostCard from "components/PostCard";
import "./index.scss";
import Box from '@mui/material/Box';

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
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "16px"
            }}
        >
            {renderPosts}
        </Box>
    )
}

export default Home;