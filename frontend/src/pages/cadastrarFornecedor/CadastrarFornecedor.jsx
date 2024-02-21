import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LogoIfood from "./logo1.png"
import { Alert, Container, Snackbar, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import api from '../../services/api'
import { useNavigate } from 'react-router-dom';

function CadastrarFornecedor() {
    const navigate = useNavigate()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [sucesso, setSucesso] = useState('')
    const [error, setError] = useState('')
    const handleClick = () => {
        if (nome !== '' && email !== '' && senha !== ''){
            api.post('/registrar', {
                nome: nome,
                email: email,
                senha: senha,
                tipo: 'R'
            }).then(({ data }) => {
                setSucesso(true)
                setEmail('')
                setNome('')
                setSenha('')
            }).catch((e) => {
                setError(e.response.data.error)
            })
        } else {
            setError("Preencha todos os Campos")  
        }
    }

    return (
        <>
            <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: '150px' }}>
            <Snackbar open={sucesso} autoHideDuration={6000}
                    onClose={() => { setSucesso("") }}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert severity="success" sx={{ width: '100%' }}>
                        Fornecedor Cadastrado com Sucesso
                    </Alert>
                </Snackbar>
                <Snackbar open={error.length > 0} autoHideDuration={6000}
                    onClose={() => { setError("") }}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert severity="error" sx={{ width: '100%' }}>
                        {error}
                    </Alert>
                </Snackbar>
                <Card sx={{ maxWidth: 545 }}>
                    <CardMedia
                        sx={{ height: 340 }}
                        image={LogoIfood}
                        title="logo ifood"
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h4" align='center' component="div">
                            CADASTRAR FORNECEDOR
                        </Typography>
                        <TextField
                            id="standard-nome"
                            sx={{ mb: 3 }}
                            label="Nome"
                            variant="standard"
                            fullWidth
                            onChange={(e) => setNome(e.target.value)}
                            value={nome}
                        />
                        <TextField
                            id="standard-email"
                            sx={{ mb: 3 }}
                            label="E-mail"
                            variant="standard"
                            fullWidth
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <TextField
                            id="standard-senha"
                            type='password'
                            sx={{ mb: 3 }}
                            label="Senha"
                            variant="standard"
                            fullWidth
                            onChange={(e) => setSenha(e.target.value)}
                            value={senha}
                        />
                        <LoadingButton color='error' variant='contained'
                            fullWidth onClick={handleClick}>
                            Salvar
                        </LoadingButton>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button size="medium" sx={{ color: '#212121' }}
                            onClick={() => { navigate('/login') }}
                        >Login</Button>
                        <Button size="medium" sx={{ color: '#212121' }}
                            onClick={() => { navigate('/cadastrarcliente') }}
                        >Cadastrar Cliente</Button>
                    </CardActions>
                </Card>
            </Container>
        </>
    )
}

export default CadastrarFornecedor


