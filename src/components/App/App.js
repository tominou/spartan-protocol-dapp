import Content from '../Content/Content'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import { Col, Row } from '../Layout/Layout'
import './App.css'
import '../../fonts.css'
import {
  BrowserRouter as Router
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Col className='App'>
        <Header />
        <Row>
          <Navbar />
          <Content />
        </Row>
      </Col>
    </Router>
  )
}

export default App
