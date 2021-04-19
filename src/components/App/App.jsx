import React from 'react'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import { Container, Wrapper } from './App.styles'

function App() {
    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer 
            left={<div style={{ backgroundColor: 'red'}}>Produtos Disponíveis</div>}
            middle={<div style={{ backgroundColor: 'aqua'}}>Sua lista de compras</div>}
            right={<div style={{ backgroundColor: 'coral'}}>Estatísticas</div>}           
            />
         </Container>
    </Wrapper>
}

export default App