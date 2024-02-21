import React, { useContext, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { AddShoppingCart, Home, LunchDining, Restaurant, ShoppingBag, ShoppingCart } from '@mui/icons-material';
import {  Divider, Drawer, List, Menu, MenuItem } from '@mui/material';
import ItemDaLista from '../../components/itemDaLista/ItemDaLista';
import { CarrinhoContext } from '../../CarrinhoContext'
import api from '../../services/api';
import logo from './logo4.png'


function Navegacao() {
  const navigate = useNavigate()
  const [drawer, setDrawer] = React.useState(false)
  const tipoUsuario = localStorage.getItem('user-type')
  const { carrinho, setCarrinho } = useContext(CarrinhoContext)
  const [abrirMenu, setAbrirMenu] = useState(false)
  const [elemento, setElemento] = useState(null)

  const handleSair = () => {
    localStorage.removeItem('user-token')
    localStorage.removeItem('user-type')
    navigate('/login')
  }

  const handleFinalizarPedido = () => {
    api.post('/pedidos', {
      restaurante_id: carrinho[0].restaurante_id
    }).then(({ data }) => {
      const pedido_id = data.id
      carrinho.forEach((produto) => {
        api.post('/pedidos/' + pedido_id + '/produtos/' + produto.id, {
          quantidade: 1
        }).then(({ data }) => {
          setCarrinho([])
          navigate('/meuspedidos')
        })
      })
    })
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: 'red' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => { setDrawer(true) }}
            >
              <MenuIcon />
            </IconButton>
            
            {<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src={logo} alt="" height={30} />
            </Typography> }
            {
              tipoUsuario === 'C' && (
                <IconButton IconButton color="inherit" onClick={(e) => { setAbrirMenu(true); setElemento(e.target) }} >
                  <ShoppingCart />
                </IconButton>
              )
            }
            <Menu open={abrirMenu} anchorEl={elemento} onClose={() => { setAbrirMenu(false) }}>
              {
                carrinho.length > 0 && (
                  <>
                    {
                      carrinho.map((produto) => (
                        <MenuItem>{produto.nome}</MenuItem>
                      ))

                    }
                    < Divider />
                    <MenuItem>
                      <Button variant='contained' onClick={handleFinalizarPedido}>
                        FINALIZAR PEDIDO
                      </Button>
                    </MenuItem>
                  </>
                )
              }
            </Menu>
            <Button color="inherit" onClick={handleSair}>Sair</Button>
          </Toolbar>
          <Drawer open={drawer} onClose={(e) => setDrawer(false)}>
            <Box sx={{ width: 250 }}>
              <List>
                <ItemDaLista texto='Home' icone={<Home />} link='/dashboard' />
                {(tipoUsuario === 'R' && <ItemDaLista texto='Restaurante' icone={<Restaurant />}
                  link='/restaurante' />)}
                {(tipoUsuario === 'R' && <ItemDaLista texto='Produtos' icone={<LunchDining />}
                  link='/produtos' />)}
                {(tipoUsuario === 'R' && <ItemDaLista texto='Pedidos' icone={<ShoppingCart />}
                  link='/pedidos' />)}
                {(tipoUsuario === 'C' && <ItemDaLista texto='Fazer Pedido' icone={<AddShoppingCart />}
                  link='/fazerpedido' />)}
                {(tipoUsuario === 'C' && <ItemDaLista texto='Meus Pedidos' icone={<ShoppingBag />}
                  link='/meuspedidos' />)}
                <Divider />
                <Box sx={{ mt: 2, mx: 2 }}>
                  {(tipoUsuario === 'R') ? <Typography>Tipo: Restaurante</Typography> :
                    <Typography>Tipo: Cliente</Typography>}
                </Box>
              </List>
            </Box>


          </Drawer>
        </AppBar>
      </Box>

    </>
  )
}

export default Navegacao
