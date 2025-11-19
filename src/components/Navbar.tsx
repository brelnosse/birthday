import '../assets/style/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {far} from '@fortawesome/free-regular-svg-icons';
import Button from './Button';

export default function Navbar(){
    return (
        <nav className="navbar">
            <Button 
            icon={{
                name: far.faUser,
                position: 'beforeText'
            }} 
            to="/" 
            text='Se connecter'/>
        </nav>
    );
}