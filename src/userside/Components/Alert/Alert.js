import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resertAlert } from '../../redux/slice/alertSlice';

function Alert(props) {

    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    console.log(alert);

    useEffect(() => {
        if (alert.text !== '') {
            enqueueSnackbar(alert.text,
                {
                    autoHideDuration: 2000,
                    variant: alert.color,
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right',
                    }
                })
        }

        const time = setTimeout(() => {
            dispatch(resertAlert())
        }, 2000)

        return () => {
            clearTimeout(time);
        }

    }, [alert.text])

    return (
        <div>

        </div>
    );
}

export default Alert;