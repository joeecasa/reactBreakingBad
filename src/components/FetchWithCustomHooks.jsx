import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useCustomFetch } from '../hooks/useCustomFetch'

const FetchWithCustomHooks = () => {

    const [quoteId, setQuoteId] = useState(1)
    const { data, isLoading, hasErrors } = useCustomFetch(`https://www.breakingbadapi.com/api/quotes/${quoteId}`)

    const { quote, author } = !!data && data;


    let onButtonClick = () => {
        setQuoteId(quoteId + 1)
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
                    (
                        <section>
                            <div className="alert alert-info text-center" role="alert">
                                Loading....
                            </div>
                            {/* <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div> */}
                        </section>

                    )
                    :
                    (

                        <section>
                            <blockquote className='blockquote mt-4'>
                                <p className='mb-3'> {quote} </p>
                                <footer className='blockquote-footer'>  {author}</footer>

                            </blockquote>
                            <p> {quoteId}</p>
                        </section>
                    )
            }
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