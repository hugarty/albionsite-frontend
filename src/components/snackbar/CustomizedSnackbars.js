import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({error, handleClose}) {
  const open = error !== false;
  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">{error}</Alert>
    </Snackbar>
  );
}
