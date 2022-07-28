import { useState, useEffect } from "react";


export const useCustomFetch = (url) => {
    
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
                quote: dataApi[0].quote
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