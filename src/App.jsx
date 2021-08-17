import { useState } from "react";
import { Routes } from "./components/Routes";
import { UserContext } from "./context/UserContext";

function App() {

  const [usuario, setUsuario] = useState({
    isAuthenticated: false,
    nombre: '',
    email: ''
  });

  return (
    <UserContext.Provider value={{ usuario, setUsuario }} >
      <div className="App">
        <Routes />
      </div>
    </UserContext.Provider>
  );
}

export default App;
