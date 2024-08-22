import React, { useState } from 'react'
import { Button, Paper, TextField } from '@mui/material'


//Passo a props definida na Home
const Form = ({criaItem}) => {

  const textArea = document.getElementById("outlined-basic")

  // Defino o texto que será passado para criação da nota
  const [text, setText] = useState(null);

  //defino o id (key) de cada nota que será gerada
  const [id, setId] = useState(0)

  // Função para criar a nota de acordo com o texto digitado
  const criaNota = (text) => {

    if(text){
      //transformando a nota em objeto para identificação de cada uma
      const notaObj = {id: id, text: text}

      //itero sobre o id, adicionando sempre um novo id a cada nota
      setId(id + 1)

      //utilizo a função de criar nota recebendo o objeto com identificador
      criaItem(notaObj)

      textArea.value = ""
      textArea.focus()      
    }
  }
  
  return (
    <Paper style={{ padding: '1rem' }}>
        <div style={ {display: 'flex', justifyContent: 'center', gap:'5px' }}>

            {/* Local onde a nota será digitada, utilizando o target para receber o valor */}
            <TextField id="outlined-basic" label="Adicione a Tarefa" variant="outlined" fullWidth onChange={(e) => setText(e.target.value)} />

            {/* Botão para criar a nota*/}
            <Button variant="text" onClick={() => criaNota(text)}>Add</Button>
        </div>


    </Paper>
  )
}

export default Form