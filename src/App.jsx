import GlobalContext from "./context/GlobalContext";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";

import { useState } from 'react'
import axios from "axios";

function App() {

  const [cerca, setCerca] = useState([])

  const apiUrl = 'https://api.themoviedb.org/3';
  const apiKey = 'b6fcd01fdf0aa1ab1e805569b71cdde1';

  function getMovie() {
    axios.get(`${apiUrl}/search/movie`,
      {
        params: {
          api_key: apiKey,
          query: cerca
        }
      }
    )
      .then(resp =>
        console.log(resp)
      )
  }



  const globalProviderValue = { cerca, setCerca, getMovie }

  return (
    <GlobalContext.Provider value={globalProviderValue}>
      <AppHeader></AppHeader>
      <AppMain></AppMain>
    </GlobalContext.Provider>
  )
}

export default App
