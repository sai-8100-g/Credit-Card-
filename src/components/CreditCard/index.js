import {useState} from 'react'

import {
  Contaier,
  CreditCardContainer,
  CreditContainer,
  Hr,
  Heading,
  PaymentMethodContainer,
  PaymentContainer,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [creditCardNumber, setCreditNum] = useState('')
  const [holderName, setHolderName] = useState('')
  const onChangeNum = event => {
    setCreditNum(event.target.value)
  }
  const onChangeName = event => {
    setHolderName(event.target.value)
  }
  return (
    <Contaier>
      <CreditContainer>
        <div
          style={{
            width: '100%',
          }}
        >
          <Heading>CREDIT CARD</Heading>
          <Hr />
        </div>
        <CreditCardContainer data-testid="creditCard">
          <p
            style={{
              color: '#ffffff',
              fontSize: '3vw',
              marginBottom: '0px',
            }}
          >
            {creditCardNumber}
          </p>
          <p
            style={{
              color: '#ffffff',
              marginBottom: '0px',
            }}
          >
            CARDHOLDER NAME
          </p>
          <p
            style={{
              color: '#ffffff',
              fontSize: '2vw',
              marginBottom: '0px',
            }}
          >
            {holderName}
          </p>
        </CreditCardContainer>
      </CreditContainer>
      <PaymentMethodContainer>
        <PaymentContainer>
          <Heading method>Payment Method</Heading>
          <Input
            type="text"
            value={creditCardNumber}
            placeholder="Enter Card Number"
            onChange={onChangeNum}
          />
          <Input
            type="text"
            value={holderName}
            placeholder="Cardholder Name"
            onChange={onChangeName}
          />
        </PaymentContainer>
      </PaymentMethodContainer>
    </Contaier>
  )
}

export default CreditCard
