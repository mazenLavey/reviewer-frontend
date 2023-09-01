import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import PermScanWifiIcon from '@mui/icons-material/PermScanWifi';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {
    return (
        <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            theme="dark"
        />
    );
};


export const toastNotifications = {
    warn: (message: string) => toast.warn(message, {
        icon: <WarningIcon style={{ color: "orange" }} />
    }),
    error: (message: string) => toast.error(message, {
        icon: <ErrorIcon style={{ color: "red" }} />
    }),
    success: (message: string) => toast.success(message, {
        icon: <CheckCircleIcon />
    }),
    info: (message: string) => toast.info(message, {
        icon: <PermScanWifiIcon style={{ color: "#7f19f2" }} />
    })
}

export default Toastify;