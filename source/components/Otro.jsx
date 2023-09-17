import React from 'react'
import { useCatImage } from '../hook/useCatImage'

function Otro() {
    const {imageUrl} = useCatImage({fact:'Hola'})
  return (
    <>
    {imageUrl && <img src={imageUrl} alt="Hola"/>}
    </>
  )
}

export default Otro