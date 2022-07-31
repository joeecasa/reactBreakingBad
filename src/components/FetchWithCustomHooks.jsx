import React, { useEffect } from 'react'
import { useState } from 'react'
import { useCustomFetchQuote } from '../hooks/useCustomFetchQuote'
import BlockQuote from './BlockQuote'
import IsLoading from './IsLoading'
import { useAllCharacters } from '../hooks/useAllCharacters'

const FetchWithCustomHooks = () => {
    const [inputValue, setInputValue] = useState("")
    const [quoteId, setQuoteId] = useState("")
    const [imgCharacter, setImgCharacter] = useState("")
    

     
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (parseInt(inputValue) > 30 && parseInt(inputValue) < 71) {
            setQuoteId(parseInt(inputValue) + 32)
        } else if(parseInt(inputValue) > 71){
            setQuoteId(1)
        }
        else {
            setQuoteId(inputValue)
        }
        setInputValue("")
    }

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
   
    
    const { data, isLoading, hasErrors } = useCustomFetchQuote(`https://www.breakingbadapi.com/api/quotes/${quoteId}`)
    const { quote, author, id } = !!data && data;

    const { dataAll, isLoadingAll, hasErrorsAll } = useAllCharacters("https://www.breakingbadapi.com/api/characters")

    const { dataCharacter } = !!dataAll && dataAll;

    

useEffect(()=>{
    if(dataCharacter){
        dataCharacter.forEach((element)=>{
        if(element.name == author){
            setImgCharacter(element.img)
        }
        })
    }
    
})
console.log(imgCharacter)



    

    let onButtonClick = () => {
        let a = parseInt(quoteId)
        let b = a + 1
        if(quoteId == ""){
            setQuoteId(2)
        } else{

            setQuoteId(b)
        }
    }

    let resetQuote = () => {
        setQuoteId(1)
    }


    return (
        <main className='container'>
            <section className='text-center mt-4'>

                <h1>Breaking bad Api-quotes</h1>
                <hr />

            </section>
            {
                isLoading ?
                    (<IsLoading />)
                    :
                    (<BlockQuote img = {imgCharacter} quote={quote} quoteId={quoteId} author={author} id={id} />)
            }

            <form onSubmit={onFormSubmit} action="">
                <input
                    type="text"
                    name="numero"
                    placeholder='ingrese el numero de frase'
                    value={inputValue}
                    onChange={onInputChange}
                />
                <input type="submit" name="enviar" />
            </form>
            <button className='btn btn-outline-success w-100'
                onClick={onButtonClick}
            >
                Next quoute

            </button>
            <button className='btn btn-outline-danger w-100'
                onClick={resetQuote}
            >
                Reset

            </button>

        </main>
    )
}

export default FetchWithCustomHooks