import React from 'react'

export const Segundo = () => {
  const nombre = 'Gianni'
  const apellido = 'Freire'
  const NombreCon = nombre + ' ' + apellido

  function getSaludo(nombreCon) {
    return 'Hola, ' + nombreCon + '!'
  }


  return <h1>{getSaludo(NombreCon)}</h1>
}

export default Segundo