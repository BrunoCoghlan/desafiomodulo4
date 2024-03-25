import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const MiApi = () => {
  const [data, setData] = useState([])
  const fetchData = async () => {
    try {
      const response = await fetch('https://dragonball-api.com/api/characters?limit=58')
      const responseData = await response.json()
      setData(responseData)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      {data?.items?.map((character) => (
        <Col key={character.id} xs={12} md={4} className='d-flex justify-content-center g-5'>
          <Card className='card'>
            <img src={character.image} className='avatar' />
            <Card.Body className='card-body'>
              <Card.Title>{character.name}</Card.Title>
              <Card.Text>{character.ki} Ki </Card.Text>
              <Card.Text>{character.race} </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default MiApi
