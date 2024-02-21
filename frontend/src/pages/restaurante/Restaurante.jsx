import React, { useState } from 'react'
import Navegacao from '../../components/navegacao/Navegacao'
import { Alert, Box, Snackbar, TextField }from '@mui/material'
import  FileUpload  from 'react-mui-fileuploader'
import { LoadingButton } from '@mui/lab'
import api from '../../services/api'

const Restaurante = () => {
    const [nome, setNome] = useState('')
    const [logo, setLogo] = useState('')
    const [sucesso, setSucesso] = useState('')
    const [error, setError] = useState('')

    const fileChange = (files) =>{
        setLogo(files[0])
    }
    const handleSubmit = ()=>{
        const formData = new FormData()
        formData.append('nome',nome)
        formData.append('logo',logo)

        api.post('/restaurantes', formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        }).then(({data})=>{
            setSucesso (true)
    }).catch((error)=>{
        setError (error.response.data.error)
    })
}
  return (
    <>
      <Navegacao/>
      <Box sx={{my: 3, mx: 3, width:'50%'}}>
      <Snackbar open={sucesso} autoHideDuration={6000}
                    onClose={() => { setSucesso("") }}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert severity="success" sx={{ width: '100%' }}>
                        Restaurante Cadastrado com Sucesso
                    </Alert>
                </Snackbar>
                <Snackbar open={error.length > 0} autoHideDuration={6000}
                    onClose={() => { setError("") }}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert severity="error" sx={{ width: '100%' }}>
                        {error}
                    </Alert>
                </Snackbar>
        <TextField
        label='Nome:' variant='standard'
        fullWidth sx={{mb:2}}
        onChange={(e) => {setNome(e.target.value)}} value={nome}/>

        <FileUpload  sx={{ bgcolor: 'error' }}
        title='Logo do seu restaurante'
        header='Arraste para essa área'
        leftLabel = 'ou'
        buttonLabel = 'Clique aqui'
        rightLabel = 'para selecionar'
        showPlaceholderImage = {true}
        onFilesChange={fileChange}
        />
        <LoadingButton sx={{mt:2}} color='error' variant='contained'
          fullWidth onClick={handleSubmit}>
            Salvar
          </LoadingButton>

      </Box>
    </>
  )
}

export default Restaurante
