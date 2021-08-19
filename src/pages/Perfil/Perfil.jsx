import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

export const Perfil = () => {

    const { usuario } = useContext(UserContext);

    return (
        <div className="container text-center" style={{ 'top': '30%' }} >
            { JSON.stringify(usuario, null, 3) }
        </div>
    )
}
