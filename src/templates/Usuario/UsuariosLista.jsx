import { useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import UsuarioService from "../../services/UsuarioService"
import { useEffect, useState } from "react"

const UsuariosLista = () => {

    const navigate = useNavigate();

    const goTo = () => {
        navigate('/usuarioeditar')
    }

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        UsuarioService.getAllUsuarios().then(
            (response) => {
                const usuarios = response.data;
                setUsuarios(usuarios);
                console.log(usuarios);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);

    const getId = (id) => {
        navigate(`/usuarioeditar/` + id)
    }

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/usuario'}
                    title={'Lista de Usuários'}
                    logo={logo}
                />
                <section className="m-2 p-2 shadow-lg">
                    <div className="table-wrapper">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                <th scope="col">ID</th>
                                    <th scope="col">RM</th>
                                    <th scope="col">NOME</th>
                                    <th scope="col">EMAIL</th>
                                    <th scope="col">SENHA</th>
                                    <th scope="col">NÍVEL ACESSO</th>
                                    <th scope="col">DATA CADASTRO</th>
                                    <th scope="col">STATUS USÁRIO</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios?.map((usuario) => (
                                    <tr className="" key={usuario.id}>
                                        <td>{usuario.id}</td>
                                        <td>{usuario.nome}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.nivelAcesso}</td>
                                        <td>{usuario.dataCadastro}</td>
                                        <td>{usuario.statusUsuario}</td>
                                        <td>
                                            <button onClick={() => getId(usuario.id)}
                                                className="btn btn-sm btn-warning rounded">
                                                <i className="bi bi-envelope-open"> Abrir</i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default UsuariosLista