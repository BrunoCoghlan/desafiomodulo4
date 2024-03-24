import MiApi from './components/MiApi'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const App = () => {
  return (
    <Row className='p-5'>
      <Col xs={12} md={12}>
        <h1 className='text-center'>Dragonball Card</h1>
      </Col>
      <MiApi />
    </Row>
  )
}

export default App
