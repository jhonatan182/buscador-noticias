import { NoticasProvider } from "./context/NoticiasContext";
import AppNoticas from './components/AppNoticas';

function App() {

    return (

      <NoticasProvider>
        <AppNoticas />
      </NoticasProvider>
    )
}

export default App
