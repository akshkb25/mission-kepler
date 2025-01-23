import search from "../../assets/images/search-icon.svg"; 
import './Search.css';

export default function Search(){
    return(
            <div className='search-container'>
                <img src={search}/>
                <input type='search'placeholder='Search users'/>
            </div>
    )
}