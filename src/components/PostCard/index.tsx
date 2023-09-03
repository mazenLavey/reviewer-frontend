import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import CommentIcon from '@mui/icons-material/Comment';
import { PostType } from 'types/interfaces';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import routes from 'routes';
import LikeBtn from 'components/LikeBtn';

type Props = {
    postData: PostType,
}

const PostCard: React.FC<Props> = ({ postData }) => {
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        navigate(`${routes.review}/${postData._id}`)
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        {/* <MoreVertIcon /> */}
                    </IconButton>
                }
                title={postData.postTitle}
                subheader={postData.createdAt}
            />
            <CardMedia
                component="img"
                height="194"
                image={postData?.mediaFiles[0]}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {postData.postSummary}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <LikeBtn postData={postData} />
                <IconButton aria-label="share">
                    <CommentIcon />
                </IconButton>
                <Button
                    variant="outlined"
                    onClick={handleClick}
                >
                    read more
                </Button>
            </CardActions>
        </Card>
    )
}

export default PostCard;