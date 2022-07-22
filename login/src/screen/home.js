
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
var CryptoJS = require("crypto-js");
export const Home=(props) =>{
    const [passwordDecrypt, setPassword]= useState("");
    const location= useLocation();
    function decrypt(message = "", key = "") {
        var code = CryptoJS.AES.decrypt(message, key);
        var decryptedMessage = code.toString(CryptoJS.enc.Utf8);
        return decryptedMessage;
    }
    useEffect(()=>{
        const passwordDe = decrypt(location.state.password,location.state.key)
        setPassword(passwordDe)
    });
    return( <div className="App">
        <header className='App-header'>
            <div className='d-flex flex-column justify-content-center align-items-center'> 
                <h1 className='text-email'>
                    {"Email: "+location.state.email}
                </h1>
                <div className=' containerPassword'>
                    <h2>Contraseña</h2>
                    <p className='fw-bold'>Encriptada </p>
                    <p>{location.state.password}</p>
                    <p className='fw-bold'>Desencriptada</p>
                    <p className='text-break'> {passwordDecrypt}</p>
                    <p className='fw-bold'>Clave Secreta </p>
                    <p>{location.state.key}</p>                    
                </div>                
            </div>
        </header>
    </div>
    );
}