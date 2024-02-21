import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import figuraErro from './erro.avif'

function Error404() {
    return (
        <Container style={{display: 'flex', justifyContent: 'center', alignItens: 'center', heigth: '100vh'}}>
            <Card style={{ width: '400px', marginTop: '70px' }}>
                <Card.Img variant="top" src={figuraErro} />
                <Card.Body style={{}}>
                    <Card.Title style={{ fontSize: '72px', textAlign: 'center',display: 'flex' 
                     , justifyContent: 'center', alignItens: 'center' }}>Error</Card.Title>
                    <Card.Text style={{ fontSize: '36px', textAlign: 'center',display: 'flex' 
                     , justifyContent: 'center', alignItens: 'center' }}>
                        Page not Found
                    </Card.Text>
                    <Button 
                    style={{ fontSize: '36px', textAlign: 'center',display: 'flex' 
                    , justifyContent: 'center', alignItens: 'center' }}
                    variant="outline-danger" href='/'>Home</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default Error404
