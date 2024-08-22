import { Container, List } from '@mui/material'
import React, { useState } from 'react'
import Form from '../components/Form'
import ItensLista from '../components/ItensLista'


const Home = () => {

  //Cria as anotações passando uma lista vazia
  const [notas, setNotas] = useState([])

//Crio cada nota que ficara nas anotações
  const criaItem = (nota) => {

    //seto o novo valor da nota criada usando o valor do parametro como referência
    setNotas([...notas, nota])
  }
  //Deleto as notas de acordo com o id
  const deletaItem = (id) =>{

    //Fintrando as notas: Notas que o id for igual ao passado como prâmetro serão ignoradas
    let notasFiltrados = notas.filter((nota) => nota.id !== id)

    //Seto as notas, eliminando as que foram ignoradas na filtragem
    setNotas(notasFiltrados)
  }

  

  const editaNota = (id, notaEditada) => {
    let anotacoes = [...notas]

    anotacoes.splice(id, 1, {text: notaEditada, id:id})
    setNotas(anotacoes)
  }
  return (
    <div>
        <Container maxWidth='xs' style={{ marginTop: "1rem"}}>
            {/* passo a função de criar item com props para o form */}
            <Form criaItem={criaItem}/>

            <List>
              {/* Mapeia as anotações criadas, percorrendo nota por nota (item). */}
              {notas.map((nota) => (

                /* não esquecer de passar a key como o identificador unico */
                <div key={nota.id} style={{marginTop: '1rem'}}>

                  {/* utilizando props */}
                  <ItensLista editaNota={editaNota}  nota={nota} deletaItem={deletaItem}/>
                </div>
              ))}

            </List>

        </Container>
    </div> 
  )
}

export default Home