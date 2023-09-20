import { useState } from 'react';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import { PostType } from 'types/interfaces';
import formatDate from 'utils/formatDate';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { deletePost } from 'api/index';
import { toastNotifications } from 'components/Toastify';
import './index.scss';

type Props = {
    postsData: PostType[]
}

type Rows = {
    id: string,
    title: string,
    poster: string,
    group: string,
    likes: number,
    comments: number,
    createdAt: string
}

const PostsTable: React.FC<Props> = ({ postsData }) => {
    const [selectedPosts, setSelectedPosts] = useState<string[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);

    const columns: GridColDef[] = [
        { field: 'title', headerName: 'Title', width: 150 },
        {
            field: 'poster',
            headerName: 'Poster',
            renderCell: (params): JSX.Element => {
                return (
                    <img
                        className='PostsTable__Poster'
                        src={params.value}
                        alt={params.row.title}
                    />
                )
            },
            width: 200
        },
        { field: 'group', headerName: 'Group', width: 100 },
        { field: 'likes', headerName: 'Likes', width: 100 },
        { field: 'comments', headerName: 'Comments', width: 100 },
        { field: 'createdAt', headerName: 'publish Date', width: 140 },
    ];

    const rows: Rows[] = [];

    const convertToRow = postsData.map(post => {
        const postToRow = {
            id: post._id,
            title: post.postTitle,
            poster: post.mediaFiles[0],
            group: post.postGroup,
            likes: post.likes.length,
            comments: post.comments.length,
            createdAt: formatDate(post.createdAt)
        }

        rows.push(postToRow)
        return post
    })

    const handleSelection = (postIds: GridRowSelectionModel): void => {
        const selected: any[] = postIds
        setSelectedPosts(selected)
    }

    const handleDelete = async () => {
        try {
            setLoading(true)
            const deletePosts = selectedPosts.map(async (postId) => {
                const response = await deletePost(postId);

                if (response.status !== 200) {
                    toastNotifications.error(`Failed to delete post with ID: ${postId}`)
                }
            });

            const response = await Promise.all(deletePosts);
            toastNotifications.success("Posts deleted successfully!");
            setLoading(false)
        } catch (err: any) {
            toastNotifications.error("Something wrong, posts Not deleted!");
            setLoading(false)
        }
    }

    return (
        <>
            <ButtonGroup
                variant="contained"
                aria-label="actions buttons"
                disabled={isLoading}
                sx={{
                    marginBottom: "20px"
                }}
            >
                <Button
                    startIcon={isLoading ? <CircularProgress size={20} /> : <DeleteOutlineIcon />}
                    disabled={selectedPosts.length === 0}
                    onClick={handleDelete}
                    color='error'
                >
                    delete
                </Button>
            </ButtonGroup>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    onRowSelectionModelChange={handleSelection}
                    checkboxSelection
                    rowHeight={100}
                    autoHeight
                />
            </div>
        </>
    )
}

export default PostsTable;