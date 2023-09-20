import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import classNames from 'classnames';
import ImagesPreview from '../ImagesPreview';
import Stack from '@mui/material/Stack';
import './index.scss';

type Props = {
    setFieldValue: (field: string, value: any) => void,
    mediaFiles: File[],
    onBlur: (e: any) => void,
    error: boolean
}

const Dropzone: React.FC<Props> = ({
    setFieldValue,
    mediaFiles,
    onBlur,
    error
}) => {

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const updatedMediaFiles = [...mediaFiles, ...acceptedFiles]
        setFieldValue("mediaFiles", updatedMediaFiles)
    }, []);


    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div
            className={classNames({
                'Dropzone': true,
                'Dropzone--active': isDragActive,
                'Dropzone--error': error,
            })}
            {...getRootProps()}
        >
            <input {...getInputProps()} onBlur={onBlur}/>
            {
                isDragActive ?
                    <p>Drop the files here ...</p>
                    :
                    mediaFiles.length > 0 ?
                        <ImagesPreview
                            mediaFiles={mediaFiles}
                            setFieldValue={setFieldValue}
                        />
                        :
                        <Stack
                            direction="column"
                            spacing={2}
                            alignItems={"center"}
                        >
                            <CloudUploadIcon
                                sx={{
                                    color: "gray",
                                    fontSize: "80px"
                                }}
                            />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </Stack>
            }
        </div >
    )
}

export default Dropzone;