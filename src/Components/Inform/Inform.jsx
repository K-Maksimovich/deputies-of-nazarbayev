import React from 'react'
import './Inform.css'

const Inform = () => {
  return (
    <div>
        <div className="wrapperInf">


        <div className="Beta">Beta Beta Beta Beta Beta Beta Beta Beta Beta Beta</div>

            <h2 className="Disclimer textRaspisanieADAPTIVE">Расписание Звонков</h2>
            
            <div className="schedule">

                <table className="Time" cellspacing="0">
                     
                    <tr>
                        <td className="numb">1</td>
                        <td className="period">8:30 - 9:50</td>
                        <td className="three"> </td>
                    </tr>

                    <tr>
                        <td className="numb_Null"> </td>
                        <td className="period"> перемена</td>
                        <td className="three">10 мин</td>
                    </tr>

                    <tr>
                        <td className="numb">2</td>
                        <td className="period">10:00 - 11:20</td>
                        <td className="three"> </td>
                    </tr>

                    <tr>
                        <td className="numb_Null"> </td>
                        <td className="period"> </td>
                        <td className="three">40 мин</td>
                    </tr>

                    <tr>
                        <td className="numb">3</td>
                        <td className="period">12:00 - 13:20</td>
                        <td className="three"> </td>
                    </tr>

                    <tr>
                        <td className="numb"> </td>
                        <td className="period"> </td>
                        <td className="three">20 мин</td>
                    </tr>

                    <tr>
                        <td className="numb">4</td>
                        <td className="period">13:40 - 15:00</td>
                        <td className="three"> </td>
                    </tr>

                    <tr>
                        <td className="numb"> </td>
                        <td className="period"> </td>
                        <td className="three">5 мин</td>
                    </tr>

                    <tr>
                        <td className="numb">5</td>
                        <td className="period">15:05 - 16:25</td>
                        <td className="three"> </td>
                    </tr>

                    <tr>
                        <td className="numb"> </td>
                        <td className="period"> </td>
                        <td className="three">5 мин</td>
                    </tr>

                    <tr>
                        <td className="numb">6</td>
                        <td className="period">16:30 - 17:50</td>
                        <td className="three"> </td>
                    </tr>
                </table>
            </div>

            

            <div className="list-teachers">
                <h2 className="list-Teach Disclimer">Список Учителей - "КГП на ПХВ" КИТ.</h2>
                <ul>
                    <li className="list">В. А. А.</li>
                    <li className="list">И. Е. В.</li>
                    <li className="list">М. К. Б.</li>
                    <li className="list">Ш. А. А.</li>
                    <li className="list"><span>&#128081;</span> Ж. Т. Т. <span>&#128081;</span></li>
                    <li className="list">К. К. Г.</li>
                    <li className="list">С. Е. А.</li>
                    <li className="list">К. Г. А.</li>
                    <li className="list">А. А. М.</li>
                    <li className="list">А. Т. К.</li>
                    <li className="list">Н. Л. Б.</li>
                    <li className="list">Н. Н. Т.</li>
                    <li className="list">С. А. М.</li>
                    <li className="list">О. Р. Н.</li>
                    <li className="list">М. А. А.</li>
                    <li className="list">Ш. А. Е.</li>
                    <li className="list">Ж. Р. К.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Inform