


import { createTheme } from '@mui/material/styles';

// mainBackgeoundColor: #f5f4f0
// font-color: #2c2c42
// accent-color-01: #fc3e02
// accent-color-02: #db83fd


const customizedTheme = createTheme({
    // breakpoints: {
    //     values: {
    //         xs: 0,
    //         sm: 575,
    //         md: 768,
    //         lg: 992,
    //         xl: 1200
    //     }
    // },
    palette: {
        mode: "dark",

    }
    // palette: {
    //     primary: {
    //         main: "#fff",
    //         light: "#red",
    //         dark: "black",
    //         contrastText: "orange"
    //     },
    //     // secondary: purple,
    // },
    // components: {
    //     MuiButton: {
    //         styleOverrides: {
    //             root: {
    //                 borderRadius: "5px",
    //                 backgroundColor: "red",
    //                 "&:hover": {
    //                     color: "black"
    //                 }
    //             }

    //         }
    //     }
    // }
});

// Define a light theme
const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: "#fc3e02",
            contrastText: "#fff"
        },
        secondary: {
            main: "#db82fc",
            contrastText: "#fff"
        },
        background: {
            default: "#f5f4f0",
        },
        text: {
            primary: "#333"
        }
    },
});

// Define a dark theme
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#fc3e02",
            contrastText: "#fff"
        },
        secondary: {
            main: "#db82fc",
            contrastText: "#fff"
        },
    },
});

export { lightTheme, darkTheme };