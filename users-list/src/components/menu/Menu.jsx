import './Menu.css';
import {menuList} from '../../assets/json/constants.js';
import { v4 as uuidv4 } from "uuid";
export default function Menu(){
  return (
    <div className="menu-container">
      <ul>
        {menuList?.map((item) => {
            return (
              <li key={uuidv4()}>{item}</li>
            );
          })}
      </ul>
    </div>
  );
}