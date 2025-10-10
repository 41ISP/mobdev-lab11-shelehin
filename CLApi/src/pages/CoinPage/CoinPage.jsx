import { useParams } from "react-router-dom"
import "./CoinPage.css"
import { useEffect, useState } from "react"

const CoinPage = () => {
    const { id } = useParams()
    const [coinDetails, setCoinDetails] = useState(undefined)
    const { symbol, name, nameid, rank, price_usd, percent_change_24h, percent_change_1h,
        percent_change_7d, price_btc, market_cap_usd, volume24, csupply, tsupply, msupply } = coinDetails || {}
    useEffect(() => {
        const handleSearch = async () => {
            try {
                const parameters = new URLSearchParams({
                    id: id
                })
                const res = await fetch(`https://api.coinlore.net/api/ticker/?${parameters.toString()}`)
                const json = await res.json()
                console.log(json);
                setCoinDetails(json[0])
            } catch (err) {
                console.error(err)
            }
        }
        handleSearch()
    }, [])
    return (
        <div className="coin-page">
            {coinDetails && <>
                <header className="coin-header">
                    <img src={`https://cryptologos.cc/logos/${nameid}-${symbol.toLowerCase()}-logo.png" alt={name} className="coin-icon`} />
                    <div className="coin-title">
                        <h1>{name}</h1>
                        <p className="symbol">{symbol}</p>
                    </div>
                    <span className="rank">#{rank}</span>
                </header>

                <section className="price-info">
                    <p className="current-price">${price_usd}</p>
                    <div className="price-changes">
                        <p className={`change ${parseFloat(percent_change_1h) < 0 ?
                            "negative" : "positive"}`} > 1h: {percent_change_1h}% </p>

                        <p className={`change ${parseFloat(percent_change_24h) < 0 ?
                            "negative" : "positive"}`} > 24h: {percent_change_24h}% </p>

                        <p className={`change ${parseFloat(percent_change_7d) < 0 ?
                            "negative" : "positive"}`} > 7d: {percent_change_7d}% </p>
                    </div>
                </section>

                <section className="market-info">
                    <h2>Market Info</h2>
                    <div className="market-grid">
                        <div className="market-card">
                            <span className="label">Market Cap</span>
                            <span className="value">${Number(market_cap_usd).toLocaleString()}</span>
                        </div>

                        <div className="market-card">
                            <span className="label">Volume (24h)</span>
                            <span className="value">${Number(volume24).toLocaleString()}</span>
                        </div>

                        <div className="market-card">
                            <span className="label">Circulating Supply</span>
                            <span className="value">{Number(csupply).toLocaleString()}</span>
                        </div>

                        <div className="market-card">
                            <span className="label">Total Supply</span>
                            <span className="value">{Number(tsupply).toLocaleString()}</span>
                        </div>

                        <div className="market-card">
                            <span className="label">Max Supply</span>
                            <span className="value">{Number(msupply).toLocaleString()}</span>
                        </div>
                    </div>
                </section>

                <section className="btc-section">
                    <div className="btc-card">
                        <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="BTC" className="btc-icon" />
                        <div className="btc-info">
                            <h2>{price_btc} BTC</h2>
                            <p>Current BTC equivalent</p>
                        </div>
                    </div>
                </section>
            </>}
        </div>

    )
}

export default CoinPage