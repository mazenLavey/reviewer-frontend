
import { useEffect, useState } from "react";
import { getPost, addComment } from "api/index";
import { useParams } from "react-router-dom";
import { NewCommentType, PostType } from "types/interfaces";
import PostBody from "./PostBody";
import PostSlider from "./PostSlider";
import Typography from '@mui/material/Typography';

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

    const [comment, setComment] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (params.id && comment.length > 0) {

                const data: NewCommentType = {
                    content: comment,
                    postId: params.id
                }

                const response = await addComment(data)
                // const post = response.;

                console.log(response)
            }
        } catch (err) {

        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setComment(value)
    }

    return (
        <>
            {
                postData &&
                <>
                    <PostSlider postData={postData} />
                    <Typography variant="h1" component="h1">
                        {postData.postTitle}
                    </Typography>
                    <PostBody markdownContent={postData?.postContent} />
                </>
            }

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="comment"
                    name="comment"
                    onChange={handleChange}
                    value={comment}
                />
                <button type="submit">send</button>
            </form>
        </>
    )
}

export default Review;

// review name, name of the reviewed piece of art, "group" (from the fixed set: "Movies", "Books", "Games" и т.п.), tags (multiple tags with autocomplition - when users starts entering tag, dropdown show variants, which already exist in the app), review text обзора (with "markdown" formatting), optional image (stored in the cloud) and the grade in the range from 0 to 10.