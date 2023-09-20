import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { PostType } from 'types/interfaces';
import { addLike, deleteLike } from 'api/index';
import { io } from 'socket.io-client';
import { useEffect } from 'react';


const socket = io('http://localhost:4000');

type Props = {
    postData: PostType,
}

const LikeBtn: React.FC<Props> = ({ postData }) => {
    const isLiked = postData?.likes?.find(likeId => likeId === postData.author._id);

    const handleClick = () => {
        if (isLiked) {
            decrementLike(postData._id)
        } else {
            incrementLike(postData._id)
        }
    }

    const incrementLike = async (postId: string) => {

        try {
            const data = {
                postId,
            }

            const response = await addLike(data);
            socket.emit('send_like');
        } catch (err: any) {
            console.log(err.message)
        }
    }

    const decrementLike = async (postId: string) => {
        try {

            const response = await deleteLike(postId);
            socket.emit('send_like');
        } catch (err: any) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        socket.on("receive_like", (data) => {
            console.log(data.data)
        });

    }, [socket])

    return (
        <span>
            {postData.likes.length}
            <IconButton
                aria-label="add to favorites"
                onClick={handleClick}
            >
                <FavoriteIcon sx={isLiked ? { color: "red" } : {}} />
            </IconButton>
        </span>
    )
}

export default LikeBtn;