import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Alert = (title, message, type) => {
    if(type === 'logout') {
        confirmAlert({
            title: title,
            message: message,
            buttons: [{
                label: 'Yes',
                onClick: () => {
                    // localStorage.clear();
                }
            },
            {
                label: 'No'
            }]
        })
    } else {
        confirmAlert({
            title: title,
            message: message,
            buttons: [{
                label: 'Ok',
            }]
        })
    }
}

export default Alert;