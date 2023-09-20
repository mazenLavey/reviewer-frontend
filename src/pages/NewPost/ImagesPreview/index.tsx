import Box from '@mui/material/Box';
import CancelIcon from '@mui/icons-material/Cancel';
import './index.scss';

type Props = {
    mediaFiles: File[],
    setFieldValue: (field: string, value: any) => void
}

const ImagesPreview: React.FC<Props> = ({
    mediaFiles,
    setFieldValue
}) => {

    const handleClick = (value: string) => {
        const updatedMediaFiles = mediaFiles?.filter((file: any) => file.name !== value)
        setFieldValue("mediaFiles", updatedMediaFiles)
    }

    const renderImages = mediaFiles?.map((file: any) => {
        return (
            <Box
                key={file.name}
                sx={{
                    position: "relative",
                    aspectRatio: "16 / 9",
                }}
            >
                <CancelIcon
                    className='ImagesPreview__delete-icon'
                    onClick={() => handleClick(file.name)}
                />
                <img
                    className='ImagesPreview__img'
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                />
            </Box>
        )
    });
    return (
        <Box
            className="NewPost__images-preview"
        >
            {renderImages}
        </Box>
    )
}

export default ImagesPreview;