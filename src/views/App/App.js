import Content from './Content/Content'
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import { Col, Row } from '../../utils/components/Layout/Layout'
import './App.css'
import './App-dark.css'
import './App-fonts.css'
import './App-light.css'
import './App-variables.css'
import {
  BrowserRouter as Router
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Col className='App'>
        <Header />
        <Row style={{ height: 'calc(100% - 60px)', maxHeight: 'calc(100% - 60px)' }}>
          <Navbar />
          <Content />
        </Row>
      </Col>
    </Router>
  )
}

export default App
