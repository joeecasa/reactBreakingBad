import React from 'react'

const BlockQuote = ({ quote, author, quoteId, id, img }) => {
  // const error = quoteId > "30" && quoteId < "63" 
  // console.log(quoteId)
  // const error2 = quoteId > "102"



  return (
    <section>
      {/* <blockquote className='blockquote mt-4'>
        <p className='mb-3'> No Hay frase con ese numero </p>
        <footer className='blockquote-footer'>Utilize un numero del 1 al 31 o del 62 al 102 </footer>
        <p> {quoteId}</p>
      </blockquote> */}

      <blockquote className='blockquote mt-4'>
        <p className='text-light'>{id}</p>
        <p className='mb-3 text-light'> {quote} </p>
        <footer className='blockquote-footer text-light'>  {author}</footer>
        <img className='w-25' src={img} alt="" />
    
      </blockquote>


    </section>
  )
}

export default BlockQuote