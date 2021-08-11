import React from 'react'

export const SpanAlert = ({ tipo, mensaje }) => {
    return (
        <div className={`text-center alert alert-${tipo}`} style={{ 'width': '100%' }} >
            { mensaje }
        </div>
    )
}
