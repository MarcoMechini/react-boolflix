export default function AppList({ data, imgUrl, findFlag, title }) {

    function setList(curItem) {
        return (
            <>
                <img src={`${imgUrl}/w200/${curItem.poster_path}`} alt="" />
                <h4>{curItem.title}</h4>
                <span>TITOLO ORIGINALE:{curItem.original_title}</span>
                <span>VOTO:{curItem.vote_average}</span>
                <img src={findFlag(curItem.original_language)} />
                {/* <p>{curItem.overview}</p> */}
            </>
        )
    }
    return (
        <>
            <h2>{title}</h2>
            <ul>
                {data && data.map(curItem => (
                    <li key={curItem.id}>
                        {setList(curItem)}
                    </li>
                ))}
            </ul>
        </>
    )
}
