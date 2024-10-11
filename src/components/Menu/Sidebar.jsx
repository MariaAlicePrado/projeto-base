import { Link } from "react-router-dom";
import './Sidebar.css';
import logo from './logo.png';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <div className="d-flex justify-content-around align-items-center px-2 py-4 border-bottom rounded">
                <img src={logo} alt="logo" className="m-1" />
                <span className="fw-bold fst-italic">Fulano de Tal</span>
            </div>

            <nav className="nav flex-column">
                <Link className="nav-link" to={'/mensagem'}>Mensagem</Link>
                <Link className="nav-link" to={'/usuario'}>Usuário</Link>
            </nav>
        </div>
    )
}

export default Sidebar