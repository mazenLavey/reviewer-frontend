import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { TextField, Box, Button, Typography, Stack, CircularProgress } from '@mui/material';
import TextEditor from './TextEditor';
import Dropzone from './DropZone';
import { toastNotifications } from 'components/Toastify';
import TagsInput from './TagsInput';
import GroupSelect from './GroupSelect';
import RatingInput from './RatingInput';
import { NewPostType } from 'types/interfaces';
import { newPost } from 'api';
import route from 'routes';
import { NewPostSchema } from 'schema/NewPostSchema';
import ErrorMessage from 'components/ErrorMessage';
import "./index.scss";
import { error } from 'console';

const NewPost: React.FC = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const { values, handleChange, handleBlur, setFieldValue, setFieldTouched, handleSubmit, errors, touched } = useFormik<NewPostType>({
        initialValues: {
            postTitle: '',
            postSummary: '',
            postContent: '',
            postGroup: "games",
            postRate: 5,
            postTags: [],
            mediaFiles: [],
        },
        validationSchema: NewPostSchema,
        onSubmit: async (values, actions) => {
            setLoading(true);
            const data: FormData = new FormData();
            data.append('postTitle', values.postTitle);
            data.append('postSummary', values.postSummary);
            data.append('postContent', values.postContent);
            data.append('postGroup', values.postGroup);
            data.append('postRate', values.postRate.toString());
            data.append('postTags', values.postTags.join(' '));

            for (let i = 0; i < values.mediaFiles.length; i++) {
                data.append('mediaFiles', values.mediaFiles[i])
            }

            try {
                const response = await newPost(data);
                setLoading(false)
                actions.resetForm();
                navigate('/')
                toastNotifications.success("Post created successfully!");
            } catch (error: any) {
                setLoading(false)
                toastNotifications.error(error.message)
            }
        },
    });

    const handleCancel = () => {
        navigate(route.home)
    }

    const postTitleIsError = !!touched.postTitle && !!errors.postTitle;
    const postSummaryIsError = !!touched.postSummary && !!errors.postSummary;
    const postContentIsError = !!touched.postContent && !!errors.postContent;
    const postTagstIsError = !!touched.postTags && !!errors.postTags;
    const mediaFilesIsError = !!touched.mediaFiles && !!errors.mediaFiles;

    return (
        <Box
            className='NewPost__form'
            component="form"
            onSubmit={handleSubmit}
        >
            <Typography
                variant="h5"
                component="h2"
            >
                New Post
            </Typography>

            <TextField
                variant="outlined"
                label="Title"
                id="postTitle"
                name="postTitle"
                value={values.postTitle}
                onChange={handleChange}
                onBlur={handleBlur}
                error={postTitleIsError}
                helperText={`${values?.postTitle?.length} / 100`}
            />
            {postTitleIsError && <ErrorMessage message={errors.postTitle} />}

            <TextField
                variant="outlined"
                label="Summary"
                id="postSummary"
                name="postSummary"
                value={values.postSummary}
                onChange={handleChange}
                onBlur={handleBlur}
                error={postSummaryIsError}
                helperText={`${values?.postSummary?.length} / 300`}
                rows={2}
                multiline
            />
            {postSummaryIsError && <ErrorMessage message={errors.postSummary} />}

            <Box
                className="NewPost__wrapper"
            >
                <GroupSelect
                    values={values}
                    handleChange={handleChange}
                />
                <RatingInput
                    handleChange={handleChange}
                    values={values}
                />
            </Box>

            <TagsInput
                errors={errors}
                touched={touched}
                values={values}
                setFieldValue={setFieldValue}
                handleBlur={handleBlur}
            />
            {postTagstIsError && <ErrorMessage message={errors.postTags as string} />}

            <TextEditor
                field="postContent"
                setFieldValue={setFieldValue}
                onBlur={setFieldTouched}
                error={postContentIsError}
            />
            {postContentIsError && <ErrorMessage message={errors.postContent} />}

            <Dropzone
                setFieldValue={setFieldValue}
                mediaFiles={values.mediaFiles}
                onBlur={handleBlur}
                error={mediaFilesIsError}
            />

            {mediaFilesIsError && <ErrorMessage message={errors.mediaFiles as string} />}

            <Stack
                direction="row"
                spacing={2}
                sx={{
                    justifyContent: "flex-end"
                }}
            >
                <Button
                    variant="outlined"
                    type='button'
                    onClick={handleCancel}
                    disabled={isLoading}
                    sx={{
                        width: "200px"
                    }}
                >
                    cancel
                </Button>
                <Button
                    variant="contained"
                    type='submit'
                    disabled={isLoading}
                    endIcon={ isLoading && <CircularProgress size={20}/>}
                    sx={{
                        width: "200px"
                    }}
                >
                    Post
                </Button>
            </Stack>
        </Box>
    );
};

export default NewPost;