import { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";

export default function AppHeader() {

    const [cerca, setCerca] = useState('');

    const { getData } = useContext(GlobalContext)

    function handleOnChange(e) {
        setCerca(e.target.value)
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        getData(cerca);
    }

    function handleOnKeyUp(e) {
        if (e.key === 'Enter') getData(cerca);
    }

    return (
        <header>
            <input type="text" onChange={handleOnChange} onKeyUp={handleOnKeyUp} />
            <button onClick={handleOnSubmit}>Cerca</button>
        </header>
    )
}
