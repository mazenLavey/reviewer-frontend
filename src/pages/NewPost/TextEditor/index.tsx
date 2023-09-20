import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import draftToMarkdown from 'draftjs-to-markdown';
import './index.scss';
import classNames from 'classnames';

const toolbarOptions = {
    options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'colorPicker', 'link', 'history'],
};

type Props = {
    field: string,
    setFieldValue: (field: string, value: any) => void,
    onBlur: (field: string, touched?: boolean | undefined) => void,
    error: boolean
}

const TextEditor: React.FC<Props> = ({
    field,
    setFieldValue,
    onBlur,
    error
}) => {

    const onEditorStateChange = (newEditorState: EditorState) => {
        const stringMarkdown = draftToMarkdown(convertToRaw(newEditorState.getCurrentContent()));
        setFieldValue(field, JSON.stringify(stringMarkdown));
    };

    return (
        <div
            className={classNames({
                "Editor": true, 
                "Editor--error": error
            })}
        >
            <Editor
                wrapperClassName="TextEditor__wrapper"
                editorClassName="TextEditor__editor"
                toolbarClassName='TextEditor__toolbar'
                onEditorStateChange={onEditorStateChange}
                onBlur={() => onBlur("postContent", true)}
                toolbar={toolbarOptions}
                placeholder='Write Your Review Here ...'
            />
        </div>
    )
}

export default TextEditor;