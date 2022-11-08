import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Alerta from '../Alerta';
import './signin.css';


function Login() {

    //const { pegaAutenticacao, gravaAutenticacao } = Autenticacao;

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [alerta, setAlerta] = useState({ status: "", message: "" });

    const navigate = useNavigate();

    const acaoLogin = async e => {

        e.preventDefault();

        try {

        } catch (err) {
            console.error(err.message);
        }




    };



    return (
        <div>
            <body className="text-center">
                <Alerta alerta={alerta} />
                <main className="form-signin">
                    <form onSubmit={acaoLogin}>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Login com Google
                        </button>
                    </form>
                </main>
            </body>
        </div>
    )

}

export default Login;