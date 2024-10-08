import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogEdit({open, close, nota, editaNota}) {

    const [notaEditada, setNotaEditada] = React.useState(nota.text)

    const trocaNota = () => {
        editaNota(nota.id, notaEditada)
        close()
    }

  return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={close}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
      >
        <DialogTitle>{"Edite sua Tarefa"}</DialogTitle>
        <DialogContent>
          <TextField defaultValue={notaEditada} fullWidth onChange={(e) =>setNotaEditada(e.target.value) }/>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancelar</Button>
          <Button onClick={trocaNota} >Editar</Button>
        </DialogActions>
      </Dialog>
  );
}
