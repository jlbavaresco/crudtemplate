import { useState, useEffect } from 'react';


const Home = () => {

    const [listaObjetos, setListaObjetos] = useState([{
        id: '1xxx',
        titulo: 'Usando Firebase',
        texto: 'Como usar o Firebase',
        usuario: 'Jorge',
        email: 'jlbavaresco@gmail.com',
        uid: 'jj123'
    }]);

    useEffect(() => {

    }, []);
    return (
        <div style={{ padding: '20px' }}>
            <h1>Firebase com Firestore - Posts - PWA</h1>

            <div className="row">
                {listaObjetos.length === 0 && <h2>Nenhum registro encontrado</h2>}
                {listaObjetos.length > 0 && (
                    
                        listaObjetos.map(objeto => (
                            <div className="col-sm-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{objeto.titulo}</h5>
                                        <p className="card-text">{objeto.texto}</p>
                                        <p className="card-text"><small className="text-muted">Usuário: {objeto.usuario}</small></p>
                                        <p className="card-text"><small className="text-muted">Email: {objeto.email}</small></p>
                                    </div>
                                </div>
                            </div>
                        ))
                    
                )}
            </div>
        </div>
    )
};

export default Home;