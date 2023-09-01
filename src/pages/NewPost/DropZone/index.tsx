import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

type Props = {
    setFieldValue: (field: string, value: any) => void
}

const MyDropzone: React.FC<Props> = ({ setFieldValue }) => {
    const onDrop = useCallback((acceptedFiles: any) => {
        setFieldValue("mediaFiles", acceptedFiles)
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> 
                    :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
    )
}

export default MyDropzone;