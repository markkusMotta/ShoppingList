import React, { useEffect, useState } from 'react'
// import Checkbox from '../../shared/Checkbox'
import Linechart from '../../shared/Linechart'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import ShoppingList from '../ShoppingList'
import { Container, Wrapper } from './App.styles'
import productsMock from '../../mocks/products.json'




function App() {
    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']
    
    const [products, setProducts] = useState(productsMock.products)
    const [selectedProducts, setSelectedProducts] = useState([]) 


    useEffect(() => {
        const newSelectedProducts = products.filter(product => product.checked)
        setSelectedProducts(newSelectedProducts)
    }, [products])

    
    
    function handleToggle(id, checked, name) {
        const newProducts = products.map(product => 
            product.id === id
            ? { ...product, checked: !product.checked } : product
        )

        setProducts(newProducts)
    }


    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer 
            left={<ShoppingList 
            title={'Produtos Disponíveis'}
            products={products}
            onToggle={handleToggle}
            >
            </ShoppingList>}
            middle={<ShoppingList 
            title={'Sua lista de compras'}
            products={selectedProducts}
            >
             
            </ShoppingList>}
            right={<div >Estatísticas
                <Linechart color={colors[0]} title="Saudável" percentage={20} />
                <Linechart color={colors[1]} title="Não Tão Saudável" percentage={40} />
                <Linechart color={colors[2]} title="Limpeza" percentage={80} />
                <Linechart color={colors[3]} title="Outros" percentage={50} />
            </div>}           
            />
         </Container>
    </Wrapper>
}

export default App