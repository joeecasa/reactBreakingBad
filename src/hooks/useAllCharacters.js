import { useState, useEffect } from "react";


export const useAllCharacters = (url) => {
    
    const [state, setState] = useState({
      dataAll : null,
      isLoadingAll : true,
      hasErrorsAll: null
    });
    
    useEffect(() => {
        setState({
            ...state,
            isLoading : true,
          });

        fetch(url)
        .then(res => res.json())
        .then(dataApi => setState({
            dataAll : dataApi ,
            isLoadingAll : false,
            hasErrorsAll : null
        }))
        .catch(err =>{
            setState({
                dataAll : null,
                isLoadingAll : false,
                hasErrorsAll : err
            })
        })
        
    }, [url])

    return {
        dataAll: state.dataAll,
        isLoadingAll: state.isLoadingAll,
        hasErrorsAll : state.hasErrorsAll
    }

    
}


