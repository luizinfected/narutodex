import {useParams, Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import {toast} from 'react-toastify'
import './ninja.css'
function Ninja() {
    const { id } = useParams()
    const [ninja, setNinjas] = useState([])
useEffect(() => {
        
            let url = `https://naruto-api.herokuapp.com/api/v1/characters/${id}`
            async function fetchNinjas() {
            
            await fetch(url)
                .then((r) => r.json())
                .then((json) => {
                    setNinjas(json)
                })    
                
            }
            fetchNinjas()
            
        
        
    }, [id])

     function salvarNinja() {
        const minhaLista = localStorage.getItem("@ninjas");

        let ninjasSalvos = JSON.parse(minhaLista) || [];

        const hasNinja = ninjasSalvos.some((ninjasSalvo) => ninjasSalvo.id === ninja.id)

        if (hasNinja) {
            toast.warn('Esse ninja já está na sua lista!')
            return
        }

        ninjasSalvos.push(ninja)
        localStorage.setItem("@ninjas", JSON.stringify(ninjasSalvos))
        toast.success('Ninja salvo com sucesso')
    }
    

    return (
            <div className="ninja-info">
                <h1>{ninja.name}</h1>
                <p>{ninja.about}</p>
                <div>

                <button className="AddTime" onClick={salvarNinja}><strong>Adicionar ao time</strong></button>
                <Link to={`/`}><button className="info-btn"><strong>Inicio</strong></button></Link>
                </div>                
            </div>
        
    )
}

export default Ninja