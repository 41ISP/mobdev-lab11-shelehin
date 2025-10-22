import "./Pagination.css"

const Pagination = ({limit, coins, curPage, setCurPage}) => {
    const allPages = Math.ceil(coins.info.coins_num / limit)

    
    // res div * remain of div
    return (
        <div className="pagination">
            {curPage - 1 > 0 && <button onClick={() => setCurPage(v => v - 1)} className="pagination__btn">{"< Previous"}</button>}
            <span className="pagination__cur-page">{curPage}</span>
            {curPage < allPages && <button onClick={() => setCurPage(v => v + 1)} className="pagination__btn">{"> Next"}</button>}

        </div>
    )
}

export default Pagination