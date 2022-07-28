import { useState, useEffect } from "react";


export const useCustomFetchCharacters = (url) => {
    
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
                img: dataApi[0].img,
                name: dataApi[0].name,
                nickname : dataApi[0].nickname,
                id : dataApi[0].char_id,
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