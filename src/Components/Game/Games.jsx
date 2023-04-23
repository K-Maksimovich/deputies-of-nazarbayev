import React from 'react'
import './Games.css'
import ColorBlast from '../../Assets/Images/ColorBlast.png'
import DinoDi from '../../Assets/Images/Dino_Di.png'
import SnakePy from '../../Assets/Images/Snake_Py.png'

const Games = () => {
  return (
    <div>
        <div className="wrapperr">


          <div className="Beta">Beta Beta Beta Beta Beta Beta Beta Beta Beta Beta</div>
        

          <div className="except__text">
            <h2 className='txt'>Здесь можно поиграть в игры, расслабиться. Пока играете у вас зарабатывается счёт, <br />
             благодоря которому вы можете поднятся в топе лидеров соревнуясь между друзьями. Удачи ;)</h2>
          </div>

          <div className="All__Game">
              <div className="Game__List">
                <a href="/deputies-of-nazarbayev/#/games/color-blast" className="List--Elem"><img src={ColorBlast} alt="Color Blast" className='img_Game' /><p className="NameGame"> Color Blast</p></a>
                <a href="/deputies-of-nazarbayev/#/games/DinoDi" className="List--Elem"><img src={DinoDi} alt="Dino Di" className='img_Game' /><p className="NameGame"> Dino Di</p></a>
                <a href="/deputies-of-nazarbayev/#/games/SnalePy" className="List--Elem"><img src={SnakePy} alt="Snake Py"className='img_Game' /><p className="NameGame"> Snake Py</p></a>

                {/* <a href="#!" className="List--Elem"><img src="" alt=""className='img_Game' /><p className="NameGame">  </p></a>
                <a href="#!" className="List--Elem"><img src="" alt=""className='img_Game' /><p className="NameGame">  </p></a>
                <a href="#!" className="List--Elem"><img src="" alt=""className='img_Game' /><p className="NameGame">  </p></a> */}

              </div>
          </div>
        </div>
    </div>
  )
}

export default Games