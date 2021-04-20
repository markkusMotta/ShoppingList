import React, { useEffect, useState } from 'react'
// import Checkbox from '../../shared/Checkbox'
import Linechart from '../../shared/Linechart'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import ShoppingList from '../ShoppingList'
import { Container, Wrapper } from './App.styles'
import productsMock from '../../mocks/products.json'
import extractPercentage from '../../utils/extractPercentage'




function App() {
    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']
    
    const [products, setProducts] = useState(productsMock.products)
    const [selectedProducts, setSelectedProducts] = useState([]) 
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const newSelectedProducts = products.filter(product => product.checked)
        setSelectedProducts(newSelectedProducts)
    }, [products])

    useEffect(() => {
        const total = selectedProducts
        .map(product => product.price)
        .reduce((a, b) => a + b, 0)

    setTotalPrice(total)
        
    }, [selectedProducts])
    
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
            onToggle={handleToggle}
            >
             
            </ShoppingList>}
            right={<div >Estatísticas
                <Linechart  
                    color={colors[0]} 
                    title="Saudável" 
                    percentage={extractPercentage(
                        selectedProducts.length,
                        selectedProducts
                        .filter(product => 
                        product.tags.includes('healthy'))
                        .length
                    )} 
                    />
                <Linechart  
                    color={colors[1]} 
                    title="Não Tão Saudável" 
                    percentage={extractPercentage(
                        selectedProducts.length,
                        selectedProducts
                        .filter(product => 
                        product.tags.includes('junk'))
                        .length
                    )}  
                    />
                <Linechart  
                    color={colors[2]} 
                    title="Limpeza" 
                    percentage={extractPercentage(
                        selectedProducts.length,
                        selectedProducts
                        .filter(product => 
                        product.tags.includes('cleaning'))
                        .length
                    )} 
                    />
                <Linechart  
                    color={colors[3]} 
                    title="Outros" 
                    percentage={extractPercentage(
                        selectedProducts.length,
                        selectedProducts
                        .filter(product => 
                        product.tags.includes('others'))
                        .length
                    )}  
                />

            <div style={{ marginTop: 14 }}>
                <h2 style={{ fontWeight: 400, fontSize: 12, color: '#00364A'}} />Previsão de gastos
            <div style={{ fontSize: 28, color: '#004D61'}}>
                R$ { totalPrice.toFixed(2).replace('.',',') }
            </div>
            </div>

            </div>}           
            />
         </Container>
    </Wrapper>
}

export default App