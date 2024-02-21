import React, { useEffect, useState } from 'react'
import Navegacao from '../../components/navegacao/Navegacao'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import api from '../../services/api'
import PedidoRow from './PedidoRow'

const Pedidos = () => {
    const [pedidos, setPedidos] = useState([])

    useEffect(() => {
        const fetchPedidos = async () => {
            try {
                const response = await api.get('/pedidos-restaurante')
                if (response.data && Array.isArray(response.data)) {
                    setPedidos(response.data)
                } else {
                    console.error("Resposta da API de pedidos não está no formato esperado:", response)
                }
            } catch (error) {
                console.error("Erro ao obter pedidos:", error)
            }
        }

        fetchPedidos()
    }, [])

    return (
        <>
            <Navegacao />
            <Box sx={{ px: 2, mt: 2 }}>
                <Typography variant="h5" component="h1">
                    Pedidos
                </Typography>

                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Ações</TableCell>
                                <TableCell>Número</TableCell>
                                <TableCell>Cliente</TableCell>
                                <TableCell>Valor</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                pedidos.map((pedido) => (
                                    <PedidoRow key={pedido.id} pedido={pedido}/>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}

export default Pedidos
