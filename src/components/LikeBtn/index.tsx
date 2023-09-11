import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { PostType } from 'types/interfaces';
import { addLike, deleteLike } from 'api/index';

type Props = {
    postData: PostType,
}

const LikeBtn: React.FC<Props> = ({ postData }) => {
    const isLiked = postData?.likes?.find(likeId => likeId === postData.author._id);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

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

        } catch (err: any) {
            console.log(err.message)
        }
    }

    const decrementLike = async (postId: string) => {
        try {

            const response = await deleteLike(postId);

        } catch (err: any) {
            console.log(err.message)
        }
    }

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