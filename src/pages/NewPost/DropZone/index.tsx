import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import classNames from 'classnames';
import './index.scss';

type Props = {
    setFieldValue: (field: string, value: any) => void
}

const Dropzone: React.FC<Props> = ({
    setFieldValue
}) => {

    const onDrop = useCallback((acceptedFiles: any) => {
        setFieldValue("mediaFiles", acceptedFiles)
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div
            className={classNames({
                'Dropzone': true,
                'Dropzone--active': isDragActive,
            })}
            {...getRootProps()}
        >
            <input {...getInputProps()} />
            <CloudUploadIcon
                sx={{
                    color: "gray",
                    fontSize: "80px"
                }}
            />
            {
                isDragActive ?
                    <p>Drop the files here ...</p>
                    :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
    )
}

export default Dropzone;