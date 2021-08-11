import React from 'react'

export const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-dark text-muted">
        <br />

            <div className="container text-center text-md-start mt-5">

                <div className="row">

                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                    <h6 className="text-uppercase fw-bold mb-4">
                        <i className="fas fa-gem me-3"></i>Descripcion
                    </h6>
                    <p>
                        Una pagina PokeDex creado con el fin de practicar React usando Hooks y consumiendo APIS
                    </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                    <h6 className="text-uppercase fw-bold mb-4">
                        Tecnologias usadas
                    </h6>

                    <p>
                        <a href="https://es.reactjs.org/docs/getting-started.html" className="text-reset">React</a>
                    </p>
                    <p>
                        <a href="https://pokeapi.co" className="text-reset">PokeAPI</a>
                    </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                    <h6 className="text-uppercase fw-bold mb-4">
                        Contact
                    </h6>
                    <p><i className="fas fa-home me-3"></i> Maxcanu, Yucatan, Mexico</p>
                    <p>
                        <i className="fas fa-envelope me-3"></i>
                        fabian@gmail.com
                    </p>
                    </div>

                </div>

            </div>

        <div className="text-center p-4" >
            © 2021 Copyright:
            <a className="text-reset fw-bold" href="/">mi-portafolio.com</a>
        </div>
        </footer>
    )
}
