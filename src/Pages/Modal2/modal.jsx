import React from 'react'

import './modal.css'

export default function Modal2() {
  return (
    <div id='content-page'>
      <div className='navbar-lateral'>
        <h1 className='navbar-title'>Admin LixoTe</h1>
        <div className='navbar-content'>
          <div className='navbar-profile'>
            <img src='https://img.ibxk.com.br/2020/01/02/02222020370194.jpg?w=328' alt='profile' />
            <div className='profile-status'>
              <h2 className='profile-name'>Nome da Lena</h2>
              <p>Online</p>
            </div>
          </div>
          <input placeholder='Search...' className='navbar-input'></input>
        </div>
      </div>
      <div>
        <h1>Conteudo</h1>
      </div>
    </div>
  )
}
