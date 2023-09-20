import { Stack, Card, CardMedia, Typography, Box } from '@mui/material';
import PostCardAuthor from './PostCardAuthor';
import PostCardActions from './PostCardActions';
import formatDate from 'utils/formatDate';
import CircularRatingBar from 'components/CircularRatingBar';
import { PostType } from 'types/interfaces';
import GroupChip from 'components/GroupChip';
import TagChip from 'components/TagChip';
import { useTheme } from '@mui/material/styles';
import { useContext } from "react";
import { ModeContext } from 'context/ModeContext';
import './index.scss';

type Props = {
    postData: PostType,
}

const PostCard: React.FC<Props> = ({ postData }) => {
    const { palette } = useTheme();
    const formattedDate = formatDate(postData.createdAt);
    const { isDarkMode } = useContext(ModeContext);

    const renderTags = postData?.postTags?.split(' ').map((el, index) => {
        return (
            <TagChip
                key={index}
                text={el}
            />
        )
    })

    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                background: "unset",
                padding: "8px",
                borderRadius: "8px",
                transition: "0.3s",
                ":hover": {
                    background: isDarkMode ? palette.grey[800] : "white",
                }
            }}
        >
            <Box
                sx={{ position: "relative" }}
            >
                <CardMedia
                    component="img"
                    image={postData.mediaFiles[0]}
                    alt={postData.postTitle}
                    height="345"
                    sx={{
                        borderRadius: "8px"
                    }}
                />

                <PostCardAuthor
                    author={postData.author.userName}
                />

                <GroupChip
                    className="PostCard__GroupChip"
                    text={postData?.postGroup}
                />
            </Box>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateRows: "1fr",
                    gap: "8px",
                    padding: "16px 0",
                    height: "100%"
                }}
            >
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 40px",
                        gap: "8px",
                    }}
                >
                    <Box
                        sx={{
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: "2",
                            WebkitBoxLineClamp: "2",
                        }}
                    >
                        <Typography
                            variant="h6"
                            component="h3"
                            lineHeight="24px"
                            title={postData.postTitle}
                        >
                            {postData.postTitle}
                        </Typography>
                    </Box>

                    <CircularRatingBar
                        value={+postData.postRate}
                        minValue={1}
                        maxValue={10}
                    />
                </Box>
                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    {formattedDate}
                </Typography>

                <Box
                    sx={{
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: "3",
                        WebkitBoxLineClamp: "3",
                    }}
                >
                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >
                        {postData.postSummary}
                    </Typography>
                </Box>

                <Stack direction={"row"} spacing={1}>
                    {renderTags}
                </Stack>

                <PostCardActions postData={postData} />
            </Box>
        </Card >
    )
}

export default PostCard;