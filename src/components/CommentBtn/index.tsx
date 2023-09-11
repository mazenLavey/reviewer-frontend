



import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { PostType } from 'types/interfaces';
import { deleteComment } from 'api/index';

type Props = {
    postData: PostType,
}

const CommentBtn: React.FC<Props> = ({ postData }) => {

    const handleClick = async () => {
        const isliked = Boolean(postData.likes.find(like => like === postData.author._id));

        switch(isliked) {
            case true:
                
        }
        if (!isliked) {
            try {
                const response = await deleteComment("64f48534fabb517133c06dfd");
            } catch (err: any) {
                console.log(err.message)
            }
        }
    }

    return (
        <span>
            {postData.comments.length}
            <IconButton
                aria-label="share"
            >
                <CommentIcon />
            </IconButton>
        </span>
    )
}

export default CommentBtn;