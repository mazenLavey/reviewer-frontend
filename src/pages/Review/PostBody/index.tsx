import React from 'react';
import { parse } from 'marked';
import Typography from '@mui/material/Typography';
import './index.scss';

type Props = {
    markdownContent: string
}

const PostBody: React.FC<Props> = ({ markdownContent }) => {
    const htmlContent = parse(JSON.parse(markdownContent));


    return (
        <Typography
            component="div"
        >
            <div
                className='PostBody'
                dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
        </Typography>
    );
}

export default PostBody;