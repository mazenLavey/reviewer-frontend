import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { NewPostType } from 'types/interfaces';

type Props = {
    handleChange: (e: any) => any,
    values: NewPostType
}

const Group = [
    {
        value: "games",
        label: "Games"
    },
    {
        value: "movies",
        label: "Movies"
    },
    {
        value: "music",
        label: "Music"
    },
    {
        value: "books",
        label: "Books"
    },
    {
        value: "sports",
        label: "Sports"
    },
    {
        value: "technology",
        label: "Technology"
    },
    {
        value: "food",
        label: "Food"
    },
]

const GroupSelect: React.FC<Props> = ({
    handleChange,
    values
}) => {

    const renderOptions = Group.map((el, index) => {
        return (
            <MenuItem key={index} value={el.value}>{el.label}</MenuItem>
        )
    })


    return (
        <FormControl fullWidth>
            <InputLabel id="postGroup-label">Group</InputLabel>
            <Select
                labelId="postGroup-label"
                label="group"
                id="postGroup"
                name="postGroup"
                value={values.postGroup}
                onChange={handleChange}
            >
                {renderOptions}
            </Select>
        </FormControl>
    )
}

export default GroupSelect;