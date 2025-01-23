import './Header.css';

import Menu from '../menu/Menu';
import Search from '../search/Search';

export default function Header(){
    return(
        <div className='header-wrapper'>
            <h1>Users</h1>
            <div className='header-container'>
                <Search/>
                <Menu/>
            </div>
        </div>   
    )
}