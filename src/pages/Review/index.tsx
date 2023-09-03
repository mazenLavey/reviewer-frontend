
import { useEffect, useState } from "react";
import { getPost, addComment } from "api/index";
import { useParams } from "react-router-dom";
import { NewCommentType } from "types/interfaces";

const Review: React.FC = () => {
    const params = useParams();

    useEffect(() => {
        const getPostById = async () => {
            try {
                const response = await getPost(params.id)
                const post = response.data;

                console.log(post)
            } catch (err) {

            }
        }

        getPostById();
    }, [])

    const [comment, setComment] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if(params.id && comment.length > 0) {

                const data: NewCommentType = {
                    content: comment,
                    postId: params.id
                }
    
                const response = await addComment(data)
                const post = response.data;
    
                console.log(post)
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
            <img
                src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
            />
            <h2>title</h2>
            <span>tags</span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem harum hic consequatur ratione ab maxime nesciunt amet accusamus fuga cum illum quibusdam tempore, quia esse totam! Sit iste facilis explicabo?</p>

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