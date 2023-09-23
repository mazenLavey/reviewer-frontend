
import * as yup from "yup";
import { NewPostType } from "types/interfaces";

export const NewPostSchema = yup.object<NewPostType>({
    postTitle: yup
        .string()
        .max(100, 'Post title should not exceed 100 characters')
        .required('Post title is required'),
    postSummary: yup
        .string()
        .max(300, 'Post summary should not exceed 300 characters')
        .required('Post summary is required'),
    postContent: yup.string().required('Post content is required'),
    postGroup: yup
        .string()
        .oneOf(
            ['games', 'movies', 'music', 'books', 'sports', 'technology', 'food'],
            'Invalid post group'
        )
        .required('Post group is required'),
    postRate: yup.number().required('Post rate is required'),
    postTags: yup.array().min(1, 'Post Tags is required').required('Post Tags is required'),
    mediaFiles: yup.array().min(1, 'Images are required').required('Images are required'),
});
