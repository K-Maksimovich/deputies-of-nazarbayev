import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <h1 className='myBrand'>cmax</h1>

      <div className="contact">
          <a className='cont' href="mailto:carpovmax04@gmail.com.ru">Кликни на меня если есть вопросы</a>
          <a className='cont' href="tel:">+0-000-000-00-00</a>
          <button class="open_pop-up cont">Дать монетку на новые нервы</button>
      </div>
    </div>
  )
}

export default Footer