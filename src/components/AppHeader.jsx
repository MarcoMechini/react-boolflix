import './AppHeader.module.css'
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
            <img src="/images/logo.png" alt="" />
            <div>
                <input type="text" onChange={handleOnChange} onKeyUp={handleOnKeyUp} />
                <button onClick={handleOnSubmit}><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </header>
    )
}
