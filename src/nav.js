import { Link } from 'react-router-dom';
import './nav.css';

function Navbar(){
    return(
        <nav className="menu">
            <img className='logosenai' src={require('./SENAI.png')} alt= "logo"width={100}></img>
            <ul className="menu-nav">
                <li className="item1">
                    <Link className="item1-link" to="/"><h4>Home</h4></Link>
                </li>
                <li className="item1">
                    <Link className="item1-link" to="/quemsomos"><h4>Quem Somos?</h4></Link>
                </li>
                <li className="item1">
                    <Link className="item1-link" to="/contato"><h4>Contato</h4></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;