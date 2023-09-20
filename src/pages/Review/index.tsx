
import { useEffect, useState } from "react";
import { getPost } from "api/index";
import { useParams } from "react-router-dom";
import { PostType } from "types/interfaces";
import PostBody from "./PostBody";
import PostSlider from "./PostSlider";
import Typography from '@mui/material/Typography';
import PostComments from "./PostComments";

const Review: React.FC = () => {
    const params = useParams();
    const [postData, setPostData] = useState<PostType | null>(null);

    useEffect(() => {
        const getPostById = async () => {
            try {
                const response = await getPost(params.id)
                const post = response.data;
                setPostData(post.data);

            } catch (err) {

            }
        }

        getPostById();
    }, [])


    return (
        <>
            {
                postData &&
                <>
                    <PostSlider postData={postData} />
                    <Typography
                        variant="h5"
                        component="h1"
                        sx={{
                            marginBottom: "20px",
                            marginTop: "20px",
                            fontWeight: "600"
                        }}
                    >
                        {postData.postTitle}
                    </Typography>
                    <PostBody markdownContent={postData?.postContent} />
                    <PostComments
                        comments={postData.comments}
                        postId={postData._id}
                    />
                </>
            }

        </>
    )
}

export default Review;