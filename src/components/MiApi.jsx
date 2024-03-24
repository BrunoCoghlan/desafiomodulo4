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
        <Col key={character.id} xs={12} md={4}>
          <Card className='card'>
            <Card.Img variant='top' src={character.image} className='avatar' />
            <Card.Body>
              <Card.Title>Nombre: {character.name}</Card.Title>
              <Card.Text>Ki: {character.ki} </Card.Text>
              <Card.Text>Raza: {character.race} </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default MiApi
