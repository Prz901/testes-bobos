import React, { useState } from 'react'

import { FaAlignJustify, FaRegWindowClose } from 'react-icons/fa'

import './modal.css'

export default function Modal() {
  const [hamburguer, setHamburguer] = useState(false)
  const handleClick = () => {
    setHamburguer(true)
  }

  const handleClose = () => {
    setHamburguer(false)
  }

  return (
    <>
      {hamburguer ? (
        <>
          <div className='modal-open'>
            <div className='content-modal'>
              <FaRegWindowClose onClick={() => handleClose()} className='button-close' />
              <div className='modal-items'>
                <ul>
                  <li className='items'>item1</li>
                  <li className='items'>item2</li>
                  <li className='items'>item3</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='container'>
            <div className='content-page'>
              <div className='content-basic'>
                <FaAlignJustify onClick={() => handleClick()} className='buttom-hamburguer' />
                <h1 className='teste'>Sou o modal dos meninos</h1>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
