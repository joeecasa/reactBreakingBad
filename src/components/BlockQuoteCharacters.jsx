import React from 'react'
import "../style.css"

const BlockQuoteCharacters = ({ name, img, quoteId, id,nickname }) => {


  return (
    <section>
       
          <blockquote className='blockquote mt-4'>
            <p className='mb-3 text-light'> {name} </p>
            <p className='mb-3 text-light'> {nickname} </p>
            <img className='img-characters' src={img} alt="foto" />
            <p>{id}</p>
          </blockquote>
      

    </section>
  )
}

export default BlockQuoteCharacters