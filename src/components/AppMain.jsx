import { useContext } from "react"
import GlobalContext from "../context/GlobalContext"
import AppList from "./AppList";

export default function AppMain() {

    const { movieResp, tvResp } = useContext(GlobalContext)

    const imgUrl = 'https://image.tmdb.org/t/p'

    function findFlag(i) {
        let flag = '';
        switch (i) {
            case 'it':
                flag = 'images/it.png'
                break;
            case 'en':
                flag = 'images/en.png'
                break;
            default:
                flag = 'images/placeholder.png'
                break;
        }
        return flag
    }

    return (
        <main>
            <AppList title={'Movie'} data={movieResp} imgUrl={imgUrl} findFlag={findFlag}></AppList>
            <AppList title={'TV Series'} data={tvResp} imgUrl={imgUrl} findFlag={findFlag}></AppList>
        </main>
    )
}
