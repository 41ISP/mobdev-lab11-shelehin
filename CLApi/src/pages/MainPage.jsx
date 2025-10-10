import { useEffect, useState } from 'react'
import './MainPage.css'
import CoinCard from '@/components/CoinCard/CoinCard'
import Pagination from '@/components/Pagination/Pagination'


const MainPage = () => {
    const [curPage, setCurPage] = useState(1)
    const [coins, setCoins] = useState(undefined)
    const limit = 9

    useEffect(() => {
        const handleSearch = async () => {
            try {
                const parameters = new URLSearchParams({
                    limit, start: limit * (curPage - 1)
                })
                const res = await fetch(`https://api.coinlore.net/api/tickers/?${parameters.toString()}`)
                const json = await res.json()
                console.log(json);
                setCoins(json)
            } catch (err) {
                console.error(err)
            }
        }
        handleSearch()
    }, [curPage])
    
    return (
        <div className="main-page">

            <header className="header">
                <h1>CryptoTracker</h1>
                <p>Отслеживай курс популярных криптовалют в реальном времени</p>
            </header>

            <section className="top-crypto">
                <div className="crypto-grid">
                    {coins && coins.data.map((coin) => <CoinCard key={coin.id} {...coin} />)}
                </div>
            </section>
            {coins && <Pagination setCurPage={setCurPage} coins={coins} limit={limit} curPage={curPage}/>}
        </div>
    )
}

export default MainPage