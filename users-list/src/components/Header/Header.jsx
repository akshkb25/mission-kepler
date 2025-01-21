import './Header.css';
import search from "../../../public/images/search-icon.svg"; 

export default function Header(){
    return(
        <div className='header-wrapper'>
            <h1>Users</h1>
            <div className='header-container'>
                <div className='search-container'>
                    <img src={search}/>
                    <input type='search'placeholder='Search Users'/>
                </div>
                <div className='menu-container'>
                    <ul>
                        <li>Reputation</li>
                        <li className='active'>New Users</li>
                        <li>Voters</li>
                        <li>Editors</li>
                        <li>Moderators</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}