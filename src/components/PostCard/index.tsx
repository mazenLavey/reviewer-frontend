import { Stack, Badge, Chip, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import PostCardAuthor from './PostCardAuthor';
import PostCardActions from './PostCardActions';
import { format } from 'date-fns';
import CircularRatingBar from 'components/CircularRatingBar';
import { PostType } from 'types/interfaces';

type Props = {
    postData: PostType,
}

const PostCard: React.FC<Props> = ({ postData }) => {
    const formattedDate = format(new Date(postData.createdAt), 'dd MMM yyyy');

    const renderTags = postData?.postTags?.split(' ').map((el, index) => {
        return (
            <Chip key={index} label={el} size='small' />
        )
    })

    return (
        <Card sx={{
            borderRadius: "20px"
        }}>
            <Box
                sx={{ position: "relative" }}
            >
                <CardMedia
                    component="img"
                    image={postData.mediaFiles[0]}
                    alt={postData.postTitle}
                    height="345"
                />

                <PostCardAuthor
                    createdAt={postData.createdAt}
                    author={postData.author.userName}
                />
            </Box>

            <CardContent>

                    <Stack
                        direction={"row"}
                        sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            variant="h5"
                            component="h2"
                        >
                            {postData.postTitle}

                        </Typography>


                        <CircularRatingBar
                            value={+postData.postRate}
                            minValue={1}
                            maxValue={10}
                        />
                    </Stack>
                    <Chip label={postData?.postGroup}/>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >
                        {formattedDate}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {postData.postSummary}
                    </Typography>

                    <Stack direction={"row"} spacing={1}>
                        {renderTags}
                    </Stack>

                    <PostCardActions postData={postData} />
            </CardContent>
        </Card >
    )
}

export default PostCard;