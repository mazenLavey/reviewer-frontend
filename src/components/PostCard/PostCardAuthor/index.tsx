import UserAvatar from 'components/UserAvatar';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import './index.scss';

type Props = {
    author: string,
}

const PostCardAuthor: React.FC<Props> = ({
    author,
}) => {

    return (
        <div className='PostCardAuthor'>

            <UserAvatar name={author}/>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                {/* <Rating
                    name="user-rate"
                    value={4}
                    size='small'
                    readOnly
                /> */}
                <Box
                    sx={{
                        fontSize: "12px",
                        textTransform: "capitalize",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        width: "fit-content",
                        maxWidth: "120px",
                        color:"#333"
                    }}
                >
                    {author}
                </Box>
            </Box>
        </div>
    )
}

export default PostCardAuthor;