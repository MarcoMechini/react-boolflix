import { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";

export default function AppHeader() {

    const { cerca, setCerca, getMovie } = useContext(GlobalContext)

    function handleOnChange(e) {
        setCerca(e.target.value)
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        console.log('cerca');
        getMovie()
    }

    return (
        <header>
            <form onClick={handleOnSubmit}>
                <input type="text" onChange={handleOnChange} />
                <button>Cerca</button>
            </form>
        </header>
    )
}
