import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Rating from '@mui/material/Rating';
import './index.scss';

type Props = {
    author: string,
    createdAt: string
}

const PostCardAuthor: React.FC<Props> = ({
    author,
    createdAt
}) => {

    return (
        <div className='PostCardAuthor'>
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
            </Avatar>
            <div className='PostCardAuthor__info'>
                <Rating
                    name="read-only"
                    value={4}
                    readOnly
                    sx={{
                        marginLeft: "auto"
                    }}
                    size='small'
                />
                <span className='PostCardAuthor__name'>
                    {author}
                </span>
            </div>
        </div>
    )
}

export default PostCardAuthor;