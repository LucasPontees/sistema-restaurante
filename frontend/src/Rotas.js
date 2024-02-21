import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error404 from './pages/error404/Error404'
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Dashboard from './pages/dashboard/Dashboard'
import CadastrarFornecedor from './pages/cadastrarFornecedor/CadastrarFornecedor'
import CadastrarCliente from './pages/cadastrarCliente/CadastrarCliente'
import Restaurante from './pages/restaurante/Restaurante'
import ProdutosIndex from './pages/produtos/ProdutosIndex'
import ProdutosForm from './pages/produtos/ProdutosForm'
import FazerPedido from './pages/fazerPedido/FazerPedido'
import MeusPedidos from './pages/meusPedidos/MeusPedidos'
import RestauranteProdutos from './pages/restautanteProdutos/RestauranteProdutos'
import Pedidos from './pages/pedidos/Pedidos'


const Rotas = () => {
    return (
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastrarcliente" element={<CadastrarCliente/>}/>
        <Route path="/cadastrarfornecedor" element={<CadastrarFornecedor/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/restaurante" element={<Restaurante/>}/>
        <Route path="/produtos" element={<ProdutosIndex/>}/>
        <Route path="/produtos/form" element={<ProdutosForm/>}/>
        <Route path="/produtos/form/:id" element={<ProdutosForm/>}/>
        <Route path="/fazerpedido" element= {<FazerPedido/>} />
        <Route path="/restauranteprodutos/:id" element={<RestauranteProdutos/>}/>
        <Route path="/meuspedidos" element={<MeusPedidos/>} />
        <Route path="/pedidos" element={<Pedidos/>} />

            <Route path="*" element={<Error404/>}/>
        </Routes>
    )
}
export default Rotas