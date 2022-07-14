import { useEffect, useState } from "react"
import "./meutime.css"
import { Link } from 'react-router-dom'
import {toast} from 'react-toastify'
function MeuTime() {
    const [ninjas, setNinjas] = useState([])
    
    useEffect(() => {
        const minhaLista = localStorage.getItem("@ninjas");
        setNinjas(JSON.parse(minhaLista) || []) 
    }, [])
    
    function excluirNinja(id) {
        let filtroNinja = ninjas.filter((item) => {
            return (item.id !== id) 
        })

        setNinjas(filtroNinja)
        localStorage.setItem("@ninjas", JSON.stringify(filtroNinja))
        toast.success("Ninja removido com sucesso")
    }

    return (
        <div className="meu-time">

            <h1>Meu time</h1>

            {ninjas.length === 0 && <span>Você não possui nenhum ninja salvo :(</span>}
            <ul>
                {ninjas.map((item) => {
                    return (
                        <>
                        <li key={item.id}>
                            <span>{item.name}</span>
                            <div>
                                <Link   className="info-btn" to={`/ninja/${item.id}`}>Ver detalhes</Link>
                                <button className="RemoveTime" onClick={ () => excluirNinja(item.id)}>Excluir</button>
                            </div>
                            
                            </li>
                            <hr/>
                        </>
                    )
                })}
            </ul>

        </div>
    )
}

export default MeuTime