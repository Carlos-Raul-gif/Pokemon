import { useEffect, useState } from "react";
import { Routes } from "./Routes";
import { UserContext } from "./context/UserContext";

function App() {

  const getLocalStorage = localStorage.getItem('auth');

  const initialState = {
    isAuthenticated: false,
    nombre: '',
    correo: ''
  }
  
  const [usuario, setUsuario] = useState(JSON.parse(getLocalStorage) || initialState );
  
  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(usuario));
  }, [ usuario ]);

  return (
    <UserContext.Provider value={{ usuario, setUsuario }} >
      <Routes />
    </UserContext.Provider>
  );
}

export default App;
