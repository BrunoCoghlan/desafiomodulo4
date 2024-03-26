import { useEffect, useState } from 'react'

const Buscador = ({ data, setRender }) => {
  // DECLARAMOS UN ESTADO DE FILTRO PARA GUARDAR LO QUE SE INGRESE AL INPUT
  const [filtro, setFiltro] = useState('')
  // FUNCION SE ENCARGA DE SETIAR FILTRO CON LA INFORMACION INGRESADA AL INPUT
  const handleBuscador = (e) => {
    setFiltro(e.target.value)
  }
  // SOLO SE EMPEZARA A FILTRAR LA DATA UBICADA EN RENDER (PARA ORDENAR LA ULTIMA BUSQUEDA) UNA VEZ SE ACTUALIZE FILTRO
  useEffect(() => {
    const filtradoData = data?.items?.filter((character) => {
      return (character.name.toLowerCase().includes(filtro.toLowerCase()))
    })
    setRender(filtradoData)
  }, [filtro])

  return (
    <>
      <input
        type='text'
        className='buscador'
        placeholder='Busca tu personaje por nombre'
        onChange={handleBuscador}
        value={filtro}
      />
    </>
  )
}

export default Buscador
