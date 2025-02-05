import './Search.css';
import { FaSearch } from "react-icons/fa";

export default function Search(){
    return(
            <div className='search-container'>
                <FaSearch size={20} color='black' className='search-icon'/>
                <input type='search'placeholder='Search users'/>
            </div>
    )
}