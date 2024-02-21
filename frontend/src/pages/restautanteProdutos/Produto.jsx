import { MoreVert } from '@mui/icons-material'
import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton,
     Menu, MenuItem, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { CarrinhoContext } from '../../CarrinhoContext'

const Produto = ({ produto }) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [open, setOpen] = useState(false)
    const {carrinho, setCarrinho} = useContext(CarrinhoContext)

    const handleClick = (evento) => {
        setAnchorEl(evento.currentTarget)
        setOpen(true)
    }

    return (
        <Card sx={{ maxWidth: 345, marginRight: 2 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <>
                        <IconButton aria-label="settings" onClick={handleClick}>
                            <MoreVert />
                        </IconButton>
                        <Menu open={open} anchorEl={anchorEl} onClose={(e) => 
                                setOpen(false)}>
                            <MenuItem onClick={() => {
                                setCarrinho([...carrinho, produto])
                            }}>Incluir no carrinho</MenuItem>
                        </Menu>
                    </>
                }
                title={produto.nome}
                subheader={"R$ " + produto.valor}
            />
            <CardMedia
                component="img"
                height="194"
                image={process.env.REACT_APP_HOST_API + produto.foto}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {produto.descricao}
                </Typography>

            </CardContent>
        </Card>
    )
}

export default Produto