import React from 'react'
import {FaSearch} from 'react-icons/fa'
function InputText({placeholder}) {

  return (
    <div className='input-group'>
      <FaSearch className='search-icon' />
      <input className='input-text' type='text' placeholder={placeholder} />
    </div>
    )
}

export default InputText