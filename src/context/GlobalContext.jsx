import axios from "axios";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext()


// funzione per ritornare il GlobalContext.Provider passandogli il value 
// dato che la logica ora è tutta in questo file
function GlobalProvider({ children }) {

    const [movieResp, setMovieResp] = useState([])
    const [tvResp, setTvResp] = useState([])

    const apiUrl = 'https://api.themoviedb.org';
    const apiKey = 'b6fcd01fdf0aa1ab1e805569b71cdde1';


    function getData(cerca) {
        axios.get(`${apiUrl}/3/search/movie`,
            {
                params: {
                    api_key: apiKey,
                    query: cerca
                }
            }
        ).then(resp => {
            setMovieResp(resp.data.results)
        })
        axios.get(`${apiUrl}/3/search/tv`,
            {
                params: {
                    api_key: apiKey,
                    query: cerca
                }
            }
        ).then(resp => {
            setTvResp(resp.data.results)
        })
    }

    const globalProviderValue = {
        getData,
        movieResp, tvResp
    }
    // return del Global passando come children il resto dei componenti in App.jsx
    return (
        <GlobalContext.Provider value={globalProviderValue}>
            {children}
        </GlobalContext.Provider>);
}

// funzione per evitare di importare use context e GlobalContext e farlo solo in questo file
function useGlobalContext() {
    return useContext(GlobalContext)
}

export { useGlobalContext, GlobalProvider }

