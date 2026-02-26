import React, { useState, useEffect} from "react";

export const Api = () => {

let [character, setCharacter] = useState([]);

const obtenerPersonajes  = () => {

const apiUrl = "https://rickandmortyapi.com/api"

fetch(apiUrl + "/character")
.then (response => response.json()) //transforma la respuesta a json
.then (data => setCharacter(data.results)) //usar los datos obtenidos
.catch (error =>  console.log("error:" (error))) //manejo de errores



}

useEffect(() => {
  obtenerPersonajes();
}, []); 





    return(

        <div>
            
            {character.map (character => (
<li key={character.id}>Nombre de personaje:  {character.name}</li>

))}
        </div>
    )
}

