import React from 'react'

const BlockQuoteCharacters = ({ name, img, quoteId, id,nickname }) => {


  return (
    <section>
       
          <blockquote className='blockquote mt-4'>
            <p className='mb-3'> Nombre : {name} </p>
            <p className='mb-3'> NickName : {nickname} </p>
            <img className='w-25' src={img} alt="foto" />
            <p>{id}</p>
          </blockquote>
      

    </section>
  )
}

export default BlockQuoteCharacters