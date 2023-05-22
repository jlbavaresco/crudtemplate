import { useState, useEffect } from 'react';
import Tabela from './Tabela';
import PostsContext from './PostsContext';
import Formulario from './Formulario';



function Posts() {


    const [listaObjetos, setListaObjetos] = useState([{
        id: '1xxx',
        titulo: 'Usando Firebase',
        texto: 'Como usar o Firebase',
        usuario: 'Jorge',
        email: 'jlbavaresco@gmail.com',
        uid: 'jj123'
    }]);

    const [alerta, setAlerta] = useState({ status: "", message: "" });

    const [objeto, setObjeto] = useState({
        id: "", titulo: "", texto: "",
        uid: "", usuario: "", email: ""
    });

    const novoObjeto = () => {
        setObjeto({
            id: 0, titulo: "", texto: "",
            uid: "", usuario: "", email: ""
        });
    }

    const [editar, setEditar] = useState(false);

    const acaoCadastrar = async (e) => {       
        e.preventDefault();
        if (editar) {

            try {

                setAlerta({ status: "success", message: "Post atualizado com sucesso" });
            } catch (err) {
                setAlerta({ status: "error", message: "Erro ao atualizar o POST:" + err });
            }
        } else { // novo 
            try {               
                setEditar(true);
                setAlerta({ status: "success", message: "Post criado com sucesso" });
            } catch (err) {
                setAlerta({ status: "error", message: "Erro ao criar o POST:" + err });
            }
        }
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    const acaoRemover = async (objeto) => {
        if (window.confirm("Remover este objeto?")) {      
            try {
                setAlerta({ status: "success", message: "Post removido com sucesso!" });
            } catch (err) {
                setAlerta({ status: "error", message: "Erro ao  remover: " + err });
            }

        }
    }

    useEffect(() => {


    }, []);

    return (
        <PostsContext.Provider value={
            {
                listaObjetos, setListaObjetos, acaoRemover,
                alerta, setAlerta,
                objeto, setObjeto,
                editar, setEditar,
                acaoCadastrar, handleChange, novoObjeto
            }}>
            <Tabela />
            <Formulario />
        </PostsContext.Provider>
    );
}

export default Posts;