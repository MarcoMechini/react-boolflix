import GlobalContext from "./context/GlobalContext";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";

import { useState } from 'react'
import axios from "axios";

function App() {

  // const [cerca, setCerca] = useState('')
  const [apiResp, setApiResp] = useState([])

  const apiUrl = 'https://api.themoviedb.org';
  const apiKey = 'b6fcd01fdf0aa1ab1e805569b71cdde1';


  function getMovie(cerca) {
    axios.get(`${apiUrl}/3/search/movie`,
      {
        params: {
          api_key: apiKey,
          query: cerca
        }
      }
    )
      .then(resp => {
        setApiResp(resp.data.results)
      }
      )
  }



  const globalProviderValue = {
    apiUrl,
    getMovie,
    apiResp
  }

  return (
    <GlobalContext.Provider value={globalProviderValue}>
      <AppHeader></AppHeader>
      <AppMain></AppMain>
    </GlobalContext.Provider>
  )
}

export default App
