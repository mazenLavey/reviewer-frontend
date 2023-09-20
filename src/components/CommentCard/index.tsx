import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import getMoment from 'utils/getMoment';
import { CommentType } from 'types/interfaces';
import UserAvatar from 'components/UserAvatar';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deleteComment } from 'api/index';
import { useAuthUser } from 'react-auth-kit'

type Props = {
    comment: CommentType
}

const CommentCard: React.FC<Props> = ({
    comment
}) => {
    const timeAgo = getMoment(comment?.createdAt);

    const auth = useAuthUser()
    const user = auth();

    const isTheAurthor = comment.author._id === user?.userId

    const handleClick = async () => {
        try {
            const res = await deleteComment(comment._id);

        } catch (err: any) {

        }
    }

    return (
        <Paper
            sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "16px",
                borderRadius: "8px",
            }}
        >
            <UserAvatar name={comment?.author?.userName} />
            <Stack direction="column" spacing={1}>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        textTransform: "capitalize",
                        fontWeight: "500",
                    }}
                >
                    {comment?.author?.userName}
                </Typography>
                <Typography
                    variant="body1"
                >
                    {comment.content}
                </Typography>
            </Stack>

            <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                    position: "absolute",
                    right: "8px",
                    bottom: "8px",
                    fontSize: "12px"
                }}
            >
                {timeAgo}
            </Typography>
            {isTheAurthor &&
                <DeleteForeverIcon
                    onClick={handleClick}
                    color='error'
                    sx={{
                        position: "absolute",
                        right: "8px",
                        top: "8px",
                        cursor: "pointer",
                        ":hover": {
                            opacity: "0.5"
                        }
                    }}
                />
            }
        </Paper>

    )
}

export default CommentCard;