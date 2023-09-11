import React from 'react';
import { parse } from 'marked';

type Props = {
    markdownContent: string
}

const PostBody: React.FC<Props> = ({ markdownContent }) => {
    const htmlContent = parse(markdownContent);

    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
}

export default PostBody;