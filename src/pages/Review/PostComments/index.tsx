import { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import CommentCard from "components/CommentCard";
import { CommentType, NewCommentType } from "types/interfaces";
import { addComment } from "api/index";

type Props = {
    comments: CommentType[],
    postId: string,
}

const PostComments: React.FC<Props> = ({
    comments,
    postId,
}) => {
    const [comment, setComment] = useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const data: NewCommentType = {
                content: comment,
                postId: postId
            }

            const response = await addComment(data);
            setComment('')
        } catch (err) {

        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setComment(value)
    }

    const renderComments = comments?.map((comment: CommentType, index: number) => {
        return (
            <CommentCard
                key={index}
                comment={comment}
            />
        )
    })

    return (
        <>
            <Stack
                direction={"column"}
                spacing={2}
                marginTop={4}
                marginBottom={4}
            >
                {renderComments}
            </Stack>
            <Box
                onSubmit={handleSubmit}
                component="form"
                sx={{
                    display: "flex",
                    gap: "16px"
                }}
            >
                <TextField
                    variant="outlined"
                    label="Add Comment"
                    id="comment"
                    name="comment"
                    onChange={handleChange}
                    value={comment}
                    fullWidth
                />
                <Button
                    variant="contained"
                    type='submit'
                    disabled={isLoading}
                    endIcon={isLoading && <CircularProgress size={20} />}
                >
                    comment
                </Button>
            </Box>
        </>
    )
}

export default PostComments;