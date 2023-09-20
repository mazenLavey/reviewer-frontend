import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { PostType } from 'types/interfaces';


type Props = {
    postData: PostType,
}

const CommentBtn: React.FC<Props> = ({ postData }) => {

    return (
        <Box>
            {postData.comments.length}
            <IconButton
                aria-label="comment"
                sx={{
                    cursor: "unset"
                }}
                disableRipple
            >
                <CommentIcon />
            </IconButton>
        </Box>
    )
}

export default CommentBtn;