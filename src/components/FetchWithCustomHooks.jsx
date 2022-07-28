import React from 'react'
import { useState } from 'react'
import { useCustomFetch } from '../hooks/useCustomFetch'
import BlockQuote from './BlockQuote'
import IsLoading from './IsLoading'

const FetchWithCustomHooks = () => {
    const [inputValue, setInputValue] = useState(0)
    const [quoteId, setQuoteId] = useState(0)

    const onFormSubmit = (event) =>{
        event.preventDefault();
        setQuoteId(inputValue)
        setInputValue()
    } 

    const onInputChange = (event) =>{
        setInputValue(event.target.value)
        console.log(inputValue)
    }




    const { data, isLoading, hasErrors } = useCustomFetch(`https://www.breakingbadapi.com/api/quotes/${quoteId}`)

    const { quote, author } = !!data && data;


    let onButtonClick = () => {
        setQuoteId(quoteId + 1)
        console.log(quoteId)
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
                    (<BlockQuote quote={quote} quoteId={quoteId} author={author} />)
            }

            <form onSubmit={onFormSubmit} action="">
                <input type="number" 
                name="numero" 
                placeholder='ingrese el numero de frase'
                value = {inputValue}
                onChange={onInputChange}
                 />
                 <input type="submit" name="" id="" value="enviar" />
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