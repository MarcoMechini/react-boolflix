export default function AppList({ data, imgUrl, findFlag, title }) {

    function SetStar({ value }) {
        value = Math.ceil(value / 2);

        const stars = []
        for (let i = 0; i < 5; i++) {
            (value < 5) ? stars.push('solid') : stars.push('regular')
        }
        return (
            stars.map((star, i) => (
                <i key={i} className={`fa-${star} fa-star`}></i>
            ))
        )

    }

    function setList(curItem) {
        return (
            <>
                <img src={`${imgUrl}/w342/${curItem.poster_path}`} alt="" />
                <h4>{curItem.title}</h4>
                <span>TITOLO ORIGINALE:{curItem.original_title}</span>
                <span><SetStar value={curItem.vote_average} /></span>
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
                        {/* da metterin callback?? */}
                        {setList(curItem)}
                    </li>
                ))}
            </ul>
        </>
    )
}
