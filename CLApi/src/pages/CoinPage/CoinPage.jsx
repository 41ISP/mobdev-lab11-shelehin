import { useParams } from "react-router-dom"
import "./CoinPage.css"
import { useEffect, useState } from "react"

const CoinPage = () => {
    const { id } = useParams()
    const [coinDetails, setCoinDetails] = useState(undefined)
    const {name} = coinDetails
    useEffect(() => { 
    const handleSearch = async () => {
            try {
                const parameters = new URLSearchParams({
                    id: id
                })
                const res = await fetch(`https://api.coinlore.net/api/ticker/?${parameters.toString()}`)
                const json = await res.json()
                console.log(json);
                setCoinDetails(json)
            } catch (err) {
                console.error(err)
            }
        }
        handleSearch()
    }, [])
    return (
        <div className="coin-page">
{ coinDetails && <>
           <header className="coin-header">
                <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="{name}" className="coin-icon" />
                <div className="coin-title">
                    <h1>{name}</h1>
                    <p className="symbol">{symbol}</p>
                </div>
                <span className="rank">#{rank}</span>
            </header>

            <section className="price-info">
                <p className="current-price">${price_usd}</p>
                <div className="price-changes">
                    <p className="change negative">1h: {percent_change_1h}%</p>
                    <p className="change negative">24h: {percent_change_24h}%</p>
                    <p className="change positive">7d: {percent_change_7d}%</p>
                </div>
            </section>

            <section className="market-info">
                <h2>Market Info</h2>
                <p>Market Cap: ${market_cap_usd}</p>
                <p>Volume 24h: ${volume24}</p>
                <p>Circulating Supply: {csupply} {name}</p>
                <p>Total Supply: {tsupply} {name}</p>
                <p>Max Supply: {msupply} {name}</p>
            </section>

            <section className="chart-section">
                <h2>{price_btc}</h2>
                <div className="chart-placeholder">
                </div>
            </section>
</>}
        </div>

    )
}

export default CoinPage