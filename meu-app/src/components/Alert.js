import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Editar
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{
        borderRadius: 5,
        color: "red",
        
    }}>Cadastrar Politica de Estoque</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            id="otimo"
            label="Otimo"
            type="text"
            fullWidth
            variant="outlined"
          />

          <TextField
            autoFocus
            margin="dense"
            id="bom"
            label="Bom"
            type="text"
            fullWidth
            variant="outlined"
          />

          <TextField
            autoFocus
            margin="dense"
            id="critico"
            label="Critico"
            type="text"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button style={{
        borderRadius: 5,
        backgroundColor: "red",
        
    }}
    variant="contained"
     onClick={handleClose}>Cadastrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
