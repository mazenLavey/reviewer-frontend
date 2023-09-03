import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { PostType } from 'types/interfaces';
import { addLike, deleteLike, deleteComment } from 'api/index';

type Props = {
    postData: PostType,
}

const LikeBtn: React.FC<Props> = ({ postData }) => {

    const handleClick = async () => {
        const isliked = Boolean(postData.likes.find(like => like.authorId === postData.author));

        if(!isliked) {
            try {
                const response = await deleteComment("64f48534fabb517133c06dfd");
            } catch(err: any) {
                console.log(err.message)
            }
        }
    }

    return (
        <IconButton aria-label="add to favorites" onClick={handleClick}>
            <FavoriteIcon />
        </IconButton>
    )
}

export default LikeBtn;