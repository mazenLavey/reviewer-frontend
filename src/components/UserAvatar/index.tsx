import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

const stringToColor = (string: string) => {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
}

const stringAvatar = (name: string) => {
    const initials = name.split(' ').map(word => word[0]).join('');

    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: initials,
    };
};

type Props = {
    name: string
}

const UserAvatar: React.FC<Props> = ({ name }) => {

    return (
        <Box
            sx={{
                border: "4px solid #a1a1a11f",
                borderRadius: "50%",
            }}
        >
            <Avatar
                {...stringAvatar(`${name}`)}
                sx={{
                    textTransform: "uppercase"
                }}
            />
        </Box>
    )
}


export default UserAvatar;