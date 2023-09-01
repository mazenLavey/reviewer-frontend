import {useState} from 'react';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TextEditor from './TextEditor';
import { NewPostType } from 'types/interfaces';
import MyDropzone from './DropZone';
import { newPost } from 'api';
import { toastNotifications } from 'components/Toastify';
import Stack from '@mui/material/Stack';
import LoadingBackDrop from 'components/LoadingBackDrop';

const NewPost: React.FC = () => {
    const [isLoading, setLoading] = useState<boolean>(false);

    const { values, handleChange, handleBlur, setFieldValue, handleSubmit, errors, touched } = useFormik<NewPostType>({
        initialValues: {
            postTitle: '',
            postSummary: '',
            postContent: '',
            mediaFiles: []
        },
        onSubmit: async (values, actions) => {
            setLoading(true);
            const data = new FormData();
            data.append('postTitle', values.postTitle);
            data.append('postSummary', values.postSummary);
            data.append('postContent', values.postContent);

            for (let i = 0; i < values.mediaFiles.length; i++) {
                data.append('mediaFiles', values.mediaFiles[i])
            }

            try {
                const response = await newPost(data);
                setLoading(false)
                toastNotifications.success("Post created successfully!");

            } catch (error: any) {
                toastNotifications.error(error.message)
            }
        },
    });

    const renderImages = values?.mediaFiles?.map((file: File) => {
        return (
            <img key={file.name} src={URL.createObjectURL(file)} alt={file.name} />
        )
    })

    return (
        <>
        <form
            className=''
            onSubmit={handleSubmit}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px"
            }}>
            <h2>New Post</h2>
            <TextField
                variant="outlined"
                label="Title"
                id="postTitle"
                name="postTitle"
                value={values.postTitle}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.postTitle && !!errors.postTitle}
                helperText="Please enter your name"
            />
            <TextField
                variant="outlined"
                label="Summary"
                id="postSummary"
                name="postSummary"
                value={values.postSummary}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.postSummary && !!errors.postSummary}
                helperText="Please enter your name"
            />

            <MyDropzone setFieldValue={setFieldValue} />

            <Stack direction="row" spacing={2}>
                {renderImages}
            </Stack>

            <TextEditor
                field="postContent"
                setFieldValue={setFieldValue}
            />

            <Button
                variant="contained"
                type='submit'
            >
                Post
            </Button>
        </form>
        <LoadingBackDrop isActive={isLoading}/>
        </>
    );
};

export default NewPost;