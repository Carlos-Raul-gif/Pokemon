import React from 'react'

export const InfoPerfil = ({ data }) => {
    return (
        <>
            <div className="info_basico">
                Hola, mi nombre es { data.nombre } <br />
                Mi correo es { data.email }
            </div>
            <div className="info-extra">
                
            </div>
            
        </>
    )
}
