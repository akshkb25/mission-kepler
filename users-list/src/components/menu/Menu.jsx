import './Menu.css';
import {MENU_LIST} from '../../assets/json/constants.js';
export default function Menu(){
    return(
        <div className='menu-container'>
        <ul>
            {MENU_LIST && MENU_LIST.map((item)=>{
            return(
                <li className={(item === 'New Users' ? 'active' : '' )}>{item}</li>
            )
        })}
        </ul>
    </div>
    )
}