
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const toolbarOptions = {
    options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'colorPicker', 'link', 'history', 'emoji'],
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
            wrapperClassName="textEditor__wrapper"
            editorClassName="textEditor__editor"
            toolbarClassName='textEditor__toolbar'
            onEditorStateChange={onEditorStateChange}
            toolbar={toolbarOptions}
        />
    )
}

export default TextEditor;