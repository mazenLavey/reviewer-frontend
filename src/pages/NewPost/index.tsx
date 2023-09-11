import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { TextField, Box, Button, Typography, Stack } from '@mui/material';
import TextEditor from './TextEditor';
import Dropzone from './DropZone';
import { toastNotifications } from 'components/Toastify';
import LoadingBackDrop from 'components/LoadingBackDrop';
import TagsInput from './TagsInput';
import GroupSelect from './GroupSelect';
import RatingInput from './RatingInput';
import { NewPostType } from 'types/interfaces';
import { newPost } from 'api';
import "./index.scss";
import ImagesPreview from './ImagesPreview';

const NewPost: React.FC = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const { values, handleChange, handleBlur, setFieldValue, handleSubmit, errors, touched } = useFormik<NewPostType>({
        initialValues: {
            postTitle: '',
            postSummary: '',
            postContent: '',
            postGroup: "games",
            postRate: 5,
            postTags: [],
            mediaFiles: [],

        },
        onSubmit: async (values, actions) => {
            // setLoading(true);
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





    return (
        <>
            <form
                className='NewPost__form'
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
                    error={!!touched.postTitle && !!errors.postTitle}
                    helperText={`${values?.postTitle?.length} / 100`}
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
                    helperText={`${values?.postSummary?.length} / 100`}
                    rows={2}
                    multiline
                />


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

                <TextEditor
                    field="postContent"
                    setFieldValue={setFieldValue}
                />

                <Dropzone setFieldValue={setFieldValue} />

                <ImagesPreview
                    values={values}
                    setFieldValue={setFieldValue}
                />

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
                        sx={{
                            width: "200px"
                        }}
                    >
                        cancel
                    </Button>
                    <Button
                        variant="contained"
                        type='submit'
                        sx={{
                            width: "200px"
                        }}
                    >
                        Post
                    </Button>
                </Stack>
            </form>
            <LoadingBackDrop isActive={isLoading} />
        </>
    );
};

export default NewPost;