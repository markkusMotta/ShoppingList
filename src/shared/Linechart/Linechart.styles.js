import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;

    
    span {
        font-size: 15px;
        color: #004D61;
        margin-bottom: 4px;
    }
`
export const Progressbar = styled.div`
    height: 14px;
    border-radius: 3px;
    background-color: #00ACAE;
    transition: all .7s ease-in-out;  
    width: ${props => props.percentage ? props.percentage : 0}%;
    background-color: ${props => props.color ? props.color : '#004D61'}
` 