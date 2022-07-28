import { useState, useEffect } from "react";


export const useCustomFetchQuote = (url) => {
    
    const [state, setState] = useState({
      data : null,
      isLoading : true,
      hasErrors: null
    });
    
    useEffect(() => {
        setState({
            ...state,
            isLoading : true,
          });

        fetch(url)
        .then(res => res.json())
        .then(dataApi => setState({
            data : {
                author: dataApi[0].author,
                quote: dataApi[0].quote,
                id : dataApi[0].id,
            },
            isLoading : false,
            hasErrors : null
        }))
        .catch(err =>{
            setState({
                data : null,
                isLoading : false,
                hasErrors : err
            })
        })
        
    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasErrors : state.hasErrors
    }

    
}