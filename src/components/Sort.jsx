import { useState } from 'react'

const Sort = ({ setRender }) => {
  // SE DECLARA UN ESTADO SELECTED PARA SABER QUE OPCION SE A SELECCIONADO
  const [selected, setSelected] = useState('')
  // ESTA FUNCION GUARDA LA OPCION SELECCIONADA
  const handleSort = (e) => {
    setSelected(e.target.value)
    // SE ACTUALIZA RENDER PARA REALIZAR UN ORDEN SEGUN CORRESPONDA
    setRender((render) => {
      const sorted = render.sort((a, b) => {
        // SEGUN LA CONDICION SELECCIONADA, ORDEA DE UNA FORMA U OTRA
        if (e.target.value === '1') {
          return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
        }
        return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
      })
      // NECESARIO RETORNAR DE ESTA FORMA PARA QUE REACT ACTUALIZE SU VALOR, DE OTRA FORMA NO ACTUALIZA
      return [...sorted]
    })
  }
  return (
    <>
      <select value={selected} onChange={handleSort} className='sort'>
        <option disabled value=''>Ordenar</option>
        <option value='1'>de A - Z</option>
        <option value='0'>de Z - A</option>
      </select>
    </>
  )
}

export default Sort
