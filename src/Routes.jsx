// todo referente a React
import { useContext } from "react";

import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { UserContext } from "./context/UserContext";

//partes del html
import { Navbar } from "./components/layouts/Navbar";

// Paginas para las rutas
import { Index as PokeApi } from './pages/PokeApi/Index';
import { Perfil } from "./pages/Perfil/Perfil";
import { Login } from "./pages/logins/Login";
import { PrivateRoute } from "./context/PrivateRoute";
import { Register } from "./pages/logins/Register";

export const Routes = () => {

    const { usuario } = useContext(UserContext);
   
    return (
        <Router>
            
            { usuario.isAuthenticated && <Navbar />}

            <Switch>
                <Route exact path="/"> <Redirect to="/login" /> </Route>

                <Route exact path="/login">
                    { usuario.isAuthenticated ? <Redirect to="/categorias" /> : <Login /> }
                </Route>

                <Route exact path="/register">
                    { usuario.isAuthenticated ? <Redirect to="/categorias" /> : <Register /> }
                </Route>

                {/* <========== Rutas privadas ============> */}
                <PrivateRoute exact path="/categorias" component={PokeApi} />
                <PrivateRoute exact path="/perfil" component={Perfil} />

                <Route path="**"> <Redirect to="/categorias" /> </Route>
            </Switch>

        </Router>
    )
}
