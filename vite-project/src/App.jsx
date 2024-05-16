import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [cells, setCells] = useState(['a', 'b', 'c'])

  const changeCellContent = (newCellVal, idx) => {
    setCells(prevCells => 
       prevCells.map((cell, i) => (i === idx ? newCellVal : cell))
    )
  }

  const handlePlusClicked = (toUpdateIDX) => {
    setCells((prevCells) => [
      ...prevCells.slice(0, toUpdateIDX +1),
      '_',
      ...prevCells.slice(toUpdateIDX + 1)]
    )
  }

  return (
  <div className='App'>
    <div className='cells'>
  {cells.map((cell, idx) => (
    <div key={idx} className='cell'>
      <input 
      onChange={(e) => changeCellContent(e.currentTarget.value, idx)} 
      value={cell} 
      />
      {idx < cells.length -1 && (<span className='plus' onClick={() => handlePlusClicked(idx) }> + </span>)}
      
    </div>
  ))}
  </div>
  </div>
  )
}

export default App
