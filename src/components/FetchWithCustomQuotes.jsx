import React, { useEffect } from 'react'
import { useState } from 'react'
import { useCustomFetchQuote } from '../hooks/useCustomFetchQuote'
import BlockQuote from './BlockQuoteQuotes'
import IsLoading from './IsLoading'
import { useAllCharacters } from '../hooks/useAllCharacters'
import "../style.css"

const FetchWithCustomHooks = () => {
    const [inputValue, setInputValue] = useState("")
    const [quoteId, setQuoteId] = useState("")
    const [imgCharacter, setImgCharacter] = useState("https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg")



    const onFormSubmit = (event) => {
        event.preventDefault();
        if (parseInt(inputValue) > 30 && parseInt(inputValue) < 71) {
            setQuoteId(parseInt(inputValue) + 32)
        } else if (parseInt(inputValue) > 71) {
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


    useEffect(() => {
        if (dataAll) {
            dataAll.forEach((element) => {
                if (element.name === author) {
                    setImgCharacter(element.img)
                } 
            })
        }
    }, [author])

    let onButtonClick = () => {
        let a = parseInt(quoteId)
        let b = a + 1
        if (quoteId == "") {
            setQuoteId(2)
        } else {

            setQuoteId(b)
        }
    }

    let resetQuote = () => {
        setQuoteId(1)
    }


    return (
        <main className='container'>
            <section className='text-center mt-4'>

                <h1 className='text-light'>Breaking bad Quotes</h1>
                <hr />

            </section>
            <section className='d-flex al-cent'>


                {
                    isLoading ?
                        (<IsLoading />)
                        :
                        (<BlockQuote img={imgCharacter} quote={quote} quoteId={quoteId} author={author} id={id} />)
                }
                <div className='w-50 div-btn'>
                    <form className='' onSubmit={onFormSubmit} action="">
                        <input
                            type="text"
                            name="numero"
                            placeholder='ingrese el numero de frase'
                            value={inputValue}
                            onChange={onInputChange}
                            className="form-control w-100 mb-3"
                        />
                        <input className='btn btn-secondary w-100 mb-3' type="submit" name="enviar" value="Send"/>
                    </form>
                    <button className='btn btn-dark w-100 mb-3'
                        onClick={onButtonClick}
                    >
                        Next quoute

                    </button>
                    <button className='btn btn-light w-100'
                        onClick={resetQuote}
                    >
                        Reset

                    </button>


                </div>

            </section>

        </main>
    )
}

export default FetchWithCustomHooks