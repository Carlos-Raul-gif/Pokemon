import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const Navbar = () => {
   
    const { setUsuario } = useContext(UserContext);

    const logout = () => {
        setUsuario({
            isAuthenticated: false,
            nombre: '',
            email: ''
        });
    }

    return (     
        <nav className="navbar fixed navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">PokeDex</a>
            <button className="navbar-toggler " type="button" data-toggle="collapse" 
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/categorias">Categorias</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/perfil">Perfil</Link>
                    </li>
                </ul>
                <button onClick={() => logout() } className="btn btn-outline-danger my-2 my-sm-0" >Logout</button>
            </div>
        </nav>
    )
}
