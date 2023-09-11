import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { NewPostType } from 'types/interfaces';
import { FormikErrors, FormikTouched } from 'formik';
import "./index.scss";

type Props = {
    setFieldValue: (field: string, value: any) => any,
    values: NewPostType,
    errors: FormikErrors<NewPostType>,
    handleBlur: (e: any) => void
    touched: FormikTouched<NewPostType>
}

const TagsInput: React.FC<Props> = ({
    setFieldValue,
    values,
    errors,
    touched,
    handleBlur
}) => {
    const [tags, setTags] = useState<string>('')

    const handleTags = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target;
        setTags(value)
    }

    const SaveTags = (): void => {
        const splitTags: string[] = tags.trim().split(' ');
        const updateTags = Array.from(new Set([...values.postTags, ...splitTags]));
        setFieldValue("postTags", updateTags);
        setTags('')
    }

    const handleDelete = (value: string) => {
        const updateTags = values?.postTags?.filter(tag => tag !== value);
        setFieldValue("postTags", updateTags);
    }

    const renderTags = values?.postTags.map((el, index) => {
        return (
            <Chip
                key={index}
                label={el}
                onDelete={() => handleDelete(el)}
            />
        )
    })

    return (
        <Box
            className="TagsInput"
        >
            <Box
                sx={{
                    display: "flex",
                    gap: "8px"
                }}
            >
                <TextField
                    variant="standard"
                    label="Tags"
                    id="postTags"
                    name="postTags"
                    value={tags}
                    onChange={handleTags}
                    onBlur={handleBlur}
                    error={!!touched.postTags && !!errors.postTags}
                    helperText={`${values?.postTags.length} / 10`}
                />
                <Button
                    variant="contained"
                    type='button'
                    onClick={SaveTags}
                >
                    add
                </Button>
            </Box>

            <Box
                className="TagsInput__container"
            >
                {renderTags}
            </Box>
        </Box >
    )
}

export default TagsInput;