import Chip from '@mui/material/Chip';

type Props = {
    text: string,
    className?: string
}

const TagChip: React.FC<Props> = ({
    text,
    className
}) => {
    return (
        <Chip
            className={className}
            label={text}
            sx={{
                borderRadius: "8px",
                maxWidth: "100px",
                width: "fit-content",
                textTransform: "capitalize"
            }}
        />
    )
}

export default TagChip;