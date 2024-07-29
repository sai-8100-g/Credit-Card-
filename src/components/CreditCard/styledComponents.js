import styled from 'styled-components'

export const Contaier = styled.div`
    height: 100vh;
    display: flex;/
`

export const CreditCardContainer = styled.div`
   background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
   background-size: cover;
   border-radius: 10px;
   width: 90%; 
   height: 50%;
   padding: 2% 10%;
   display:flex;
   flex-direction: column; 
   justify-content: center; 
   align-items: flex-start;
   
   /
`

export const CreditContainer = styled.div`
  padding: 2%;
  display: flex;
   flex-direction:column; 
   justify-content: space-around; 
   align-items:center;  
  width: 50%; 
  background-color: #3b4b69;/
`

export const Heading = styled.h1`
    margin-bottom: ${props => (props.method ? '6%' : '0px')};
    text-align: center;
    color: ${props => (props.method ? '#344e7a' : '#ffffff')};/
`

export const PaymentMethodContainer = styled.div`
    width : 50%; 
    display: flex; 
    justify-content: center; 
    align-items: center;/
`

export const PaymentContainer = styled.div`
   padding: 5%; 
   height: fit-content; 
   width: 90%;
   box-shadow: 0px 0px 5px 2px #d3d9e0,  -0px -0px 5px 2px #d3d9e0;
   border-radius: 10px; /
`
export const Input = styled.input`
   padding: 3%; 
   margin-bottom: 4%;
   width: 100%; 
   border: none; 
   border-radius: 4px; 
   box-shadow: 0px 0px 3px 1px #d3d9e0,  -0px -0px 3px 1px #d3d9e0;


   &:focus {
    outline:none;
   }/
`

export const Hr = styled.hr`
   background-color: #ffd773;
   height: 1px;
   color: #ffd773;
   width: 30%;/
`
