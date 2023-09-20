import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';

type Props = {
    text: string,
    className?: string
}

const GroupChip: React.FC<Props> = ({
    text,
    className
}) => {

    const { palette } = useTheme();

    return (
        <Chip
            className={className}
            label={text}
            sx={{
                borderRadius: "8px",
                maxWidth: "100px",
                width: "fit-content",
                textTransform: "capitalize",
                color: palette.secondary.contrastText,
                backgroundColor: palette.secondary.main
            }}
        />
    )
}

export default GroupChip;