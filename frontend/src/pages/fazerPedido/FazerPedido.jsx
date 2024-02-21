import React, { useEffect, useState } from 'react'
import Navegacao from '../../components/navegacao/Navegacao'
import api from '../../services/api'
import Restaurante from './Restaurante'
import { Box } from '@mui/material'

const FazerPedido = () => {
    const [restaurantes, setRestaurantes] = useState([])

    useEffect(() => {
        api.get('/restaurantes').then(({ data }) => {
            console.log('Resposta da API:', data);
            setRestaurantes(data);
        }).catch((error) => {
            console.error('Erro ao obter os restaurantes:', error);
        });
    }, []);
    

    return (
        <>
            <Navegacao />
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {Array.isArray(restaurantes) && restaurantes.length > 0 ? (
                restaurantes.map((restaurante) => (
                    <Restaurante restaurante={restaurante} key={restaurante.id} />
                ))
            ) : (
                <p>Nenhum restaurante encontrado.</p>
            )}
        </Box>

        </>
    )
}

export default FazerPedido