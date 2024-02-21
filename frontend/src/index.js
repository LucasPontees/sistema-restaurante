import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './Rotas'
import { CarrinhoProvider } from './CarrinhoContext'



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <CarrinhoProvider>
    <BrowserRouter>
      <Rotas/>
    </BrowserRouter>
  </CarrinhoProvider>
)


