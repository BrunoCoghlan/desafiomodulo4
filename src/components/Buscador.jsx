import { useEffect, useState } from 'react'

const Buscador = ({ data, setRender }) => {
  const [filtro, setFiltro] = useState('')
  const handleBuscador = (e) => {
    setFiltro(e.target.value)
  }
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
