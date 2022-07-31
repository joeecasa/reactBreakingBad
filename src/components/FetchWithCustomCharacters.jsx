import React from 'react'
import { useState } from 'react'
import { useCustomFetchCharacters } from '../hooks/useCustomFetchCharacters'
import BlockQuoteCharacters from './BlockQuoteCharacters'
import IsLoading from './IsLoading'

const FetchWithCustomHooksCharacters = () => {
    const [quoteId, setQuoteId] = useState("")
    const [inputValue, setInputValue] = useState("")

    const onFormSubmit = (event) =>{
        event.preventDefault();
        if (parseInt(inputValue) > 57 ) {
            setQuoteId(1)
        } else {
            setQuoteId(inputValue)
        }
        setInputValue("")
        
    } 

    const onInputChange = (event) =>{
        setInputValue(event.target.value)
    }

    const { dataC, isLoadingC, hasErrorsC } = useCustomFetchCharacters(`https://www.breakingbadapi.com/api/characters/${quoteId}`)
    const { img, name, id , nickname } = !!dataC && dataC;


    let onButtonClick = () => {
        let a = parseInt(quoteId)
        let b = a + 1
        if(quoteId == ""){
            setQuoteId(2)
        } else{

            setQuoteId(b)
        }
    }
    let onResetQuote = () => {
        setQuoteId(1)
    }


    return (
        <main className='container'>
            <section className='text-center mt-4'>

                <h1>Breaking bad Api-characters</h1>
                <hr />

            </section>
            {
                isLoadingC ?
                    (<IsLoading />)
                    :
                    
                    (<BlockQuoteCharacters name={name} nickname={nickname} img={img} id={id} />)
            }

            <form onSubmit={onFormSubmit} action="">
                <input
                type="number" 
                name="numero" 
                placeholder='ingrese el numero de frase'
                value = {inputValue}
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
                onClick={onResetQuote}
            >
                Reset

            </button>
            
        </main>
    )
}

export default FetchWithCustomHooksCharacters