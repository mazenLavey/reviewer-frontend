import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';

type Props = {
    color: string,
    children: React.ReactNode,
    isOpen: boolean,
    onClose: () => void,
    onOpen: () => void,
    isActive: boolean,
}

const DrawerMenu: React.FC<Props> = ({
    color,
    children,
    isOpen,
    onClose,
    onOpen,
    isActive
}) => {
    return (
        <>
            {isActive ?
                <>
                    <Box
                        onClick={onOpen}
                        sx={{
                            ":active": {
                                scale: "0.95"
                            }
                        }}
                    >
                        <MenuIcon
                            fontSize='large'
                            sx={{
                                color: color,
                                cursor: "pointer",
                            }}
                        />
                    </Box>
                    <SwipeableDrawer
                        anchor="right"
                        open={isOpen}
                        onClose={onClose}
                        onOpen={onOpen}
                        sx={{
                            "& .MuiPaper-root": {
                                padding: "20px",
                                width: "50%",
                                gap: "16px",
                                alignItems: "flex-start",
                            }
                        }}
                    >
                        <Box
                            onClick={onClose}
                        >
                            <CancelIcon
                                fontSize='medium'
                                sx={{
                                    position: "absolute",
                                    top: "16px",
                                    right: "16px"
                                }}
                            />
                        </Box>
                        {children}
                    </SwipeableDrawer>
                </>
                :
                children
            }
        </>
    )
}

export default DrawerMenu;