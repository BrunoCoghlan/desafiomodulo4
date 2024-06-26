import { useEffect, useState } from 'react'
import CardDb from './CardDb'
import Col from 'react-bootstrap/Col'
import Buscador from './Buscador'
import Sort from './Sort'

const MiApi = () => {
  // SE DECLARAN DOS ESTADOS UNO PARA GUARDAR LA API Y OTRO PARA RENDERIZARLA
  const [data, setData] = useState([])
  const [render, setRender] = useState([])
  // SE DELCARA UNA FUNCION FETCHDATA PARA IR A BUSCAR LA API AL URL USANDO UN CONTROL DE ERRORES
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
  // SE DECLARA QUE FETCHDATA SOLO SERA INICIA UNA VEZ AL MOMENTO DE EJECUTAR EL COMPONENTE MI API
  useEffect(() => {
    fetchData()
  }, [])
  // SE RENDERIZAN LOS BUSCADORES Y EL SORT PARA ORDENAR DE FORMA ALFABETICA
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
