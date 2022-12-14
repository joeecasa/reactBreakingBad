import React from 'react'
import { useState } from 'react'
import { useCustomFetchCharacters } from '../hooks/useCustomFetchCharacters'
import BlockQuoteCharacters from './BlockQuoteCharacters'
import IsLoading from './IsLoading'
import "../style.css"

const FetchWithCustomHooksCharacters = () => {
    
    const [quoteId, setQuoteId] = useState("")
    const [inputValue, setInputValue] = useState("")
    const { dataC, isLoadingC, hasErrorsC } = useCustomFetchCharacters(`https://www.breakingbadapi.com/api/characters/${quoteId}`)
    const { img, name, idC, nickname } = !!dataC && dataC;


   

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (parseInt(inputValue) > 57) {
            setQuoteId(1)
        } else {
            setQuoteId(inputValue)
        }
        setInputValue("")

    }

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    

    let onButtonClick = () => {
        let a = parseInt(quoteId)
        let b = a + 1
        if (quoteId == "") {
            setQuoteId(2)
        } else {

            setQuoteId(b)
        }
    }
    let onResetQuote = () => {
        setQuoteId(1)
    }


    return (
        <main className='container'>
            <section className='text-center mt-4'>

                <h1 className='text-light'>Breaking bad Characters</h1>
                <hr />

            </section>
            <section className='d-flex al-cent'>
                <div className='w-50'>

                {
                    isLoadingC ?
                        (<IsLoading />)
                        :

                        (<BlockQuoteCharacters name={name} nickname={nickname} img={img} id={idC} />)
                }
                </div>
                <div className='w-50 div-btn'>
                    <form className='' onSubmit={onFormSubmit} action="">
                        <input
                            type="number"
                            name="numero"
                            placeholder='Ingrese numero'
                            value={inputValue}
                            onChange={onInputChange}
                            className="form-control w-100 mb-3"
                        />
                        <input className='btn btn-secondary w-100 mb-3' type="submit" name="enviar" value="Send" />
                    </form>
                    <button className='btn btn-dark w-100 mb-3'
                        onClick={onButtonClick}
                    >
                        Next quoute

                    </button>
                    <button className='btn btn-light w-100'
                        onClick={onResetQuote}
                    >
                        Reset

                    </button>
                </div>
            </section>
        </main>
    )
}

export default FetchWithCustomHooksCharacters