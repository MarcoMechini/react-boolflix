import style from './AppList.module.css'
export default function AppList({ data, imgUrl, findFlag, title }) {

    function SetStar({ value }) {
        const voto = Math.ceil(value / 2);

        const stars = [];
        for (let j = 0; j < 5; j++) {
            (j < voto) ? stars.push('solid') : stars.push('regular')
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
                <div className={style.desc}>
                    <h4><strong>Titolo</strong>: {curItem.title || curItem.name}</h4>
                    <span><strong>Titolo originale</strong>: {curItem.original_title || curItem.original_name}</span>
                    <span><strong>Voto</strong>: <SetStar value={curItem.vote_average} /></span>
                    <p><strong>Overview</strong>: {curItem.overview}</p>
                    <img src={findFlag(curItem.original_language)} />
                </div>
                {(curItem.poster_path !== null) ?
                    <img className={style.copertina} src={`${imgUrl}/w342/${curItem.poster_path}`} alt={`${curItem.title || curItem.name}`} /> :
                    <div className={style.copertina} ></div>
                }
            </>
        )
    }
    return (
        <>
            <section>
                <h2>{title}</h2>
                <ul>
                    {data && data.map(curItem => (
                        <li key={curItem.id}>
                            {setList(curItem)}
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}
