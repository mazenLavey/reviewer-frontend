import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import CircularRatingBar from 'components/CircularRatingBar';
import { NewPostType } from 'types/interfaces';
import './index.scss';

type Props = {
    values: NewPostType,
    handleChange: (e: any) => void
}

const RatingInput: React.FC<Props> = ({
    values,
    handleChange
}) => {

    return (
        <Box
            className="RatingInput__wapper"
        >
            <Box
                className="RatingInput"
            >
                <p>Your Rate</p>
                <Slider
                    aria-label="post rating"
                    valueLabelDisplay="auto"
                    name='postRate'
                    defaultValue={5}
                    step={1}
                    min={1}
                    max={10}
                    onChange={handleChange}
                    marks
                />
            </Box>
            <CircularRatingBar
                className='RatingInput__RatingBar'
                maxValue={10}
                minValue={1}
                value={values.postRate}
            />
        </Box>
    )
}

export default RatingInput;