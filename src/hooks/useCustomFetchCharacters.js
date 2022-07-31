import { useState, useEffect } from "react";


export const useCustomFetchCharacters = (url) => {
    
    const [state, setState] = useState({
      dataC : null,
      isLoadingC : true,
      hasErrorsC: null
    });
    
    useEffect(() => {
        setState({
            ...state,
            isLoading : true,
          });

        fetch(url)
        .then(res => res.json())
        .then(dataApi => setState({
            dataC : {
                img: dataApi[0].img,
                name: dataApi[0].name,
                nickname : dataApi[0].nickname,
                idC : dataApi[0].char_id,
            },
            isLoadingC : false,
            hasErrorsC : null
        }))
        .catch(err =>{
            setState({
                dataC : null,
                isLoadingC : false,
                hasErrorsC : err
            })
        })
        
    }, [url])

    return {
        dataC: state.dataC,
        isLoadingC: state.isLoadingC,
        hasErrorsC : state.hasErrorsC
    }

    
}