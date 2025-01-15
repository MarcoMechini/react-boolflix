import { GlobalProvider } from "./context/GlobalContext";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";


function App() {

  // file utilizzato solo per gestire le 'rotte' o comunque il reidirizzamento dei componenti
  return (
    <GlobalProvider>
      <AppHeader></AppHeader>
      <AppMain></AppMain>
    </GlobalProvider>
  )
}

export default App
