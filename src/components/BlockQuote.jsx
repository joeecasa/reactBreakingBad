import React from 'react'

const BlockQuote = ({quote,author,quoteId}) => {
  return (
    <section>
    <blockquote className='blockquote mt-4'>
        <p className='mb-3'> {quote} </p>
        <footer className='blockquote-footer'>  {author}</footer>

    </blockquote>
    <p> {quoteId}</p>
</section>
  )
}

export default BlockQuote