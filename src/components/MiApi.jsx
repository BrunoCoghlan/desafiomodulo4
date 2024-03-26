import { useEffect, useState } from 'react'
import CardDb from './CardDb'
import Col from 'react-bootstrap/Col'
import Buscador from './Buscador'
import Sort from './Sort'

const MiApi = () => {
  const [data, setData] = useState([])
  const [render, setRender] = useState([])
  const fetchData = async () => {
    try {
      const response = await fetch('https://dragonball-api.com/api/characters?limit=58')
      const responseData = await response.json()
      setData(responseData)
      setRender(responseData.items)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <Col xs={12} md={10}>
        <Buscador data={data} setRender={setRender} />
      </Col>
      <Col xs={12} md={2}>
        <Sort setRender={setRender} />
      </Col>
      {render?.map((character) => (
        <CardDb key={character.id} character={character} />
      ))}
    </>
  )
}

export default MiApi
