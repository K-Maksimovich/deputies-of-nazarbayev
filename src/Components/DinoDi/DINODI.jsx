import React, { useState } from 'react'
import './DINODI.css'

import BGImage from '../../Assets/Images/DinoDiImg/BGImg.png';
import BGImage_Cactus from '../../Assets/Images/DinoDiImg/Cactus.png';
import BGImage_Dinozavr from '../../Assets/Images/DinoDiImg/Dinozavr.png';




export const DINODI = () => {




    
    const [clickState, setClickState] = useState(false);

    function handleClickJump() {
      setClickState(clickState => !clickState);
    }

    setTimeout(() => {
        setClickState(false);
    }, 1500)

    let toggleClassJumpCheck = clickState ? ' jump' : '';





    const bg_img = <img src={BGImage} alt='BG' className='bg_img' />
    const Cactus = <img src={BGImage_Cactus} alt='BG-Cactus' className='Cactus' />
    const Dinozavr = <img src={BGImage_Dinozavr} alt='BG-Dinozavr' className={`Dinozavr${toggleClassJumpCheck}`} />



  return (
    <div>
        <div className='wrapper'>

            <div className='floor' onClick={handleClickJump} >
                <div className='floor_img-list' >
                    {bg_img} {bg_img}
                </div>

                {Cactus}
                {Dinozavr}
            </div>


        </div>
    </div>
  )
}
