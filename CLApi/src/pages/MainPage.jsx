import { useEffect, useState } from 'react'
import './MainPage.css'
import CoinCard from '@/components/CoinCard/CoinCard'


const MainPage = () => {
    const [coinName, setCoinName] = useState('')
    const [coins, setCoins] = useState(undefined)

    useEffect(() => {
        const handleSearch = async () => {
            try {
                const parameters = new URLSearchParams({
                    limit: 3
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
    }, [])

    return (
        <div className="main-page">

            <header className="header">
                <h1>CryptoTracker</h1>
                <p>Отслеживай курс популярных криптовалют в реальном времени</p>
            </header>


            <section className="search-section">
                <input type="text" placeholder="🔍 Найди свою монету..." className="search-input" />
            </section>


            <section className="top-crypto">
                <h2>🔥 Топ криптовалют за сегодня</h2>
                <div className="crypto-grid">
                    {coins && coins.data.map((coin) => <CoinCard key={coin.id} {...coin} />)}
                </div>
            </section>
        </div>
    )
}

export default MainPage