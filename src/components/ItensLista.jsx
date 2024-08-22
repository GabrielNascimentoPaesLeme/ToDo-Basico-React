import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { Paper } from '@mui/material';
import DialogEdit from './DialogEdit';

//Passando os props definidos na Home
export default function ItensLista({nota, deletaItem, editaNota}) {

  const [editDialog, setEditDialog] = React.useState(false)

  const toggleDialog = () => {
    setEditDialog(!editDialog)
  }

  
  

  return (

    <>
      <DialogEdit editaNota={editaNota} open={editDialog} close={toggleDialog} nota={nota}/>
      <Paper style={{padding:'1rem 0'}}>
          <ListItem
            secondaryAction={
              //Botão para eliminar nota passando pela props o identificador unico
              <IconButton edge="end" aria-label="comments" onClick={() => deletaItem(nota.id)}>
                <DeleteOutlineIcon/>
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              {/* Utilizando da props para definir o texto que será adicionado na nota */}
              <ListItemText onClick={() => setEditDialog(true)} primary={nota.text}/>
            </ListItemButton>
          </ListItem>
    </Paper>
    </>
  );
}
