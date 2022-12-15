import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { itemType } from '../pages/Home';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type Props = {
  handleClearShoppingCart: (arg0: any) => void;
};

const TransitionsModal: React.FC<Props> = ({ handleClearShoppingCart }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant='outlined' color='error'>
        Clear Cart
      </Button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} className='modal-wrapper'>
          <Box sx={style}>
            <Typography
              id='transition-modal-title'
              variant='h6'
              component='h2'
              color='error'
            >
              CLEAR CART{' '}
            </Typography>
            <Typography id='transition-modal-description' sx={{ mt: 2 }}>
              Are you sure you want to clear your entire shopping cart?{' '}
            </Typography>

            <div className='modal-button-wrapper'>
              <Button variant='contained' color='success' onClick={handleClose}>
                CANCEL
              </Button>
              <Button
                variant='contained'
                color='error'
                onClick={() => {
                  handleClearShoppingCart(null);
                  handleClose();
                }}
              >
                CONFIRM
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionsModal;
