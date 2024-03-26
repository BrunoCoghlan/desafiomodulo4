import { useState } from 'react'

const Sort = ({ setRender }) => {
  const [selected, setSelected] = useState('')
  const handleSort = (e) => {
    setSelected(e.target.value)
    setRender((render) => {
      const sorted = render.sort((a, b) => {
        if (e.target.value === '1') {
          return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
        }
        return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
      })
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
