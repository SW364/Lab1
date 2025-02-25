import React from 'react'

export const Quinto = () => {
    const apiKey = 'VArp2BZRFsUEfC7Dr6jlR5D5yCaiyM4x';
    const peticion = fetch(`https://api.giphy.com/v1/gifs/trending?api_key=` + apiKey);
    
    peticion.then(resp => resp.json() )
            .then( data =>{ console.log(data.data[0].url)})
            .catch( console.warn);
 
    return (
    <div>Quinto</div>
  )
}
