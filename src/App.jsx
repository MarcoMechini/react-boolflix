import GlobalContext from "./context/GlobalContext";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";

import { useEffect, useState } from 'react'
import axios from "axios";

function App() {

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

  return (
    <GlobalContext.Provider value={globalProviderValue}>
      <AppHeader></AppHeader>
      <AppMain></AppMain>
    </GlobalContext.Provider>
  )
}

export default App
