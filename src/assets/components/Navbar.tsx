import '../style/navbar.css';

import Button from './Button';

export default function Navbar(){
    return (
        <nav className="navbar">
            <Button to="/" text='Se connecter'/>
        </nav>
    );
}