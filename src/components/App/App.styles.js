import styled from 'styled-components'
import bg from '../../assets/bg.svg'

export const Wrapper = styled.div`
    height: 100vh;
    background-color: #F8F5EC;
    background-image: url(${bg});
    background-size: cover;
    background-position: center center;
`

export const Container = styled.div`
    background-color: #FFF;
    width: 734px;
    height: 574px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 3px 10px rgba(0,0,0,0.15);
    border-radius: 20px;

`