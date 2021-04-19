import React from 'react'
import Checkbox from '../../shared/Checkbox'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import { Container, Wrapper } from './App.styles'

function App() {
    const [lettuce, setLettuce] = React.useState(true)
    const [rice, setRice] = React.useState(false)


    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer 
            left={<div >Produtos Disponíveis
                <Checkbox 
                    value={lettuce}
                    title="Acerola"
                    onClick={() => setLettuce(!lettuce)}
                />
                <Checkbox 
                    value={rice}
                    title="Arroz"
                    onClick={() => setRice(!rice)}
                />
                <Checkbox 
                    value={true}
                    title="Carne"
                />
            </div>}
            middle={<div >Sua lista de compras

            </div>}
            right={<div >Estatísticas

            </div>}           
            />
         </Container>
    </Wrapper>
}

export default App