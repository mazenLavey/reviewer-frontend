import Button from '@mui/material/Button';
import LikeBtn from 'components/LikeBtn';
import CommentBtn from 'components/CommentBtn';
import { useNavigate } from 'react-router-dom';
import routes from 'routes';
import { PostType } from 'types/interfaces';
import './index.scss';

type Props = {
    postData: PostType,
}

const PostCardActions: React.FC<Props> = ({ postData }) => {
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        navigate(`review/${postData._id}`)
    }

    return (
        <div className='PostCardActions'>
            <LikeBtn postData={postData} />
            <CommentBtn postData={postData} />
            <Button
                variant="contained"
                onClick={handleClick}
                sx={{
                    marginLeft: "auto"
                }}
            >
                read&nbsp;more
            </Button>
        </div>
    )
}

export default PostCardActions;