import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './index.scss';

const toolbarOptions = {
    options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'colorPicker', 'link', 'history'],
};

type Props = {
    field: string,
    setFieldValue: (field: string, value: any) => void
}

const TextEditor: React.FC<Props> = ({
    field,
    setFieldValue
}) => {

    const onEditorStateChange = (newEditorState: EditorState) => {
        const stringMarkdown = draftToMarkdown(convertToRaw(newEditorState.getCurrentContent()));

        setFieldValue(field, stringMarkdown);
    };

    return (
        <Editor
            wrapperClassName="TextEditor__wrapper"
            editorClassName="TextEditor__editor"
            toolbarClassName='TextEditor__toolbar'
            onEditorStateChange={onEditorStateChange}
            toolbar={toolbarOptions}
            placeholder='Write Your Review Here ...'
        />
    )
}

export default TextEditor;