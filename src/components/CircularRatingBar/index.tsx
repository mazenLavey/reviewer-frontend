import Box from '@mui/material/Box';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import classNames from "classnames";
import { useTheme } from '@mui/material/styles';
import './index.scss';

type Props = {
    value: number,
    minValue: number,
    maxValue: number,
    className?: string
}

const CircularRatingBar: React.FC<Props> = ({
    value,
    minValue,
    maxValue,
    className,
}) => {

    const { palette } = useTheme();

    return (
        <Box className={classNames(className, {
            "CircularRatingBar": true,
        })}>
            <CircularProgressbar
                value={value}
                minValue={minValue}
                maxValue={maxValue}
                text={`${value}`}
                styles={buildStyles({
                    pathColor: palette.primary.main,
                    textColor: palette.text.primary,
                    textSize: "32px",
                })}
            />
        </Box>
    )
}

export default CircularRatingBar;