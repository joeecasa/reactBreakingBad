import React, { useEffect, useState } from 'react'
import { useCustomFetchCharacters } from '../hooks/useCustomFetchCharacters'




const Home = () => {
const [foto, setFoto] = useState("")

const { dataC, isLoadingC, hasErrorsC } = useCustomFetchCharacters("https://www.breakingbadapi.com/api/characters/1")
const { img } = !!dataC && dataC;



useEffect(() => {
  setFoto(img)

  
}, [])



  return (
    <div>
        <h1>Bievenido a la pagina principal de Breaking Bad</h1>
        <img src="" alt="" />
    </div>
  )
}

export default Home