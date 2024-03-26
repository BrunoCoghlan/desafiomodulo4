import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const CardDb = ({ character }) => {
  return (
    <Col xs={12} md={4} className='d-flex justify-content-center g-5'>
      <Card className='card'>
        <img src={character.image} className='avatar' />
        <Card.Body className='card-body'>
          <Card.Title>{character.name}</Card.Title>
          <Card.Text>{character.ki} Ki </Card.Text>
          <Card.Text>{character.race} </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CardDb
