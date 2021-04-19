import React from 'react'
import { Progressbar, Wrapper } from './Linechart.styles'


function Linechart({ title, percentage, color }) {
    return <Wrapper>
        <span>
            { title }
        </span>
        <Progressbar 
        color={ color } 
        percentage={ percentage } />
    </Wrapper>
}

export default Linechart