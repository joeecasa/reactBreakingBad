import React, { useEffect, useState } from 'react'
import { useCustomFetchCharacters } from '../hooks/useCustomFetchCharacters'
import "../style.css"





const Home = () => {
const [foto, setFoto] = useState("")

const { dataC, isLoadingC, hasErrorsC } = useCustomFetchCharacters("https://www.breakingbadapi.com/api/characters/1")

const { img } = !!dataC && dataC;



useEffect(() => {
  setFoto(img)

})



  return (
    <div >
        <h1 className='text-center fs-1 text-light'>Breaking Bad React</h1>
        
    </div>
  )
}

export default Home