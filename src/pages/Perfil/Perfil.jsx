import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

import '../../styles/perfil.css';
import { InfoPerfil } from './InfoPerfil';

export const Perfil = () => {

    const { usuario } = useContext(UserContext);

    const perfil = 'https://img.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg?size=338&ext=jpg';

    return (
        <div className="container text-center">
            <div className="fondo">
                
            </div>
            <div className="photoPerfil">
                <img className="img_perfil" src={perfil} alt="perfil" />
                <button className="change_perfil" >C</button>
            </div>
            <div className="info">
                <InfoPerfil data={usuario} />
            </div>
        </div>
    )
}
