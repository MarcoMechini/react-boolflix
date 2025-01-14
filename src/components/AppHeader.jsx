import { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";

export default function AppHeader() {

    const [cerca, setCerca] = useState('');

    const { getMovie } = useContext(GlobalContext)

    function handleOnChange(e) {
        setCerca(e.target.value)
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        console.log('cerca');
        getMovie(cerca)
    }

    return (
        <header>
            <form onSubmit={handleOnSubmit}>
                <input type="text" onChange={handleOnChange} />
                <button>Cerca</button>
            </form>
        </header>
    )
}
