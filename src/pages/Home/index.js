import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import './index.css'
function Home() {
    const [ninjas, setNinjas] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        
            let url = `https://naruto-api.herokuapp.com/api/v1/characters`
            async function fetchNinjas() {
            
            await fetch(url)
                .then((r) => r.json())
                .then((json) => {
                    setNinjas(json)
                    setLoading(false)
                    
                })    
                
            }
            fetchNinjas()

        
        
    }, [])

   


    return (
        <>
        <div className="titulo">
            <h1>Monte seu time ninja!</h1>
            {loading ? <h1>Carregando ninjas...</h1> : ''}   
        </div>
        <div className="container-cards"> 
            

            {
                ninjas.map((ninja) => {
                    return (
                        <div className="card" key={ninja.id}>    
                                <h1>{ninja.name}</h1>
                                <img src={ninja.images[0]}/>
                                {/* <div className="info">
                                <p><strong>Sexo: </strong><span>{ninja.info.Sexo}</span></p>
                                <p><strong>Aniversário: </strong><span>{ninja.info.Aniversário}</span></p>
                                {ninja.info.Idade && <p><strong>Idade: </strong><span>{ninja.info.Idade}</span></p>}    
                                {ninja.info.Peso && <p><strong>Peso: </strong><span>{ninja.info.Peso}</span></p>}
                                {ninja.info.Ocupação && <p><strong>Ocupação: </strong><span>{ninja.info.Ocupação}</span></p>}
                                {ninja.info.Parceiro && <p><strong>Parceiros: </strong><span>{ ninja.info.Parceiro}</span></p>}

                                </div> */}

                                
                                <div className="btn">
                                
                                <Link to={`/ninja/${ninja.id}`}><button className="Sobre"><strong>Sobre</strong></button></Link>

                                </div>

                            </div>                                
                    )
                })
            }
            </div>
        </>
    )
}

export default Home



// let pokemonList = []
//     useEffect(() => {
//         for (let i = 1; i <= 150; i++){
//             let url = `https://pokeapi.co/api/v2/pokemon/${i}`
//             fetch(url)
//                 .then((r) => r.json())
//                 .then((json) => {
//                     pokemonList.push(json)
//                 })
//             }
//             // console.log(pokemonList)

//   }, [])