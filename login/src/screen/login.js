import { useRef } from "react";
import { useNavigate} from 'react-router-dom';
import "../App.css";
var CryptoJS = require("crypto-js");
export const Login = () => {
  const navigate= useNavigate();
  const email = useRef();
  const password = useRef();
  const key= "seguridad";
  function encrypt(message = "", key = "") {
    var message = CryptoJS.AES.encrypt(message, key);
    return message.toString();
  }
 
  function handleLoginForm() {
    const passwordEncrypt = encrypt(password.current.value, key);   
    navigate('/home',{state:{email:email.current.value, password:passwordEncrypt, key : key}})
  }

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <h2>Ingenieria de Seguridad</h2>
          <h3>Iniciar Sesión</h3>
          <input
            type="email"
            placeholder="Email"
            className="form-control m-2"
            ref={email}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="form-control m-2"
            ref={password}
          />
          <button className="btn btn-light" onClick={handleLoginForm}>
            Ingresar
          </button>
        </form>
      </header>
    </div>
  );
};
