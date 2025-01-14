import { useContext } from "react"
import GlobalContext from "../context/GlobalContext"

export default function AppMain() {

    const { apiResp } = useContext(GlobalContext)
    console.log('apiResp', apiResp);

    const imgUrl = 'https://image.tmdb.org/t/p'

    return (
        <main>
            <ul>
                {apiResp && apiResp.map(curItem => (
                    <li key={curItem.id}>
                        <img src={`${imgUrl}/w200/${curItem.poster_path}`} alt="" />
                        <h4>{curItem.title}</h4>
                        <p>{curItem.overview}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}
