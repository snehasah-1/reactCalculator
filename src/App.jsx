import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Container,Row,Col} from 'reactstrap'
import './App.css'
import CalculatorDisplay from './component/CalculatorDisplay'
import CalculatorButton from './component/CalculatorButton'
import { Provider } from 'react-redux';
import store from './central-store/store'

function App() {
  return (
    <Provider store={store}>
      <Container fluid>
        <Row>
          <Col  md={12} style={{margin: "0 auto"}}>
            <CalculatorDisplay  />
            <CalculatorButton  />
          </Col>
        </Row>
      </Container>
    </Provider>
  )
}

export default App
